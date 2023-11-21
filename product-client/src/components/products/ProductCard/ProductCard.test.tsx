import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import ProductCard from "./ProductCard";
import {Product} from "../../../model/product.model";
import {act} from "react-dom/test-utils";

const testProduct: Product = {
    id: 1,
    title: "Test Product",
    price: 10.00,
    image: "https://dummyimage.com/230x150.png/dddddd/000000",
    description: "Test Description",
    category: "Test Category",
    rating: {
        rate: 4.5,
        count: 10
    }
}
const favoriteHandler = jest.fn();
describe('ProductCard', () => {
    beforeEach(() => {
        render(<ProductCard product={testProduct} isFavorite={false} favoriteHandler={favoriteHandler} />)
    });

    test('renders all product infos', async () => {
        expect(screen.getByRole('heading')).toHaveTextContent(testProduct.title);
        expect(screen.getByRole('img')).toHaveAttribute('src', testProduct.image);
        expect(screen.getByText('10,00 €')).toBeInTheDocument();
    });

    test('calls favoriteHandler when favorite button is clicked', async () => {
        act(() => {
            userEvent.click(screen.getByRole('button'));
        })

        expect(favoriteHandler).toHaveBeenCalledTimes(1);
    });
});
