import axios from 'axios'

export const startWorld = () => {
    return (dispatch) => {
        axios.get('https://disease.sh/v3/covid-19/all')
            .then((response) => {
                dispatch(selectCountry(response.data))
            })
            .catch((error) => {
                alert(error.message)
            })
    }
}

export const startAllCountries = () => {
    return (dispatch) => {
        axios.get('https://disease.sh/v3/covid-19/countries')
            .then((response) => {
                dispatch(setAllCountries(response.data))
            })
            .catch((error) => {
                alert(error.message)
            })
    }
}

const setAllCountries = (countries) => {
    return {
        type: 'SET_ALL_COUNTRIES',
        payload: countries
    }
}

export const startSelectCountry = (country) => {
    return (dispatch) => {
        axios.get(`https://disease.sh/v3/covid-19/countries/${country}?yesterday=${country}`)
            .then((response) => {
                dispatch(selectCountry(response.data))
            })
            .catch((error) => {
                alert(error.message)
            })

        axios.get(`https://disease.sh/v3/covid-19/historical/${country}`)
            .then((response) => {
                dispatch(setHistoryData(response.data.timeline))
            })
            .catch((error) => {
                alert(error.message)
            })
    }
}

export const selectCountry = (country) => {
    return {
        type: 'SELECT_COUNTRY',
        payload: country
    }
}

export const startHistoryData = () => {
    return (dispatch) => {
        axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=30')
            .then((response) => {
                dispatch(setHistoryData(response.data))
            })
            .catch((error) => {
                alert(error.message)
            })
    }
}

const setHistoryData = (data) => {
    return {
        type: 'SET_HISTORY_DATA',
        payload: data
    }
}