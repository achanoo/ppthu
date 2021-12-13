/** @format */

import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { customFetcher } from "../helpers/Constant";
const useStyles = makeStyles((theme) => ({
  cusCard: {
    marginBottom: "20px",
  },
}));
const LinkPreview = ({ link }) => {
  const classes = useStyles();
  const [linkdata, setLinkData] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  // console.log(link);
  React.useEffect(() => {
    customFetcher(link).then((data) => {
    if (data !== '') {
      setLinkData(data);
    setLoading(false);
    }
    
  });
  }, [link])
  


  

  if (loading) {
    return <h3>loading...</h3>;
  }

  const { image, description, title, url } = linkdata;

  return (
    <Card className={classes.cusCard}>
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
        <a href={url} target="_blank">
          {" "}
          <Button size="small">Learn More</Button>
        </a>
      </CardActions>
    </Card>
  );
};

export default LinkPreview;
