"use client"
import React  from'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import Grid from '@mui/material/Grid'
import { Reorder } from "framer-motion"
import { motion } from "framer-motion";
export default function Carts({cursos,setcursos}) {
  
     return(
      <Reorder.Group axis="x" values={cursos} onReorder={setcursos}  >
     <Box>
       <Grid container spacing={3}>
      {cursos.map((curso)=>(
          <Grid item key={ curso.id} >
             <Reorder.Item key={cursos} value={cursos}>
             <motion.div
             initial={{scale:0}}
             animate={{scale:1}}
              transition={{ ease: "easeOut", duration: 0.5 }}
> 
         <Card sx={{ width:{xs:220, md:250,lg:290},height :{xs:100, md:100,lg:90 }}} key={ curso.id}>
         <CardContent>
          <Stack direction="row">
            <img src={curso.img} alt='logo' width={60}/>
          <Typography variant='body4' component="div" sx={{marginLeft:2}}>
         
          {curso.texto}
           </Typography>
           </Stack>
         </CardContent>
       
       </Card> 
       </motion.div>
       </Reorder.Item>
     </Grid> 
        ))}
        </Grid>
      </Box>
      </Reorder.Group>
    )
}