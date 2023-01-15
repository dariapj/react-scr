import { Button, TextField } from "@mui/material"
type Props = {
    count:number
    onDeccrementClick: () => void
    onIncrementClick: () => void
    minCount?:number
}
const Quantity = ({
    count,
    onDeccrementClick,
    onIncrementClick,
    minCount=1
  }
    : Props) => {
  return (
    <div className="product-quantity"><Button variant="outlined" onClick={() => onDeccrementClick()} disabled={count <= minCount}>-</Button>
    <TextField value={count} size="small" /><Button variant="outlined" onClick={() => onIncrementClick()} disabled={count >= 10}>+</Button></div>
  )
}
export default Quantity