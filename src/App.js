
import './App.css';
import  Typography  from '@mui/material/Typography';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import useMediaQuery from '@mui/material/useMediaQuery';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

function App() {
  return (
  <div className='container'>
  
  <Grid container  columns={{ xs: 6, sm: 8, md: 12, lg: 12}} spacing={{ xs: 1, sm: 2, md: 2,lg:2 }}>
    
    <Grid item xs={6} sm={4} md={6} lg={6} mt={{xs: 2, sm: 1, md: 1, lg:1}}align='center' className='imageContainer'>
      <item >
      <img 
      id='image' src='https://i.pinimg.com/736x/9a/42/10/9a42108ce988d33417a4d00db30cd908.jpg'></img>
      </item>
    </Grid>

    <Grid item xs={6} sm={4} md={6} lg={6} mt={{xs: 8, sm: 8, md: 12, lg:12}} align='center'>
      <item>
      <Typography ><h2>Welcome Back!</h2> <br></br>
      Login</Typography>
      <br></br>
      
    <Grid item sx={{
      width:{xs:200,sm:250, md:370, lg:370}
      }} align='left'><label className='label'><PersonOutlineOutlinedIcon />Username</label><br></br>
      <TextField id="outlined-basic"  className='inputfield' variant="outlined" />
    </Grid>
      <br></br>
    
    <Grid item xs={10} sx={{
      width:{xs:200,sm:250, md:370, lg:370}
      }} align='left'><label className='label'><LockOutlinedIcon />Password</label><br></br>
      <TextField  InputProps={{
            endAdornment: (
                
              <RemoveRedEyeOutlinedIcon color="grey" />
              
            ),
          }}  id="outlined-basic"  className='inputfield' variant="outlined" />
    </Grid>
      <br></br>

    <Grid item sx={{
      width:{xs:200,sm:250, md:370, lg:370}
      }} align='right'><Link id='link' href="#" underline="none" align='right'  sx={{color:'blue',"&:hover":{color:'green',}}}>Forgot Password</Link>
    </Grid>
      <br></br>
      
      
    <div>
      <Button variant="outlined" sx={{
      width:{xs:200,sm:250, md:370, lg:370},
      color:'white',backgroundColor:'gray',"&:hover":{backgroundColor:'blue',}}}>Login</Button>
    </div>
    </item>
    </Grid>
   
  </Grid>
  </div>
 

  );
}

export default App;
