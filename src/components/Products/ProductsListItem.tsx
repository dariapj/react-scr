import { Button, Card, CardActions, CardContent, TextField } from '@mui/material'
<<<<<<< HEAD
import { useState } from 'react'
=======
import { Component, ReactNode } from 'react'
>>>>>>> 553b331a968f8f9ed3e33b99112e25af6a7add7f
import './ProductsListItem.scss'

type Props = {
    title: string
    desc: string
    type: string
capacity: string
price: number
image: string
}
<<<<<<< HEAD
const ProductsListItem = ({title, desc, type, capacity, price, image}: Props) => {

    const [count, setCount] = useState<number>(1)
   // const [color, setColor] = useState<string>('green')

    const onIncrementClick = () =>{
        setCount((prevState: number) => prevState + 1)
    }

    const onDeccrementClick = () =>{
        setCount((prevState: number) => prevState - 1)
    }
/*const changeColor = () => {
    setColor((prevState: string) => {
        if (prevState === "green") {
            return 'red'
        } else {
            return 'green'
        }
    })
}*/
  return (
    <Card className='product' variant="outlined">
=======

type State = {
    count:number
}

class ProductsListItem extends Component <Props, State>{

state = {
    count: 1,
}
 onIcrement = () => {
    this.setState((prevState: State) => ({
        count: prevState.count + 1,
    }))
 }

    render() {
        const {
            title, desc, type, capacity, price, image} = this.props

        return (
        <Card className='product' variant="outlined">
>>>>>>> 553b331a968f8f9ed3e33b99112e25af6a7add7f
        <CardContent>
            <div className='product-img'>
                <img src={image} alt="" />
            </div>
        <div className="product-title">{title}</div>
        <div className="product-dec">{desc}</div>
        <div className="product-features">
            <span>Type: </span>{type} </div>
        <div className="product-features">
            <span>Capacity:</span> {capacity}</div>
        <div className="product-price">
<<<<<<< HEAD
        <span>Price:</span> {price}$</div>
        <div className="product-quantity"><Button variant="outlined" onClick={ onDeccrementClick} disabled={count <= 1}>-</Button>
        <TextField value={count} size="small" /><Button variant="outlined" onClick={onIncrementClick} disabled={count >= 10}>+</Button></div>
=======
        <span>Price:</span> {price}</div>
        <div className="product-quantity"><Button variant="outlined">-</Button>
        <TextField value={this.state.count} size="small" />
        <Button variant="outlined" onClick={this.onIcrement}>+</Button></div>
>>>>>>> 553b331a968f8f9ed3e33b99112e25af6a7add7f
        </CardContent>
        <CardActions className="btns-wrap">
        <Button variant="outlined">Add to cart</Button>
        </CardActions>
    </Card>
  )

    }
}




    
export default ProductsListItem