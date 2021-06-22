import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startSelectCountry, startWorld } from '../actions/actions';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


const Dropdown = () => {
const [selectedCountry, setSelectedCountry] = useState('worldwide')

const dispatch = useDispatch()

const allCountries = useSelector((state) => {
    return state.data.allCountries
})

const handleDropdown = (e) => {
    setSelectedCountry(e.target.value)

    if(e.target.value === 'worldwide'){
        dispatch(startWorld())
    } 
    else {
        dispatch(startSelectCountry(e.target.value))
    }
}

return (
    <div>
        <Select
            value= {selectedCountry}
            variant= "outlined"
            onChange= {handleDropdown}
        >
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {allCountries.map((country) => {
                return <MenuItem key={country.country} value={country.country}>{country.country}</MenuItem>
            })}
        </Select>
    </div>
)
}

export default Dropdown