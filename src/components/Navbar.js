import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
      <Toolbar sx={{backgroundColor:"#201B35"}}>
      <Typography variant="h6" sx={{flexGrow:1}}>SHOP</Typography>
      <IconButton><ShoppingCartIcon sx={{color:"white"}}/></IconButton>
      </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
