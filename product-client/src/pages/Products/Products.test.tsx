import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import ProductsPage from "./Products";
import {Product} from "../../model/product.model";
import { AxiosResponse } from 'axios';
import axiosInstance from '../../utils/axios';
import {wait} from "@testing-library/user-event/dist/utils";
import {act} from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

const testProducts: Array<Product> = [
    {
        id: 1,
        title: "Test Product",
        price: 10.00,
        image_url: "https://dummyimage.com/230x150.png/dddddd/000000",
        created_at: new Date(),
        updated_at: new Date(),
    },
    {
        id: 2,
        title: "Test Product 2",
        price: 20.00,
        image_url: "https://dummyimage.com/230x150.png/dddddd/000000",
        created_at: new Date(),
        updated_at: new Date(),
    }
];

const mockedAxiosResponse = {
    data: testProducts,
} as AxiosResponse;
describe('Products', () => {
    beforeEach(async () => {
        jest.spyOn(axiosInstance, 'get').mockImplementation(() => Promise.resolve(mockedAxiosResponse));
        render(<ProductsPage />);
        await screen.findByText('Test Product')
    });

    test('renders correctly', async () => {
        expect(screen.getByText('Produkt-Katalog:')).toBeInTheDocument();
    });

    test('product loading gets started', async () => {
        expect(axiosInstance.get).toHaveBeenCalled();
    });

    test('renders loaded products', async () => {
        expect(await screen.findByText('Test Product')).toBeInTheDocument();
        expect(await screen.findByText('Test Product 2')).toBeInTheDocument();
    });

    test('renders sort & filter component', async () => {
        expect(screen.getByRole('checkbox')).toBeInTheDocument();
        expect(screen.getByRole('combobox')).toBeInTheDocument();
    });
});
