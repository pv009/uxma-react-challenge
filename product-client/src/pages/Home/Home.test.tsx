import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from './Home'

describe('Home', () => {
    test('renders correctly', async () => {
        render(<Home />)
        expect(screen.getByText('Willkommen bei Fake-Store!')).toBeInTheDocument()
        expect(screen.getByRole('link')).toBeInTheDocument()
    });
});