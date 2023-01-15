import { Button, TextField } from "@mui/material"
type Props = {
    count:number
    onDeccrementClick: () => void
    onIncrementClick: () => void
}
const Quantity = ({
    count,
    onDeccrementClick,
    onIncrementClick}
    : Props) => {
  return (
    <div className="product-quantity"><Button variant="outlined" onClick={() => onDeccrementClick()} disabled={count <= 1}>-</Button>
    <TextField value={count} size="small" /><Button variant="outlined" onClick={() => onIncrementClick()} disabled={count >= 10}>+</Button></div>
  )
}
export default Quantity