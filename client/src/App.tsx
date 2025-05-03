import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useMemo, useState } from "react";
import { themeSettings } from "./themes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Scenes/Navbar";
import Dashboard from "./Scenes/Dashboard";
import Prediction from "./Scenes/Prediction";
import Login from "./Scenes/Login";

function App() {
  
  const theme = useMemo(() => createTheme(themeSettings), []);
  const [isLogin, setIsLogin] = useState(false);
  
  const cred = {
    email : "admin@gmail.com",
    password : "123"
  }
  
  const handleCallback = (value) => {
    setIsLogin(value);
  }
  
  return (
    <div className='app'>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          
          {
            isLogin ?
            <>
              <Navbar />
              <Box width={"100%"} height={"100%"} padding={window.innerWidth > 600 ? "1rem 2rem 4rem 2rem" : "1rem 1rem 2rem 1rem"}>
                <Routes>
                  <Route path="/" element = {<Dashboard />}>  </Route>
                  <Route path="/predictions" element = {<Prediction />}>  </Route>
                </Routes>
              </Box>
            </> :
            <Login loginCallback = {handleCallback} email={cred.email} password={cred.password} />
          }
          
          {/* <Box
            textAlign={"center"}
            padding={".8rem 0"}
            color={"#FFF"}
            borderTop = {"1px solid rgba(255, 255, 255, 0.1)"}
            borderBottom={"none"}
            position={"relative"}
            bottom={0}
          >
            Developed by ⚡
          </Box> */}
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
