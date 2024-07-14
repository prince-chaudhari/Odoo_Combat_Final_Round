import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, Button,Box } from '@mui/material';

const BookCard = ({ info }) => {
  return (
    <Card style={{ display: 'flex', height:{ lg: "200px",xl:"200px",md:"200px",sm:'400px'}, margin: "1em" ,borderRadius:"17px",backgroundColor:"#F4F3F3"}}>
      <CardMedia
        component="img"
        style={{ width: "128px", height:"158px",display:"flex",alignSelf:"center", marginLeft:"18px", borderRadius:"5px" }} // Adjust width as needed
        image={info.imageUrl}
        alt={info.title}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{fontFamily:"SK Curiosity",fontWeight:"500"}}>
            {info.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{fontFamily:"SK Curiosity ",fontWeight:"500"}}>
            {info.author}
          </Typography>
          <Typography variant="body1" style={{fontFamily:"SK Curiosity",fontWeight:"500"}}>
            {info.description}
          </Typography>
          
          <Typography variant="caption" display="block" color="secondary" style={{fontFamily:"SK Curiosity",fontWeight:"500", }}>
            Time remaining: {info.timeRemaining}
          </Typography>

        </CardContent>
        <CardActions>
          <Button size="small"  sx={{backgroundColor:'#6B4D65',color:'white',fontFamily:"SK Curiosity", padding:"2px", paddingTop:"6px",'&:hover': { color: "#6B4D65", backgroundColor: "#DCDCDC" }}}>&nbsp; View &nbsp;</Button>
          <Button size="small"sx={{color:'#6B4D65',fontFamily:"SK Curiosity", padding:"2px", paddingTop:"6px",fontWeight:"500",'&:hover': { color: "#6B4D65", backgroundColor: "#DCDCDC" }}} >Borrow</Button>
        </CardActions>
      </Box>
    </Card>
  );
}

export default BookCard;