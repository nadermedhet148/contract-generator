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
        loginBtn: {
            marginTop: theme.spacing(2),
            flexGrow: 1
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
            <h1>Your already submitted contracts</h1>

            <div className={classes.cards}>
                {
                    user?.contracts.length > 0 ? user?.contracts.map((item, index) => {
                        return (
                            <Card key={item.name} className={classes.card}>
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
                                        color : "#008bff"
                                    }} to={'/contract/view/' + item.uniqueIdentifer}>
                                        <VisibilityIcon/>
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
                style={{
                    backgroundColor: "#008bff",
                    color: "#fff",
                    margin: '10px auto',
                    display: 'block',
                
                }} className={classes.loginBtn}
            onClick={()=>{history.push('/contract/create')}}
            >
                Add new contract
          </Button>

        </div>
    )
}


export default Home;