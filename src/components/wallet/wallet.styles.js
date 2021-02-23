import { createUseStyles } from 'react-jss'

const useWalletStyles = createUseStyles(theme => ({
  row: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    [theme.breakpoints.md]: {
      flexDirection: 'row'
    }
  },
  col2: {
    [theme.breakpoints.md]: {
      width: '50%',
      marginLeft: 'auto'
    }
  },
  col3: {
    [theme.breakpoints.md]: {
      margin: 'auto',
      width: '33%'
    }
  },
  sectionWrapper: {
    '&:nth-child(odd)': {
      backgroundColor: theme.palette.primary.light
    }
  },
  section: {
    padding: `${theme.spacer * 8}px ${theme.spacer * 2}px ${theme.spacer * 6}px ${theme.spacer * 2}px`,
    flexDirection: 'column',
    [theme.breakpoints.md]: {
      padding: `${theme.spacer * 12}px ${theme.spacer * 2.5}px`,
      flexDirection: 'row'
    },
    [theme.breakpoints.xl]: {
      width: theme.spacer * 127.5
    },
    margin: 'auto',
    width: '100%'
  },
  section1: {
    display: 'flex',
    flexDirection: 'column-reverse',
    textAlign: 'center',
    [theme.breakpoints.md]: {
      flexDirection: 'row',
      textAlign: 'left'
    }
  },
  section1img: {
    backgroundImage: 'url(../wallet-section1.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    margin: 'auto',
    width: '100%',
    height: '100vw',
    marginTop: theme.spacer * 2,
    [theme.breakpoints.md]: {
      height: '601px',
      marginTop: 0
    }
  },
  mainTitle: {
    margin: 'auto auto auto 0'
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.md]: {
      justifyContent: 'left'
    }
  },
  section2: {
    display: 'flex',
    flexDirection: 'column-reverse',
    textAlign: 'center',
    [theme.breakpoints.md]: {
      flexDirection: 'row',
      textAlign: 'left'
    }
  },
  section2img: {
    backgroundImage: 'url(../wallet-section2.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    margin: 'auto',
    width: '100%',
    height: '100vw',
    marginTop: theme.spacer * 2,
    [theme.breakpoints.md]: {
      height: '577px',
      marginTop: 0
    }
  },
  section2paragraph: {
    paddingTop: theme.spacer * 2
  },
  checkMark: {
    color: theme.palette.orange.light,
    paddingRight: theme.spacer
  }
}))

export default useWalletStyles