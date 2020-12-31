import { Container, CircularProgress, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchMovieById } from '../../redux/actions/search';
import { movieResult as movieResultSelector, isSearchLoading, movieResults } from '../../redux/selectors';

export default ({ match }) => {
    const dispatch = useDispatch();  
    const movieResult = useSelector(state => movieResultSelector(state));  
    const isLoading = useSelector(state => isSearchLoading(state));

    // This replace componentDidMount/componentDidUpdate
    useEffect(() => {
        const movieId = match.params.id;

        if(!movieResult || movieResult && movieResult.imdbID !==  movieId) {
            dispatch(searchMovieById({ movieId }))
        }
    });

    const renderMovie = () => {
        if(movieResult){
            return <div>
                <Typography variant="h3">{movieResult.Title}</Typography>
                <img src={movieResult.Poster} alt={movieResult.Title}/>
                <Typography><strong>Actores: </strong>{movieResult.Actors}</Typography>
                <Typography><strong>Director: </strong>{movieResult.Director}</Typography>
                <Typography><strong>Pais: </strong>{movieResult.Country}</Typography>
                <Typography><strong>Clasificación: </strong>{movieResult.Rated}</Typography>
                <Typography><strong>Premios: </strong>{movieResult.Awards}</Typography>
                <Typography><strong>Sinopsis: </strong>{movieResult.Plot}</Typography>
            </div>
        } else if(isLoading){
            return <CircularProgress size={100} color="primary"/>

        }
        return <div>No Results</div>;
    }

    return (
        <Container>
            {renderMovie()}
        </Container>
    )
}