import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'

import { startAllCountries, startHistoryData, startWorld } from './actions/actions'
import Dropdown from './components/Dropdown'
import Cards from './components/Cards'
import CountriesTable from './components/CountriesTable'
import Graph from './components/Graph'
import MapCovid from './components/MapCovid'

import './App.css'

import 'leaflet/dist/leaflet.css'
import 'leaflet/dist/leaflet'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '5vw'
  },
  map: {
    height: '50vh',
    width: 'auto'
  }
});

function App() {
const dispatch = useDispatch()

const classes = useStyles()

useEffect(() => {
  dispatch(startAllCountries())
  dispatch(startHistoryData())
  dispatch(startWorld())
})

  return (
    <div>
      <h1>Covid-19 Tracker</h1>
      <Dropdown />
      <Cards />
      <MapCovid className={classes.map}/>
      <Grid container className={classes.root}>
        <CountriesTable item md={4} xs={12}/>
        <Graph item md={8} xs={12}/>
      </Grid>
    </div>
  )
}

export default App
