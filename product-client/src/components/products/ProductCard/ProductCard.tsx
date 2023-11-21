import {Product} from "../../../model/product.model";
import { Typography, Card, CardContent, Chip, Box, IconButton } from "@mui/material";
import styles from './ProductCard.module.scss';
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
            <Card className={styles.productCard}>
                <CardContent className={styles.cardContent}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'start',
                        justifyContent: 'space-between',
                        position: 'relative',
                        pr: 9
                    }}>
                        <div className={styles.productDetails}>
                            <Typography variant="h2">{product.title}</Typography>
                        </div>
                        <img
                            src={product.image_url}
                            alt={`Produktbild ${product.title}`}
                            className={styles.productImage} />
                    </Box>
                </CardContent>
                <Chip label={price} variant="filled" className={styles.priceTag} color="secondary" />
                <IconButton className={styles.favoriteButton} onClick={toggleFavorite} color="primary">
                    {!isFavorite && (
                        <StarOutlineIcon />
                    )}
                    {isFavorite && (
                        <StarIcon />
                    )}
                </IconButton>
            </Card>
        </div>
    );
}

export default ProductCard;