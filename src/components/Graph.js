import React from 'react'
import { useSelector } from 'react-redux'
import { Line } from 'react-chartjs-2'
import { makeStyles } from '@material-ui/core'
import { Grid } from '@material-ui/core'


const useStyles = makeStyles({
    root: {
        height: 'auto',
        width: 'auto',
    }
})

const Graph = () => {

const classes = useStyles()

const graphData = useSelector((state) => {
    return state.data.chartData
})

return (
    <Grid className={classes.root}>
        <Line
            data={graphData}
        />
    </Grid>
)
}

export default Graph
