import './CartHeader.scss'
import productsArray, { getProductsObject, ProductsProps, } from 'utils/productsArray'

type Props = {
  productsInCart: {
    [id:number]: number
  }
  productsObject?: {
    [id:number]: ProductsProps
  }
}
const CartHeader = ({productsInCart, productsObject = getProductsObject(productsArray)}: Props) => {

  return (
    <div>
      <div>
      {Object.keys(productsInCart).map((productId) =>(
          <div key={productId}>
            {productsObject[parseInt(productId)].title} : {' '}
            {productsInCart[parseInt(productId)]}
          </div>
        ))
      }
      </div>
      <div></div>
    </div>

  )
}
export default CartHeader