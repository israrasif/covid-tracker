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
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
      width: '100%',
      height: 'auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '10px 5px'
  },
  map: {
    height: '50vh',
    width: 'auto'
  },
  tableGraph: {
    width: '100%',
    height: '100%'
  },
  table : {
    height: '70vh',
    width: '100%',
    overflow: 'auto',
    margin: '10px'
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
      <Grid container className={classes.root}>
        <Typography 
          variant='h4'
        >
          Covid-19 Tracker
        </Typography>
        <Dropdown />
      </Grid>
      <Cards />
      <MapCovid className={classes.map}/>
      <Grid container justify='space-between' alignItems='center' className={classes.tableGraph}>
        <Grid  item md={4} xs={12} className={classes.table}>
          <CountriesTable />
        </Grid>
        <Grid item md={7} xs={12}>
          <Graph />
        </Grid>
        
      </Grid>
    </div>
  )
}

export default App
