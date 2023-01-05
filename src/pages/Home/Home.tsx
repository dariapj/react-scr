import {Typography} from '@mui/material'
import ProductsList from 'components/Products/ProductsList'

type Props = {}
const Home = (props: Props) => {
  return (
    <>
    <Typography variant="h4" align="center" component="h1" sx={{
        marginBottom:'30px'
    }}>List of Products{' '}</Typography>
    <ProductsList></ProductsList>
    </>
  )
}
export default Home
