import React from 'react'
import { Link } from 'react-router-dom';
import {Card,CardMedia,CardContent,Typography,CardActions,Button} from '@mui/material'
import { makeStyles } from '@mui/styles';
const useStyles=makeStyles(theme=>({
cusCard:{
    marginBottom:'20px'
}
}))
const LinkPreview = ({link}) => {
    const classes=useStyles();
    const {image,description,title,url}=link;

   return (
    <Card className={classes.cusCard} >
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        
       <a href={url} target="_blank"> <Button size="small">Learn More</Button></a>
      </CardActions>
    </Card>
  );
}

export default LinkPreview
