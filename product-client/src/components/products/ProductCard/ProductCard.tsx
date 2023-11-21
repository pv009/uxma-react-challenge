import {Product} from "../../../model/product.model";
import { Typography, Card, CardContent, Chip, Box, Button } from "@mui/material";
import styles from './ProductCard.module.css';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';

interface ProductCardProps {
    product: Product;
    isFavorite: boolean;
    favoriteHandler: any;
}
const ProductCard = (props: ProductCardProps) => {
    const {product, isFavorite, favoriteHandler } = props;
    const price = `${product.price.toString().replace('.', ',')} €`;

    const toggleFavorite = () => {
        favoriteHandler(product.id);
    }

    return (
        <div className={styles.productCardContainer}>
            <Card>
                <CardContent>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'start',
                        justifyContent: 'space-between',
                        position: 'relative',
                        pr: 10
                    }}>
                        <div className={styles.productDetails}>
                            <Typography variant="h3">{product.title}</Typography>
                            <Chip label={price} variant="filled" className={styles.priceTag} />
                        </div>
                        <img src={product.image_url} alt={`Produktbild ${product.title}`} />
                        <Button variant="text" className={styles.favoriteButton} onClick={toggleFavorite}>
                            {!isFavorite && (
                                <StarOutlineIcon />
                            )}
                            {isFavorite && (
                                <StarIcon />
                            )}
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </div>
    );
}

export default ProductCard;