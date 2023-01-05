import { Button, Card, CardActions, CardContent, TextField } from '@mui/material'
import { useState } from 'react'
import './ProductsListItem.scss'

type Props = {
    title: string
    desc: string
    type: string
capacity: string
price: string
image: string
}
const ProductsListItem = ({title, desc, type, capacity, price, image}: Props) => {

    const [count, setCount] = useState<number>(1)

  return (
    <Card className='product' variant="outlined">
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
        <span>Price:</span> {price}</div>
        <div className="product-quantity"><Button variant="outlined" onClick={() => setCount(count - 1)}>-</Button>
        <TextField value={count} size="small" /><Button variant="outlined" onClick={() => setCount(count + 1)}>+</Button></div>
        </CardContent>
        <CardActions className="btns-wrap">
        <Button variant="outlined">Add to cart</Button>
        </CardActions>
    </Card>
  )
}
export default ProductsListItem