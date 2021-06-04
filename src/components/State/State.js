import { Button } from '@material-ui/core';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faFlag } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';

const State = () => {

    const history = useHistory();

    const home = () =>{
        history.push('/home');
    }

    const globe = () =>{
        history.push('global');
    }

    return (
        <div style={{margin: "30px"}}>
            <Button onClick={globe} style={{textTransform:"capitalize", fontSize:"18px", marginRight:"20px"}} variant="contained" color="secondary"><FontAwesomeIcon style={{marginRight:"5px", fontSize:"18px"}} icon={faGlobe} /> Global</Button>
            <Button onClick={home} style={{textTransform:"capitalize", fontSize:"18px"}} variant="contained" color="secondary"><FontAwesomeIcon style={{marginRight:"5px", fontSize:"18px"}} icon={faFlag} /> Countries</Button>
        </div>
    );
};

export default State;