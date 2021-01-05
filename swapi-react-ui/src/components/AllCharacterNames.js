import React, { useState, useEffect } from 'react'

import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'


const options = [{name: 'option 1'},{name: 'option 2'}];

export default function AllCharacterNames() {
    const [characterArray, setCharacterArray] = useState([]);
    const URL = 'https://swapi.dev/api/people/';

    const fetchData = (apiUrl) => {
        fetch(apiUrl)
        .then(res=>res.json())
        .then(data => {
            apiUrl = data['next'];
            setCharacterArray(characterArray + data['results'])
            // Check next API url is empty or not, if not empty call the above function 
            if(apiUrl !== '' && apiUrl !== null){
                fetchData(apiUrl);
            }
        })
    }   

    useEffect(()=>{ 
        fetchData(URL)
    }, []);

    useEffect(()=>{console.log(characterArray)},[characterArray])

    return(
        <>
            {options.map(idx => <div>{idx.name}</div>)}
            {/* <Autocomplete 
                options = {characterArray.map(idx => idx.name)}
                renderInput={(params) => <TextField {...params} variant="outlined" style={{width: '250px', padding:'10px'}}/>}
            /> */}
        </>
    )
    
}