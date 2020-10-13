import { createMuiTheme, CssBaseline, Link, makeStyles, ThemeProvider, Typography } from '@material-ui/core'
import { blue } from '@material-ui/core/colors'
import React from 'react'
import Title from './components/title'

const useStyles = makeStyles({
  root: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
})

const App = () => {
  const muiTheme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: blue[500],
      },
    },
  })

  const classes = useStyles()

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Title />
      <div className={classes.root}>
        <Typography variant={'h2'}>
          Hi, I'm Marc, and I write code for{' '}
          <Link href={'https://www.dgs1sdt.com'} target={'_blank'} rel={'noopener'} underline={'none'}>
            Red 5
          </Link>
          , a group of passionate Airmen solving Airmen's problems through software.
        </Typography>
      </div>
    </ThemeProvider>
  )
}

export default App
