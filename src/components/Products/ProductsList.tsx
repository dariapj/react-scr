import {Grid} from '@mui/material'
import productsArray from 'utils/productsArray'
import ProductsListItem from './ProductsListItem'


type ProductsProps = {
    id:number
    title: string
    desc: string
    type: string
capacity: string
price: number
image: string
}



type Props = {
  addProductToCart:(id:number, count:number) => void
  toogleLikeState: (id: number) => void
  productLikeState: {
    [id:number]:boolean
  }
}
    const ProductsList = ({addProductToCart,toogleLikeState,productLikeState}: Props) => {
  return (
    <>
    <Grid container
    direction="row"
    justifyContent="space-around"
    alignItems="center"
    spacing={4}>

        {
            productsArray.map(({id, title, desc, type, capacity, price, image}: ProductsProps) => (
                <Grid item xs={12} sm={6} md={4} key={id}>
                <ProductsListItem id={id} title={title} desc={desc} type={type} capacity={capacity} price={price} image={image} addProductToCart={addProductToCart}
                toogleLikeState={toogleLikeState}
                isLiked={productLikeState[id]}
                ></ProductsListItem>
            </Grid>
            ))
        }
    </Grid>
    </>
  )
}
export default ProductsList