import React from 'react'
import { useSelector } from 'react-redux'

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Box } from '@material-ui/core';


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
}))(TableCell)

const useStyles = makeStyles({
    table : {
        height: '75vh',
        width: 'auto',
        overflow: 'auto'
    },
    tableHead : {
        position: 'sticky'
    }
})

const CountriesTable = () => {

const allCountries = useSelector((state) => {
    return state.data.allCountries
})

const sortedCountries = [].concat(allCountries.sort((a, b) => parseFloat(b.cases) - parseFloat(a.cases)))

const classes = useStyles()

return (
    <Box className={classes.table}>
        <Table>
            <TableHead className={classes.tableHead}>
                <TableRow>
                    <StyledTableCell>Country</StyledTableCell>
                    <StyledTableCell>Cases</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {sortedCountries.map((country) => {
                    return (
                        <TableRow key={country.country}>
                            <TableCell>{country.country}</TableCell>
                            <TableCell>{country.cases}</TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    </Box>
)
}

export default CountriesTable
