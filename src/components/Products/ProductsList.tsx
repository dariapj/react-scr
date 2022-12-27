import {Grid} from '@mui/material'
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
        <Grid item xs={12} sm={6} md={4} >
            <ProductsListItem title="Iphone X" desc="This is Iphone X" type="phone" capacity="64GB" price="600$"></ProductsListItem>
        </Grid>
        <Grid item xs={12} sm={6} md={4} >
            <ProductsListItem title="Iphone 14 Pro" desc="This is Iphone 14 Pro" type="tablet" capacity="120GB" price="800$"></ProductsListItem>
        </Grid>
        <Grid item xs={12} sm={6} md={4} >
            <ProductsListItem title="Iphone 12" desc="This is Iphone 12" type="phone" capacity="72GB" price="400$"></ProductsListItem>
        </Grid>
    </Grid>
    </>
  )
}
export default ProductsList