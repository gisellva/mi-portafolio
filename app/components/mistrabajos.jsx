"use client"

import { Box, Typography } from "@mui/material"
import { Stack } from "@mui/system"
import Cartsmistrabajos from "./cartsmistrabajos"

export default function Mistrabajos() {
    return(
        <Box sx={{marginTop:11}}>
            <Stack  justifyContent="center"
         alignItems="center"
         spacing={2}>
            <Typography variant="h2" color="primary">Mis trabajos</Typography>
             <Cartsmistrabajos/>
            </Stack>
        </Box>
    )
} 