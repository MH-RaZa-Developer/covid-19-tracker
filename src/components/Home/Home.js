import { Flag } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import CountryData from '../CountryData/CountryData';
import State from '../State/State';
import './Home.css';

const Home = () => {

    const [coronaInfo, setCoronaInfo] = useState([]);

    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('https://api.covid19api.com/summary')
        .then(res => res.json())
        .then(data => setCoronaInfo(data.Countries));
    }, [])

    let today = new Date();
    const date = today.getDate() + ' - ' + (today.getMonth() + 1) + ' - ' + today.getFullYear();

    return (
        <div>
            <div className="searchBar">
            <h2>Covid-19 Tracker</h2>
            <State /><br />
            <input onChange={e => setSearch(e.target.value)} type="text" placeholder="Search Country..."></input>
            </div>

            <div className="bodyCard">
                <h2 style={{margin:"0",textAlign:"left", marginLeft:"20px"}}>Live Covid-19 Information</h2>
                {
                    coronaInfo.filter(con =>{
                        if(con === '')
                        {
                            return con;
                        }
                        else if(con.Country.toLowerCase().includes(search.toLowerCase()))
                        {
                            return con;
                        }
                    }).map(info => <CountryData date={date} info={info} />)
                }
            </div>
        </div>
    );
};

export default Home;