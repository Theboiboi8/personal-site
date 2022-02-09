import '../styles/globals.css'
import { createTheme, NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'
import '../styles/blur-effect.css'

const lightTheme = createTheme({
  type: 'light',
  className: 'light', // customize the class that enables this theme, `light-theme` by default
  theme: {
    fonts: {
      sans: "Inter, -apple-system, BlinkMacSystemFont, 'Dongle',"
    }
  }
})

const darkTheme = createTheme({
  type: 'dark',
  className: 'dark', // customize the class that enables this theme, `dark-theme` by default
  theme: {
    colors: {
      background: '#323744',
      primaryDark: '#323744',
      link: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
    },
    fonts: {
      sans: "Inter, -apple-system, BlinkMacSystemFont, 'Dongle',"
    }
  }
})


function MyApp({ Component, pageProps }) {
  return (
    <NextThemesProvider
    defaultTheme="system"
    attribute="class"
    value={{
      light: lightTheme.className,
      dark: darkTheme.className
    }}
    >
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>  
  );
}

export default MyApp;
