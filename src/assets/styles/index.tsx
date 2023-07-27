import { Base, Reset, Theme } from './configs'

const GlobalStyles: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <>
      <Reset />
      <Base />
      <Theme>{children}</Theme>
    </>
  )
}

export { GlobalStyles }
