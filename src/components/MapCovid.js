import React,{useState, useEffect} from 'react'
import {MapContainer, TileLayer, useMap} from 'react-leaflet'

import {useSelector} from 'react-redux'

function MapCovid () {
const selectedCountry = useSelector((state) => {
    return state.data.country
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

return (
<div id='map'>
    <MapContainer
        id='mapContainer'
        center={center} 
        zoom={zoom} 
        scrollWheelZoom={false}
    >
        <ChangeView center={center} />
        <TileLayer 
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
    </MapContainer>
</div>
)
}

export default MapCovid