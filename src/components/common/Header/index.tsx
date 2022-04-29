import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import ThemeToggle from '@/components/common/ThemeToggle'

const Header = () => {
  return (
    <AppBar position="static" color="default" data-testid="header">
      <Container maxWidth="xl">
        <Toolbar>
          <IconButton sx={{ mr: 2 }}>[LOGO]</IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />
          <Button color="inherit">HOME</Button>
          <ThemeToggle />
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Header
