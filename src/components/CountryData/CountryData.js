import React from 'react';
import './CountryData.css';

const CountryData = (props) => {

    const {Country, NewConfirmed, NewDeaths, NewRecovered, TotalConfirmed, TotalDeaths, TotalRecovered, Date} = props.info;

    const cardStyle={
        backgroundColor: "#1e272e",
        borderRadius: "10px",
        margin: "15px",
        padding: "10px",
        textAlign: "left",
        boxShadow: "-10px 10px 40px #1e272e",
        overflow: "hidden"
    }

    return (
        <div style={cardStyle}>
            <div style={{marginLeft:"30px"}}>
                <h1>{Country}</h1>
                <p>Confirmed: {NewConfirmed}</p>
                <p>Recovered: {NewRecovered}</p>
                <p>Deaths: {NewDeaths}</p>
                <p>Total Confirmed: {TotalConfirmed}</p>
                <p>Total Recovered: {TotalRecovered}</p>
                <p>Total Deaths: {TotalDeaths}</p>
                <h3>Date: {props.date}</h3>
            </div>
        </div>
    );
};

export default CountryData;