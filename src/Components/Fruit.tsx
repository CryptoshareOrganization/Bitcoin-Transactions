import React, { useState, useEffect } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Container, Box, Button, CircularProgress, Snackbar, Alert } from "@mui/material"
import type { } from '@mui/lab/themeAugmentation';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



const theme = createTheme({
  typography: {
    fontFamily: [
      "Audiowide",
      "cursive",
    ].join(','),
  },
  palette: {
    primary: {
      light: '#757ce8',
      main: '#f2a900',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#C2D52F',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: 'white',
          background: '#C2D52F',
          border: 0,
          borderRadius: 5,
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          height: 48,
          padding: '0 30px',
          fontSize: '2rem'
        },
      },

    },
    MuiFab: {
      styleOverrides: {
        root: {
          background: "#C2D52F",
          color: "white"
        }
      }
    }
  }
})




export const Fruitpayment = () => {

  //Mint Logic

  
  const [fruitType, setFruitType] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const [purchaseSuccess, setPurchaseSuccess] = useState(false);
 const [isBuying, setIsBuying] = useState<boolean>(false);


  const increment = () => {
    if (count < 9) {
      setCount((count: any) => count + 1)
    }
  }

  const handleFruitChange = (event: any) => {
    setFruitType(event.target.value)
  }

  const decrement = () => {
    if (count > 1) {
      setCount((count: any) => count - 1)
    }
  }

  const [count, setCount] = useState<number>(1)


  const sendFruitDetails = async () => {
    setIsBuying(true); // disable the Buy Fruit button
    const response = await fetch(`https://bitcoinbackend.onrender.com/generate?fruit_type=${fruitType}&quantity=${count}`, { method: "GET" })
    const data = await response.json();
    setTransactionId(data);
    console.log(transactionId)
    setPurchaseSuccess(true);
    setIsBuying(false); // enable the button after the response is returned

}

const handleClose = () => {
  setPurchaseSuccess(false)
}


  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" sx={{ display: "flex", flexDirection: { xs: 'column', md: 'row' }, justifyContent: "center" }}>
        <Box>
          <Typography sx={{
            display: "flex",
            justifyContent: "center",
            mt: 13,
            fontWeight: "bold",
            fontSize: 30,
            fontFamily: 'Audiowide'
          }} color="primary.main">FRUIT SHOP</Typography>
          <Box sx={{
            bgcolor: "transparent",
            alignItems: "center",
            flexDirection: "column",
            minHeight: 400,
            minWidth: { sx: "auto", md: 400 },
            marginRight: "auto",
            marginLeft: "auto",
            justifyContent: "center",
            // borderRadius: 4,
            // borderStyle: "dotted",
            // borderColor: "#C2D52F",
            marginTop: 3,
          }}>
            
            <Box sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              m: 3,
              mt: 7,
            }}>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">Fruits</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={fruitType}
                        onChange={handleFruitChange}
                        label="Select Fruit"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={"apples"}>Apple</MenuItem>
                        <MenuItem value={"bananas"}>Banana</MenuItem>
                        <MenuItem value={"oranges"}>Orange</MenuItem>
                        <MenuItem value={"strawberries"}>Strawberries</MenuItem>
                       
                    </Select>
                </FormControl>
                <Box component="span" sx={{ color: "primary.main", fontSize: 20, mt: 1, fontWeight: "medium", fontFamily: 'Audiowide' }}>1 Apple is 0.0002 BTC</Box>
                <Box component="span" sx={{ color: "primary.main", fontSize: 20, mt: 1, fontWeight: "medium", fontFamily: 'Audiowide' }}>1 Banana is 0.0003 BTC</Box>
                <Box component="span" sx={{ color: "primary.main", fontSize: 20, mt: 1, fontWeight: "medium", fontFamily: 'Audiowide' }}>1 Orange is 0.0004 BTC</Box>
                <Box component="span" sx={{ color: "primary.main", fontSize: 20, mt: 1, fontWeight: "medium", fontFamily: 'Audiowide' }}>1 Strawberry is 0.0005 BTC</Box>
              <Box sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                margin: 3,
              }}>
                <Fab size="small" onClick={decrement} aria-label="remove" sx={{ m: 1, backgroundColor: '#f2a900' }}>
                  <RemoveIcon />
                </Fab>
                <Box component="span" sx={{ m: 1, color: "white", fontSize: 16,  fontFamily: 'Audiowide', backgroundColor: "#f2a900", padding: "10px", borderRadius:"5px"}}>{count}</Box>
                <Fab size="small" onClick={increment} aria-label="add" sx={{ m: 1, backgroundColor: '#f2a900' }}>
                  <AddIcon />
                </Fab>
              </Box>
              <Box sx={{
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center"
              }}>
                  <Button
                    sx={{ m: 4, backgroundColor: '#f2a900'}}
                     variant="contained"
                    onClick={sendFruitDetails}
                    disabled={isBuying}>
                    {isBuying ? <CircularProgress color="primary" size={35} /> : "Buy Fruit"}
                  </Button>
              </Box>
              <Box component="span" sx={{ color: "primary.main", fontSize: 20, mt: 1, fontWeight: "medium", fontFamily: 'Audiowide' }}>Response: {transactionId}</Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}