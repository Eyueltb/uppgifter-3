
import React from 'react'
import {ThemeProvider} from "@mui/material";
import {Grid} from "@material-ui/core";
import {Link} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

export const NavBar = () => {
    return (
        <ThemeProvider >
            <AppBar position="static" color={"primary"} variant={"outlined"} >
                <Toolbar>
                    <Grid container direction="row" justifyContent="space-around" alignItems="center">
                        <Grid>

                            <Link style={{textDecoration: 'none', color: 'inherit'}} to="/home"> Home</Link>
                        </Grid>
                        <Grid>
                            <Link style={{textDecoration: 'none', color: 'inherit'}} to="/createCustomer"> Create Customer</Link>
                        </Grid>
                        <Grid>
                            <Link style={{textDecoration: 'none', color: 'inherit'}} to="/list"> List Customer</Link>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </ThemeProvider>

    )
}
