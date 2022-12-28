import {Grid} from '@mui/material'
import productsArray from 'utils/productsArray'
import ProductsListItem from './ProductsListItem'

type Props = {}
const ProductsList = (props: Props) => {
  return (
    <>
    <Grid container
    direction="row"
    justifyContent="space-around"
    alignItems="center"
    spacing={4}>

        {
            productsArray.map(({title, desc, type, capacity, price}) => (
                <Grid item xs={12} sm={6} md={4} >
                <ProductsListItem title={title} desc={desc} type={type} capacity={capacity} price={price}></ProductsListItem>
            </Grid>
            ))
        }
    </Grid>
    </>
  )
}
export default ProductsList