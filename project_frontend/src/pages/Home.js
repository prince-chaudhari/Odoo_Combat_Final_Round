import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, TextField, InputAdornment, Grid, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import BookIcon from '@mui/icons-material/Book';
import BookCard from './BookCard2';
import { NavLink } from 'react-router-dom';

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

function LogIn() {
    return (
        <Button component={NavLink} to='/login' sx={{ backgroundColor: "#F4F3F3", color: "#6B4D65", '&:hover': { color: "#6B4D65", backgroundColor: "#DCDCDC" }, fontFamily: "Sk Curiosity" }} variant='contained' >&nbsp; &nbsp; <span style={{ marginTop: "3px" }}>LogIn</span> &nbsp;  &nbsp;</Button>
    );
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
    const [view, setView] = useState('home');
    const [searchTerm, setSearchTerm] = useState('');

    const allBooks = [...books, ...trendingBooks];

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        setView('allBooks');
    };

    const filteredBooks = allBooks.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleLogoClick = () => {
        window.location.reload();
    };

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
                            alignItems: 'center',
                            cursor: 'pointer'
                        }}
                        onClick={handleLogoClick}
                    >
                        <img src="./logo.png" height="35px" style={{ marginTop: '5px' }} alt="BookHive Logo" />
                        &nbsp; &nbsp;
                        <span style={{ marginTop: "4px" }}>BookHive</span>
                    </Typography>
                    <Button
                        color="inherit"
                        onClick={() => setView('allBooks')}
                        style={{ textTransform: 'none', marginRight: '10px' }} sx={{ marginLeft: "20px", fontFamily: "SK Curiosity", fontWeight: "400", fontSize: "130%", textTransform: "initial" }} 
                        onClick={() => setView('allBooks')}
                    >
                        All Books
                    </Button>
                    <div style={{ flexGrow: 1 }}></div>
                    <IconButton color="inherit">
                        <LogIn />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <div style={{ padding: 20 }}>
                <TextField
                    fullWidth
                    label="Search Books"
                    variant="outlined"
                    value={searchTerm}
                    onChange={handleSearch}
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
                {view === 'home' ? (
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h4" gutterBottom style={{ fontFamily: "SK Curiosity", fontWeight: "500", color: "#6B4D65" }}>
                                &nbsp;&nbsp;  New Arrivals
                            </Typography>
                            <Grid container spacing={1}>
                                {books.map(book => (
                                    <Grid item key={book.id} xs={12}>
                                        <BookCard info={book} />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h4" gutterBottom style={{ fontFamily: "SK Curiosity", fontWeight: "500", color: "#6B4D65" }}>
                                &nbsp;&nbsp; Trending
                            </Typography>
                            <Grid container spacing={1}>
                                {trendingBooks.map(book => (
                                    <Grid item key={book.id} xs={12}>
                                        <BookCard info={book} />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                ) : (
                    <Grid container spacing={1}>
                        <Typography variant="h4" gutterBottom style={{ fontFamily: "SK Curiosity", fontWeight: "500", color: "#6B4D65" }}>
                            &nbsp;&nbsp; All Books
                        </Typography>
                        {filteredBooks.map(book => (
                            <Grid item key={book.id} xs={12}>
                                <BookCard info={book} />
                            </Grid>
                        ))}
                    </Grid>
                )}

            </div>
        </div>
    );
}

export default Home;