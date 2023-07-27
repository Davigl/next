import { ThemeProvider } from 'styled-components'

// Set the zeroheight theme here.

const theme = {
  colors: {
    background: '#F4F5F4',
    green: {},
    gray: {},
    black: {},
  },
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
}

const Theme: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export { Theme }
