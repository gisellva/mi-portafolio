"use client"
import React, { useState } from "react"
import Typewriter from 'typewriter-effect';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import Link from "next/link";
import { Stack } from "@mui/system";
import { motion } from "framer-motion";
import "../components/styles/home.css"

export default function Titulo () {
   
    return(
       <>
       <Box  sx={{marginTop:10}} >
        <Stack 
         justifyContent="center"
         alignItems="center"
         spacing={3}>
     
       <motion.h1
       className="h1titulo"
       initial={{scale:0}}
       animate={{scale:1}}
       transition={{duration:0.1,type:"spring"}}
        >Bienvenidos
        </motion.h1>
        
        <motion.img  initial={{scale:0}}
       animate={{scale:1}}
       transition={{duration:1,type:"spring"}}
        className="imagenhome" 
        src="https://i.pinimg.com/564x/b5/75/c7/b575c7603efe3c7d7fe2fd2bd5588966.jpg" 
        alt="avatar"/>
        
       <Typography variant="h3" color="primary" >
       <Typewriter
        options={{
        strings: ['Soy Heidy Vanegas', 'Front-end developer','Apasionada por el arte y el desarrollo web'],
        autoStart: true,
        loop: true,
         }}
         />
       </Typography>
       <motion.div
  initial={{scale:0}}
  animate={{scale:1}}
  transition={{type:"spring", duration: 1 }}
> 
       <Button variant="contained" color="primary"   >
       <Link href="/sobremi">sobre mí</Link>
       </Button>
       </motion.div>
       </Stack>
       </Box>
       </>
    )
}