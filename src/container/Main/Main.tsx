import {Container} from '@mui/material'
import CartPage from 'pages/CartPage/CartPage'
import Home from 'pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import About from 'pages/About/About'
import Payment from 'pages/Payment/Payment'
import Shipping from 'pages/Shipping/Shipping'



type Props = {
addProductToCart:(id:number, count:number)  => void
removeProductFromCart:(id:number) => void
productsInCart:{[id: number]: number}
}
const Main = ({addProductToCart, productsInCart, removeProductFromCart}: Props) => {
  return (
    <Container maxWidth="lg" sx={{
        padding: '50px 0'
    }}
    component="main"
    >
      <Routes>
        <Route path="/"
        element={<Home addProductToCart={addProductToCart}
        />}/>
      
      <Route path="about"
      element={<About />}
        />
        <Route path="shipping"
      element={<Shipping />}
        />
        <Route path="payment"
      element={<Payment />}
        />
      <Route path="cart"
      element={<CartPage productsInCart={productsInCart}
      removeProductFromCart={removeProductFromCart}
      />}
        />
        </Routes>
    </Container>
  )
}
export default Main