import React, { useState, useEffect } from 'react';
import { useGetLoggedUserQuery } from '../services/userAuthApi';
import { useDispatch } from 'react-redux';
import { AppBar, Toolbar, Typography, IconButton, Grid, TextField, InputAdornment, Box, Avatar, Button } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import BookCard from './BookCard'; // Assuming you have a BookCard component
import { getToken, removeToken } from '../services/LocalStorageService';
import { setUserInfo, unsetUserInfo } from '../features/userSlice';
import { unSetUserToken } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "A portrait of the Jazz Age in all of its decadence and excess.",
    imageUrl: "http://books.google.com/books/content?id=yDB0tAEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73dASeuNFd_8pBpSE8S-nWgNgmIfaDqy7MLIeVOylkaMKD30-YKZSFTuHzB1Dj7mEpcDEJ35xMfoQZ8HXTyt-eQYJToIPrdxinQwfPKRIUwwrjhJXwHXOe4Ue0zUwDaeRK5CWQz&source=gbs_api",
    timeRemaining: "3 days"
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    description: "A dystopian novel set in a totalitarian regime of the future.",
    imageUrl: "http://books.google.com/books/content?id=yDB0tAEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73dASeuNFd_8pBpSE8S-nWgNgmIfaDqy7MLIeVOylkaMKD30-YKZSFTuHzB1Dj7mEpcDEJ35xMfoQZ8HXTyt-eQYJToIPrdxinQwfPKRIUwwrjhJXwHXOe4Ue0zUwDaeRK5CWQz&source=gbs_api",
    timeRemaining: "1 week"
  },
  {
    id: 3,
    title: "1984 Redux",
    author: "George Orwell",
    description: "A dystopian novel set in a totalitarian regime of the future.",
    imageUrl: "http://books.google.com/books/content?id=yDB0tAEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73dASeuNFd_8pBpSE8S-nWgNgmIfaDqy7MLIeVOylkaMKD30-YKZSFTuHzB1Dj7mEpcDEJ35xMfoQZ8HXTyt-eQYJToIPrdxinQwfPKRIUwwrjhJXwHXOe4Ue0zUwDaeRK5CWQz&source=gbs_api",
    timeRemaining: "1 week"
  },
  {
    id: 4,
    title: "Odoo 10 Implementation Cookbook",
    author: "Mantavy Gajar",
    description: "Explore the capabilities of Odoo and discover all you need to implement it.",
    imageUrl: "https://source.unsplash.com/random/200x300?book",
    timeRemaining: "2 weeks"
  },
];

const userBooks = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "A portrait of the Jazz Age in all of its decadence and excess.",
    imageUrl: "http://books.google.com/books/content?id=yDB0tAEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73dASeuNFd_8pBpSE8S-nWgNgmIfaDqy7MLIeVOylkaMKD30-YKZSFTuHzB1Dj7mEpcDEJ35xMfoQZ8HXTyt-eQYJToIPrdxinQwfPKRIUwwrjhJXwHXOe4Ue0zUwDaeRK5CWQz&source=gbs_api",
    timeRemaining: "3 days"
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    description: "A dystopian novel set in a totalitarian regime of the future.",
    imageUrl: "http://books.google.com/books/content?id=yDB0tAEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73dASeuNFd_8pBpSE8S-nWgNgmIfaDqy7MLIeVOylkaMKD30-YKZSFTuHzB1Dj7mEpcDEJ35xMfoQZ8HXTyt-eQYJToIPrdxinQwfPKRIUwwrjhJXwHXOe4Ue0zUwDaeRK5CWQz&source=gbs_api",
    timeRemaining: "1 week"
  },
  {
    id: 3,
    title: "Dhruvvvvvvvv",
    author: "George Orwell",
    description: "A dystopian novel set in a totalitarian regime of the future.",
    imageUrl: "http://books.google.com/books/content?id=yDB0tAEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73dASeuNFd_8pBpSE8S-nWgNgmIfaDqy7MLIeVOylkaMKD30-YKZSFTuHzB1Dj7mEpcDEJ35xMfoQZ8HXTyt-eQYJToIPrdxinQwfPKRIUwwrjhJXwHXOe4Ue0zUwDaeRK5CWQz&source=gbs_api",
    timeRemaining: "1 week"
  }
];



const App = () => {

  const handleLogout = () => {
    dispatch(unsetUserInfo({ name: "", email: "" }))
    dispatch(unSetUserToken({ access_token: null }))
    removeToken()
    navigate('/login')
  }

  const navigate = useNavigate()

  const dispatch = useDispatch()
  const { access_token } = getToken()
  const { data, isSuccess } = useGetLoggedUserQuery(access_token)
  console.log(data);


  const [userData, setUserData] = useState({
    email: "",
    name: "",
    mobile: "",

  })

  // Store User Data in Local State
  useEffect(() => {
    if (data && isSuccess) {
      setUserData({
        email: data.email,
        name: data.name,
        address: "1234 Street, City, Country",
        imageUrl: "https://source.unsplash.com/random/100x100?person",
        mobile: data.phone
      })
    }
  }, [data, isSuccess])


  useEffect(() => {
    if (data && isSuccess) {
      dispatch(setUserInfo({
        email: data.email,
        name: data.name
      }))
    }
  }, [data, isSuccess, dispatch])
  const [view, setView] = useState('allBooks');

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: '#6B4D65' }}>
        <Toolbar>
          <Typography
            variant="h6"
            style={{
              flexGrow: 1,
              fontFamily: "SK Curiosity",
              fontSize: "180%",
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <img src="./logo.png" height="35px" style={{ marginTop: '5px' }} alt="BookHive Logo" />
            &nbsp; &nbsp;
            <span style={{ marginTop: "4px" }}>BookHive</span>
            <Button sx={{ marginLeft: "5px" }} color="inherit" onClick={() => setView('allBooks')}>All Books</Button>
            <Button color="inherit" onClick={() => setView('myBooks')}>My Books</Button>
          </Typography>

          <div style={{ flexGrow: 1 }}></div>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton color="inherit">
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Grid container spacing={2} style={{ padding: 20 }}>
        <Grid item xs={12} sm={8}>
          <TextField
            fullWidth
            label="Search Books"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              )
            }}
            style={{ marginBottom: 20 }}
          />
          <Typography
            variant="h4"
            gutterBottom
            style={{ fontFamily: "SK Curiosity", fontWeight: "500" }}
          >
            &nbsp; {view === 'allBooks' ? 'All Books' : 'My Books'}
          </Typography>
          <div style={{ maxHeight: '70vh', overflowY: 'auto', scrollbarWidth: 'thin', scrollbarColor: '#976F8F #f1f1f1' }}>
            <Grid container spacing={0.4}>
              {(view === 'allBooks' ? books : userBooks).map(book => (
                <Grid item key={book.id} xs={12}>
                  <BookCard info={book} />
                </Grid>
              ))}
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            p={3}
            sx={{
              position: 'sticky',
              top: 20,
              backgroundColor: 'grey',
              borderRadius: "20px",
              background: "#F9F9F9",
              boxShadow: '0px 4px 20.4px 0px rgba(0, 0, 0, 0.11)'
            }}
          >
            <Box
              display="flex"
              flexDirection="column"
              sx={{
                paddingTop: "20%",
                paddingBottom: "20%",
                alignItems: "center"
              }}
            >
              <Avatar
                src={userData.imageUrl}
                style={{ width: 140, height: 140, marginBottom: 20 }}
              />
              <Typography sx={{ fontFamily: "SK Curiosity" }} variant="h4">
                {userData.name}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "SK Curiosity",
                  justifyContent: 'center',
                  display: 'flex',
                  alignItems: "center",
                  marginTop: '10%',
                  marginBottom: "5%"
                }}
                variant="body1"
              >
                <MailOutlineIcon />&nbsp;&nbsp;{userData.email}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "SK Curiosity",
                  justifyContent: 'center',
                  display: 'flex',
                  alignItems: "center",
                  marginBottom: "5%"
                }}
                variant="body2"
              >
                <LocationOnOutlinedIcon />&nbsp;&nbsp;{userData.address}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "SK Curiosity",
                  justifyContent: 'center',
                  display: 'flex',
                  alignItems: "center",
                  marginBottom: "5%"
                }}
                variant="body2"
              >
                <PhoneOutlinedIcon />&nbsp;&nbsp;{userData.mobile}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;