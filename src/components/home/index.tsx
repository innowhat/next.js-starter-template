import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Link from 'next/link'

const homeData = {
  title: 'NextJS Starter Template',
  description:
    ' Scalable, maintainable with focus on simplicity and best practices. Pre-configured with.',
  features: [
    {
      title: 'Typescript',
      description: 'TypeScript is JavaScript with syntax for typesI.',
      url: 'https://www.typescriptlang.org',
    },
    {
      title: 'Jest',
      description: 'For unit and component testing experience',
      url: 'https://jestjs.io',
    },
    {
      title: 'Cypress',
      description: 'For complete end-to-end testing experience',
      url: 'https://www.cypress.io/',
    },
    {
      title: 'Husky',
      description: 'Husky improves your commits and more 🐶 woof!',
      url: 'https://typicode.github.io/husky',
    },
  ],
}

const HomeView = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 8, textAlign: 'center' }}>
        <Typography variant="h1" gutterBottom>
          {homeData.title}
        </Typography>
        <Typography>{homeData.description}</Typography>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          {homeData.features.map((feature) => (
            <Grid item sm={6} key={feature.title} width="100%">
              <Card sx={{ py: 5 }}>
                <Link href={feature.url} passHref>
                  <CardContent>
                    <Typography variant="h4">{feature.title}</Typography>
                    <Typography>{feature.description}</Typography>
                  </CardContent>
                </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}

export default HomeView
