import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, TextField, InputAdornment, Grid, Button } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Stack from '@mui/material/Stack';
import BookIcon from '@mui/icons-material/Book';
import FiberNewIcon from '@mui/icons-material/FiberNew';

const books = [
  {
    id: 1, title: "Python Tricks: The Book", author: "Dan Bader", year: 2017, imageUrl: "http://books.google.com/books/content?id=yDB0tAEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73dASeuNFd_8pBpSE8S-nWgNgmIfaDqy7MLIeVOylkaMKD30-YKZSFTuHzB1Dj7mEpcDEJ35xMfoQZ8HXTyt-eQYJToIPrdxinQwfPKRIUwwrjhJXwHXOe4Ue0zUwDaeRK5CWQz&source=gbs_api",
  },
  {
    id: 2, title: "Learning Scientific Programming with Python", author: "Christian Hill", year: 2020, imageUrl: "http://books.google.com/books/content?id=yDB0tAEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73dASeuNFd_8pBpSE8S-nWgNgmIfaDqy7MLIeVOylkaMKD30-YKZSFTuHzB1Dj7mEpcDEJ35xMfoQZ8HXTyt-eQYJToIPrdxinQwfPKRIUwwrjhJXwHXOe4Ue0zUwDaeRK5CWQz&source=gbs_api",
  },
  {
    id: 3, title: "Powerful Python: The Most Impactful Patterns, Features, and Idioms", author: "Aaron Maxwell", year: 2017, imageUrl: "http://books.google.com/books/content?id=yDB0tAEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73dASeuNFd_8pBpSE8S-nWgNgmIfaDqy7MLIeVOylkaMKD30-YKZSFTuHzB1Dj7mEpcDEJ35xMfoQZ8HXTyt-eQYJToIPrdxinQwfPKRIUwwrjhJXwHXOe4Ue0zUwDaeRK5CWQz&source=gbs_api",
  },
  {
    id: 4, title: "Python Packages", author: "Thomas Beuzen, Tiffany Timbers", year: 2022, imageUrl: "http://books.google.com/books/content?id=yDB0tAEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73dASeuNFd_8pBpSE8S-nWgNgmIfaDqy7MLIeVOylkaMKD30-YKZSFTuHzB1Dj7mEpcDEJ35xMfoQZ8HXTyt-eQYJToIPrdxinQwfPKRIUwwrjhJXwHXOe4Ue0zUwDaeRK5CWQz&source=gbs_api",
  },
];

const trendingBooks = [
  {
    id: 1, title: "Odoo 14 Development Cookbook", author: "Parth Gajjar, Alexandre Fayolle", year: 2020, imageUrl: "http://books.google.com/books/content?id=yDB0tAEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73dASeuNFd_8pBpSE8S-nWgNgmIfaDqy7MLIeVOylkaMKD30-YKZSFTuHzB1Dj7mEpcDEJ35xMfoQZ8HXTyt-eQYJToIPrdxinQwfPKRIUwwrjhJXwHXOe4Ue0zUwDaeRK5CWQz&source=gbs_api",
  },
  {
    id: 2, title: "Learn Odoo", author: "Greg Moss", year: 2019, imageUrl: "http://books.google.com/books/content?id=yDB0tAEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73dASeuNFd_8pBpSE8S-nWgNgmIfaDqy7MLIeVOylkaMKD30-YKZSFTuHzB1Dj7mEpcDEJ35xMfoQZ8HXTyt-eQYJToIPrdxinQwfPKRIUwwrjhJXwHXOe4Ue0zUwDaeRK5CWQz&source=gbs_api",
  },
  {
    id: 3, title: "Odoo Development Cookbook: Build effective business applications", author: "Husien Daudi, Jay Vora", year: 2024, imageUrl: "http://books.google.com/books/content?id=yDB0tAEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73dASeuNFd_8pBpSE8S-nWgNgmIfaDqy7MLIeVOylkaMKD30-YKZSFTuHzB1Dj7mEpcDEJ35xMfoQZ8HXTyt-eQYJToIPrdxinQwfPKRIUwwrjhJXwHXOe4Ue0zUwDaeRK5CWQz&source=gbs_api",
  },
  {
    id: 4, title: "Odoo Development Cookbook - Page 347", author: "Holger Brunn, Alexandre Fayolle, Daniel Reis", year: 2016, imageUrl: "http://books.google.com/books/content?id=yDB0tAEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73dASeuNFd_8pBpSE8S-nWgNgmIfaDqy7MLIeVOylkaMKD30-YKZSFTuHzB1Dj7mEpcDEJ35xMfoQZ8HXTyt-eQYJToIPrdxinQwfPKRIUwwrjhJXwHXOe4Ue0zUwDaeRK5CWQz&source=gbs_api",
  },
];

function BookCard({ info }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', border: '1px solid #ccc', padding: 10 }}>
      <div style={{ flex: 1 }}>
        <Typography variant="h6">{info.title}</Typography>
        <Typography variant="body2">{info.author}</Typography>
        <Typography variant="body2">{info.year}</Typography>
        <FollowThisBook />
      </div>
      <img src={info.imageUrl} alt={info.title} style={{ width: 50, height: 70, objectFit: 'cover', marginLeft: 10 }} />
    </div>
  );
}

function LogIn() {
  return (
    <>
      <Button variant='contained' color='error'>LogIn</Button>
    </>
  )
}

function FollowThisBook() {
  return (
    <Button
      variant="contained"
      startIcon={<BookIcon />}
      style={{ textTransform: 'none', backgroundColor: '#f0f0f0', color: 'black', marginTop: '20px' }}
      href='http://books.google.co.in/books?id=yDB0tAEACAAJ&dq=isbn:9781787123427&hl=&cd=1&source=gbs_api'
    >
      Follow This Book
    </Button>
  );
}

function Home() {
  return (
    <div>
      <div style={{ padding: 20 }}>
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
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" gutterBottom>
              New Arrivals<FiberNewIcon />
            </Typography>
            <Grid container spacing={2}>
              {books.map(book => (
                <Grid item key={book.id} xs={12}>
                  <BookCard info={book} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" gutterBottom>
              Trending<TrendingUpIcon />
            </Typography>
            <Grid container spacing={2}>
              {trendingBooks.map(book => (
                <Grid item key={book.id} xs={12}>
                  <BookCard info={book} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Home;
