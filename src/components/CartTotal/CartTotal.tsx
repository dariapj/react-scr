import productsArray, { getProductsObject, ProductsProps } from "utils/productsArray"

type Props = {
    productsInCart:{
        [id:number]: number
    }
    productsObject?: {
        [id:number]: ProductsProps
      }
}
const CarttTotal = ({productsInCart, productsObject = getProductsObject(productsArray)}: Props) => {
  return (
    <div>Total: { ' ' }
    {
    Object.keys(productsInCart).reduce((total, productId) => (total + productsInCart[parseInt(productId)] * productsObject[parseInt(productId)].price),0)
    } $</div>
  )
}
export default CarttTotal