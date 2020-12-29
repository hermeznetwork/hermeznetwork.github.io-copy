import { createUseStyles } from 'react-jss'

const useTextLinkStyles = createUseStyles(theme => ({
  link: {
    color: theme.palette.orange.main,
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      color: theme.palette.orange.dark
    }
  },
  linkIcon: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginLeft: theme.spacing(2),
    fill: theme.palette.orange.main,
    '&:hover': {
      fill: theme.palette.orange.dark
    }
  },
  boxLink: {
    padding: `${theme.spacing(4)}px ${theme.spacing(5)}px`,
    borderRadius: 20,
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.gray.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    lineHeight: '29px',
    height: theme.spacing(16),
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.sm]: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(9)
    },
    '&:hover': {
      backgroundColor: theme.palette.gray.dark
    }
  },
  boxLinkText: {
    width: theme.spacing(17.5),
    paddingRight: theme.spacing(2)
  }
}))

export default useTextLinkStyles
