import {Container} from '@mui/material'
import CartPage from 'pages/Home/CartPage/CartPage'
import Home from 'pages/Home/Home'
import { Route, Routes } from 'react-router-dom'


type Props = {
addProductToCart:(id:number, count:number)  => void

}
const Main = ({addProductToCart}: Props) => {
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
      </Routes>
      <Route path="cart"
      element={<CartPage />}
        />
        <Home addProductToCart={addProductToCart}/>
    </Container>
  )
}
export default Main