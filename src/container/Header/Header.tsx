import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container'
import Menu from 'components/Menu/Menu';
import CartHeader from 'components/CartHeader/CartHeader';
import Logo from 'components/Logo/Logo'

type Props = {}
const Header = (props: Props) => {
  return (
    <>
    <AppBar position="static" style={{
      background:'green',
    }}>
        <Container maxWidth="lg">
        <Toolbar>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
                <MenuIcon />
                </IconButton>
                <Logo />
                <Menu/>
                <CartHeader/>
                </Toolbar>
                </Container>
                </AppBar>
    </>
  )
}

export default Header