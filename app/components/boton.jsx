"use client"
import { Button } from '@mui/material'
import React from 'react'
import ReactHowler from 'react-howler'

export default function Botonmusica() {
  const [playing ,setplaying]=React.useState(false)
  const play=()=>{
    setplaying(prevState=>!prevState)
  }
  
  return (
    <div >
      
      <ReactHowler
        src='http://goldfirestudios.com/proj/howlerjs/sound.ogg'
        playing={playing}
      />
     <Button onClick={play} variant="outlined" color="secondary" >musica</Button>
     
    </div>
  )
}
