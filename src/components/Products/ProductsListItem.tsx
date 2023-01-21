import { Button, Card, CardActions, CardContent, } from '@mui/material'
import Quantity from 'components/Quantity/Quantity'
import { useState } from 'react'
import './ProductsListItem.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { toggleLikeState } from 'redux/likeReducer'


type Props = {
    id:number
    title: string
    desc: string
    type: string
capacity: string
price: number
image: string
addProductToCart:(id:number, count:number)  => void
}
const ProductsListItem = ({id, title, desc, type, capacity, price, image, addProductToCart}: Props) => {

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

const isLiked = useAppSelector((state) => state.likeProducts[id])
const dispatch = useAppDispatch()

  return (
    <Card className='product' variant="outlined">
        <CardContent>
        <Button variant="outlined" onClick={() => dispatch(toggleLikeState(id))}>
            {isLiked ? <FavoriteOutlinedIcon /> : <FavoriteBorderIcon />}</Button>
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
        <span>Price:</span> {price}$</div>
        <Quantity count={count}
        onDeccrementClick={onDeccrementClick}
        onIncrementClick={onIncrementClick}
        />
        </CardContent>
        <CardActions className="btns-wrap">
        <Button variant="outlined" onClick={() => addProductToCart(id, count)}>Add to cart</Button>
        </CardActions>
    </Card>
  )
}
export default ProductsListItem