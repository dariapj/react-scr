import { ProductsProps } from "utils/productsArray"

type Props = {
    productCount:number
    product:ProductsProps
}
const CartProductsListItem = ({product, productCount}: Props) => {
  return (
    <div>
          {product.title} : {' '}
          {productCount}
        </div>
  )
}
export default CartProductsListItem