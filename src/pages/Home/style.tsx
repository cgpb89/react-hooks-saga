import { makeStyles } from '@material-ui/styles';

const centeredStyleObj ={
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
}

export default makeStyles({
    container: {
        height: '100vh',
        flexDirection: 'column',
        ...centeredStyleObj
    },
    cardContainer: {
        flexDirection: 'column',
        width: 400,
        height: 200,
        padding: '2rem',
        ...centeredStyleObj
    },
    titleGridContainer: {
        ...centeredStyleObj
    },
    textFieldSearch: {
        width: '90%'
    },
    title: {
        fontSize: '4rem'
    },
    buttonsContainer: {
        marginTop: '.5rem'
    },
    searchButton: {
        marginLeft: '.5rem'
    },
    movieIcon: {
        fontSize: '4rem'
    }
});