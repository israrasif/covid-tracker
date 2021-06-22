import React from 'react'
import { useSelector } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const useStyles = makeStyles({
    root: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '5vw'
    },
    card: {
      width: '30%',
      margin: '5px'
    },
  });

const Cards = () => {

const classes = useStyles()

const country = useSelector((state) => {
    return state.data.country
})

return (
    <Grid container className={classes.root}>
        <Card className={classes.card}>
            <CardContent>
                <Typography>
                    Total Cases
                </Typography>
                <Typography>
                    {country.cases} 
                </Typography>
                <Typography>
                    today - {country.todayCases}
                </Typography>
            </CardContent>
        </Card>
        <Card className={classes.card}>
            <CardContent>
                <Typography>
                    Recovered
                </Typography>
                <Typography>
                    {country.recovered}
                </Typography>
                <Typography>
                    today - {country.todayRecovered}
                </Typography>
            </CardContent>
        </Card>
        <Card className={classes.card}>
            <CardContent>
                <Typography>
                    Total Deaths
                </Typography>
                <Typography>
                    {country.deaths}
                </Typography>
                <Typography>
                    today - {country.todayDeaths}
                </Typography>
            </CardContent>
        </Card>
    </Grid>
)
}

export default Cards
