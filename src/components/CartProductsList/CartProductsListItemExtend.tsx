import { Button, Card, CardContent, Grid } from "@mui/material"
import { ProductsProps } from "utils/productsArray"
import './CartProductListItemExtended.scss'
import DeleteIcon from '@mui/icons-material/Delete';
import Quantity from "components/Quantity/Quantity";

type Props = {
    productCount:number
    product:ProductsProps
    removeProductFromCart:(id:number) => void
    changeProductQuantity:(id:number,count:number) => void

}

const CartProductsListItemExtend = ({ productCount, product, removeProductFromCart, changeProductQuantity }: Props) => {
  return (
    <Grid item xs={12} sm={4}>
        <Card>
            <CardContent>
                <div className="cart-img">
                    <img src={product.image} alt="" />
                    </div>
                    <div>{product.title}</div>
                    <p>Price for one item: {product.price}</p>
                    <p>Count: {productCount}</p>
                    <Quantity count={productCount}
                    onDeccrementClick={() => 
                      productCount <= 1 ? removeProductFromCart(product.id) :
                      changeProductQuantity(product.id, productCount - 1)}
                    onIncrementClick={() => changeProductQuantity(product.id, productCount + 1)}
                    minCount={0}
                    />
        <br/>
                    <Button variant="outlined" onClick={() => removeProductFromCart(product.id)}>
                      <DeleteIcon/>
                    </Button>
                </CardContent>
                </Card>
    </Grid>
  )
}
export default CartProductsListItemExtend