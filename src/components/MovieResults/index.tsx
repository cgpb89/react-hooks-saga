import React from 'react';
import { Card, Grid, Typography, Button } from '@material-ui/core';
import style from './style';
import { withRouter } from 'react-router-dom';
import noImage from '../../img/no-image.png'; 

const MovieResult = (values) => {
    const classes = style(),
     { Poster, Title, Year, Type, imdbID, history} = values;

     const handleSeeMovieClick = () => {
         history.push(`/movie/${imdbID}`);
     }

    return(
        <Card className={classes.cardContainer}>
            <Grid container>
                <Grid item>
                    <img src={Poster == "N/A" ? noImage : Poster} alt={Title} className={classes.poster}/>
                </Grid>
                <Grid item className={classes.titlesContainer}>
                    <Typography>{Title}</Typography>
                    <Typography>{Year}</Typography>
                    <Typography>{Type}</Typography>
                    <Typography>{imdbID}</Typography>
                    <Button color="primary" variant="contained" onClick={handleSeeMovieClick}>Ver más</Button>
                </Grid>
            </Grid>
        </Card>
    )
}

export default withRouter(MovieResult);