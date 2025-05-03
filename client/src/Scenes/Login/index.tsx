import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Alert, styled } from '@mui/material';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.white" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        WealthCare
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#A0AAB4',
    },
    '& label' : {
      color : "#FFF",  
    },
    '& input' : {
        color : "#FFF",  
      },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#B2BAC2',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#E0E3E7',
      },
      '&:hover fieldset': {
        borderColor: '#B2BAC2',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#6F7E8C',
      },
    },
  });

export default function Login({ loginCallback, email, password }) {
    
  const handleSubmit = (e : any) => {
    e.preventDefault();
    
    if(email === mail && password === pass) {
        setAlert(false);
        loginCallback(true);
        <Navigate to="/" />
    } else {
      setAlert(true);
    }
  };
  
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [alert, setAlert] = useState(false);

  return (
      <Container component="main" style={{ color : "white" }} maxWidth="xs"> 
        <Box
          sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
        >
            {
                alert && <Alert sx={{ mt : 5, mb : 3, width : "100%" }} severity="error">Invalid Credentials to grant access to Dashboard !</Alert>
            } 
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h3" sx={{ fontWeight : "600", mt : 1 }}>
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <CssTextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
            <CssTextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, fontSize : ".76rem", fontWeight : 700 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 2 }} />
      </Container>
  );
}