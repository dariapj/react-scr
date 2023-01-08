import {Typography} from '@mui/material'
import ProductsList from 'components/Products/ProductsList'

type Props = {
  addProductToCart:(count: number, price: number) => void
}
const Home = ({addProductToCart}: Props) => {
  return (
    <>
    <Typography variant="h4" align="center" component="h1" sx={{
        marginBottom:'30px'
    }}>List of Products{' '}</Typography>
    <ProductsList addProductToCart={addProductToCart}></ProductsList>
    </>
  )
}
export default Home
