// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
  colors: {
    primary: {
      dark: "#003100",
      light: "#e6f6e6",
    },
    secondary: "#009400",
    text: {
      dark: "#000",
      light: "#fff"
    },
    border: {
      dark: 'blue',
      light: 'magenta'
    }
  }
}

// dark theme styles
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: props => ({
    body: {
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('turquoise', 'hotpink')(props),
    },
  }),
};


// 3. extend the theme
const theme = extendTheme({ config, styles })

export default theme

