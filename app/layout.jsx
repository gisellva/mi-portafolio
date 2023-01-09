"use client"
import './globals.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {  grey, deepOrange, lightGreen,blue } from '@mui/material/colors';

export default function RootLayout({ children }) {
  const theme = createTheme({
    palette: {
      primary: {
        main:deepOrange[100],
      },
     secondary:{
      main:grey[50],
     },
     info:{
      main:blue[300]
     }
    },
  });
  return (
    <html lang="en"> 
      <head />
      <ThemeProvider theme={theme}>
      <body>{children}</body>
      </ThemeProvider>
    </html>
  )
}
