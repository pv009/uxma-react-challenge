import {fireEvent, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import SortAndFilter from "./SortAndFilter";
import {ChangeEvent} from "react";
import { SelectChangeEvent } from '@mui/material';
import userEvent from "@testing-library/user-event";
import {act} from "react-dom/test-utils";

const handleFilter = jest.fn()

const handleSort = jest.fn()
describe('SortandFilter', () => {
    beforeEach(() => {
        render(<SortAndFilter sortHandler={handleSort} filterHandler={handleFilter} sort={"asc"} filterFavorites={false} />);
    });

    test('renders correctly', async () => {
        expect(screen.getByRole('checkbox')).toBeInTheDocument();
        expect(screen.getByRole('combobox')).toBeInTheDocument();
    });

    test('handles favorite filter correctly', async () => {
        expect(screen.getByRole('checkbox')).not.toBeChecked();

        const checkbox = screen.getByRole('checkbox')
        act(() => {
            userEvent.click(checkbox)
        });

        expect(handleFilter).toHaveBeenCalled();
    })

    test('handles sort correctly', async () => {
        const select = screen.getByRole('combobox');

        expect(select).toHaveTextContent('Preis aufsteigend');

        act(() => {
            userEvent.click(select)
        });

        const menuItem = screen.getByText('Preis absteigend')
        act(() => {
            userEvent.click(menuItem)
        });

        expect(handleSort).toHaveBeenCalled();
    });
});