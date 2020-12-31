import { Button, Card, Container, Grid, TextField } from "@material-ui/core";
import React, { useState } from "react";
import styles from "./style";
import { MovieIcon } from "../../icons";

export default ({ history }) => {

    const [searchText, setSearchText] =  useState(""),
    classes = styles();

    const handleSearchTextChange = (evt) => {
        setSearchText(evt.target.value);
    }

    const handleCleanTextClick = () => {
        setSearchText('');
    }

    const handlesearchTextClick = () => {
        history.push(`/results?movieName=${searchText}`)
    }

    return (
        <Container className={classes.container}>
            <Card className={classes.cardContainer}>
                <Grid container className={classes.titleGridContainer}>
                    <Grid>
                        <label className={classes.title}>Bienvenido</label>
                    </Grid>
                    <Grid>
                        <MovieIcon className={classes.movieIcon}/>
                    </Grid>
                </Grid>
                <TextField 
                className={classes.textFieldSearch}
                value={searchText}
                placeholder="Buscar"
                onChange={handleSearchTextChange}
                />

                <Grid className={classes.buttonsContainer}>
                    <Button variant="contained" onClick={handleCleanTextClick}>Limpiar</Button>
                    <Button className={classes.searchButton} variant="contained" color="primary" size="large" onClick={handlesearchTextClick}>Buscar</Button>
                </Grid>
            </Card>
        </Container>
    );
};