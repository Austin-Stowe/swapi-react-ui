import React from 'react'

import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'


const options = ['Option 1', 'Option 2'];

export default function AllCharacterNames() {
    return(
        <>
            <Autocomplete 
                options = {options}
                renderInput={(params) => <TextField {...params} variant="outlined" style={{width: '250px', padding:'10px'}}/>}
            />
        </>
    )
    
}