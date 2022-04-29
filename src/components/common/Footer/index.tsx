import { Container, Typography } from '@mui/material'
import Box from '@mui/material/Box'

const Footer = () => {
  return (
    <Box component="footer" data-testid="footer" sx={{ py: 5, mt: 5 }}>
      <Container>
        <Typography align="center">
          Copyright @ {new Date().getFullYear()}
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
