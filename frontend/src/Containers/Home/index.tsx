import React from 'react';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { useHistory } from "react-router-dom";
import { Add } from "@material-ui/icons";

import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            minHeight: '90%',
            position: 'relative',
            width: '90%',
            margin: '25px auto',
            padding: '15px',
            background: '#f2f2f2',
            boxShadow: '4px 4px 20px 2px #00000026',
        },
        header: {
            textAlign: 'center',
            background: '#008bff',
            color: '#fff'
        },
        card: {
            marginTop: theme.spacing(10),
            display: 'inline-block',
            // width: `20%`,
        },
        cards: {
            display: 'flex',
            flexWrap: 'wrap',
            rowGap: '1em',
            columnGap: '20px',
            justifyContent: 'center'
        },
        button : {
            backgroundColor: "#008bff",
            color: "#fff",
            margin: '10px auto',
            flexGrow: 1,
            display: 'flex',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            justifyContent: 'center',
            alignItems: 'center',
            position:'fixed',
            bottom:'20px',
            right:'40px',
            boxShadow: '2px 2px 3px #999',
        }
    })
);


const Home = () => {
    const classes = useStyles();

    const user = useSelector(
        (state) => state.users.user
    );
    let history = useHistory();


    return (
        <div className={classes.container} >
            <h1 style={{
                textAlign: 'center',
                color: 'rgb(0, 139, 255)',
            }} >Your already submitted contracts</h1>

            <div className={classes.cards}>
                {
                    user?.contracts.length > 0 ? user?.contracts.map((item, index) => {
                        return (
                            <Card key={item.contractId} className={classes.card}>
                                <CardHeader className={classes.header} title={item.name} />
                                <CardContent>

                                    <p>Phone : {item.phone}</p>
                                    <p>Email : {item.email}</p>
                                    <p>Address : {item.address}</p>
                                    <p>Rent Amount : {item.rentAmount}</p>


                                </CardContent>
                                <CardActions style={{
                                    justifyContent: 'center',

                                }} >
                                    <Link style={{
                                        color: "#008bff"
                                    }} to={'/contract/view/' + item.uniqueIdentifer}>
                                        <VisibilityIcon />
                                    </Link>
                                </CardActions>
                            </Card>

                        )
                    }) :
                        <p> you haven't submit any contract yet </p>
                }

            </div>

            <Button
                variant="contained"
                size="large"
                className={classes.button}
                onClick={() => { history.push('/contract/create') }}
            >
                <Add style={{
                    fontSize: '35px'
                }} />
          </Button>

        </div>
    )
}


export default Home;