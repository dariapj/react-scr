import {Typography} from '@mui/material'
import ProductsList from 'components/Products/ProductsList'
import Reviews from 'components/Reviews/Reviews'

type Props = {
  addProductToCart:(id:number, count:number)  => void
  toogleLikeState: (id: number) => void
  productLikeState: {
    [id:number]:boolean
  }
}
const Home = ({addProductToCart,toogleLikeState,productLikeState}: Props) => {
  return (
    <>
    <Typography variant="h4" align="center" component="h1" sx={{
        marginBottom:'30px'
    }}>List of Products{' '}</Typography>
    <ProductsList addProductToCart={addProductToCart}
    productLikeState={productLikeState}
    toogleLikeState={toogleLikeState}
    ></ProductsList>
    <Reviews />
    </>
  )
}
export default Home
