import { Grid, Typography } from "@mui/material"
import CartProductsList from "components/CartProductsList/CartProductsList"
import CartProductsListItemExtend from "components/CartProductsList/CartProductsListItemExtend"
import CartTotal from "components/CartTotal/CartTotal"

type Props = {
  productsInCart: {
    [id:number]: number
  }
 
}
const CartPage = ({
  productsInCart
}: Props) => {
  return (
    <div>
      <Typography variant="h4" component="h1" sx={{
        marginBottom:'30px'
    }}>
      Cart{' '}
    </Typography>
    <Grid container spacing={4}>
    <CartProductsList productsInCart={productsInCart}
     CartItem={CartProductsListItemExtend}/>
    </Grid>
     
      <CartTotal productsInCart={productsInCart}/>
    </div>
  )
}
export default CartPage