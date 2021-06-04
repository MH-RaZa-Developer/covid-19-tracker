import { Button, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import State from '../State/State';
import './GlobalInfo.css';

const GlobalInfo = () => {

    const [global, setGlobal] = useState([]);

    useEffect(() => {
        fetch('https://api.covid19api.com/summary')
        .then(res => res.json())
        .then(data => setGlobal(data.Global))
    }, [])

    const cardStyle={
        backgroundColor: "#1e272e",
        borderRadius: "10px",
        margin: "15px",
        padding: "15px",
        textAlign: "left",
        boxShadow: "-10px 10px 40px #1e272e",
        overflow: "hidden"
    }

    return (
        <div>
            <State />
            <h1>World Total Cases</h1>
            <Grid container>
                <Grid style={cardStyle} item xs={12} md={3}>
                <h1 style={{margin: "0"}}>Total Confirmed </h1><br />
                    <h1 style={{margin: "0", color: "#808e9b"}}>{global.TotalConfirmed}</h1>
                </Grid>

                <Grid style={cardStyle} item xs={12} md={4}>
                <h1 style={{margin: "0"}}>Total Recovered </h1><br />
                    <h1 style={{margin: "0", color: "#808e9b"}}>{global.TotalConfirmed}</h1>
                </Grid>

                <Grid style={cardStyle}  item xs={12} md={4}>
                    <h1 style={{margin: "0"}}>Total Deaths </h1><br />
                    <h1 style={{margin: "0", color: "#808e9b"}}>{global.TotalDeaths}</h1>
                </Grid>
            </Grid>
        </div>
    );
};

export default GlobalInfo;