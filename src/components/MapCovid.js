import React from 'react'
import {MapContainer, TileLayer, useMap} from 'react-leaflet'

function MapCovid () {

const center = [51.505, -0.09]
const zoom = 3

return (
    <div id='map'>
        <MapContainer
            id='mapContainer'
            center={center} 
            zoom={zoom} 
            scrollWheelZoom={false}
        >
            <TileLayer 
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    </div>
)
}

export default MapCovid