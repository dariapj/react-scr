import CssBaseline from '@mui/material/CssBaseline';
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import { StyledEngineProvider } from '@mui/material/styles';
import { useState } from 'react'


type ProductsInCart = {
  [id:number]: number
}

const App = () => {
 
const [productsInCart, setProductsInCart] = useState<ProductsInCart>({
  1:5,
  2:1,
})

const addProductToCart = (id:number, count:number) => {
  setProductsInCart((prevState:ProductsInCart) => ({
    ...prevState,
    [id] : (prevState[id] || 0) + count,
  }))
}
  
const removeProductFromCart = (id:number) => (
  setProductsInCart((prevState: ProductsInCart) => {
    let prevProductsInCart = {...prevState}
    delete prevProductsInCart[id]
    return prevProductsInCart
  })
)
  
  return (
  
    <StyledEngineProvider injectFirst>
    <CssBaseline/>
    <Header productsInCart={productsInCart}/>
    <button onClick={() => removeProductFromCart(1)}>Delete product</button>
    <Main addProductToCart={addProductToCart} productsInCart={productsInCart}/>
    </StyledEngineProvider>
    
  )
}
export default App