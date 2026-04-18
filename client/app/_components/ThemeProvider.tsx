import { ThemeProvider } from 'next-themes'
import React, { ReactNode } from 'react'

const ModeProvider = ({children}: {children: ReactNode}) => {
  return <>
  
  <ThemeProvider 
    defaultTheme='dark' 
    attribute="class" 
    enableSystem={true} 
    disableTransitionOnChange={true}
  >
    {children}
  </ThemeProvider>

  </>
}

export default ModeProvider