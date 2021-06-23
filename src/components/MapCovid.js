import React,{useState, useEffect} from 'react'
import {useSelector} from 'react-redux'

import {MapContainer, TileLayer, useMap, Circle, Popup} from 'react-leaflet'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    mapContainer: {
        height: '100%',
        margin: '10px'
    },
    flag: {
        height: '80px',
        width: '100%',
        backgroundSize: 'cover',
        borderRadius: '5px'
    }
})

function MapCovid () {
const selectedCountry = useSelector((state) => {
    return state.data.country
})

const allCountries = useSelector((state) => {
    return state.data.allCountries
})

const [lat, setLat] = useState(selectedCountry.countryInfo ? selectedCountry.countryInfo.lat : 51 )
const [long, setLong] = useState(selectedCountry.countryInfo ? selectedCountry.countryInfo.long : 0)

useEffect(() => {
    if(selectedCountry.countryInfo){
        setLat(selectedCountry.countryInfo.lat)
        setLong(selectedCountry.countryInfo.long)
    }
}, [selectedCountry])

const center = [lat, long]
const zoom = 4

function ChangeView() {
    const map = useMap();
    map.setView(center);
    return null;
  }

const classes = useStyles()

return (
<div className={classes.mapContainer}>
    <MapContainer
        id='mapContainer'
        center={center} 
        zoom={zoom} 
        scrollWheelZoom={false}
    >
        <ChangeView center={center} />
        {allCountries.map((country) => {
            return (
                <Circle
                    key={country.country}
                    center={[country.countryInfo.lat, country.countryInfo.long]}
                    fillOpacity = {0.4}
                    pathOptions={{
                        color: 'rgb(223,58,73)'
                    }}
                    radius={
                        Math.sqrt(country.cases / 10)* 800
                    }
                >
                <Popup>
                    <div>
                        <div
                            className={classes.flag}
                            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
                        />
                        <div>{country.country}</div>
                        <div>Cases: {country.cases}</div>
                        <div>Recovered: {country.recovered}</div>
                        <div>Deaths: {country.deaths}</div>
                    </div>
                </Popup>
                </Circle>
            )
        })}
        <TileLayer 
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
    </MapContainer>
</div>
)
}

export default MapCovid