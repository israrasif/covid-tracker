const initialValue = {
    allCountries: [],
    country: {},
    chartData: {}
}

const dataReducer = (state = initialValue, action) => {
    switch(action.type) {

        case 'SET_ALL_COUNTRIES' : {
            return {
                ...state,
                allCountries: [...action.payload]
            }
        }

        case 'SELECT_COUNTRY' : {
            return {
                ...state,
                country: {...action.payload}
            }
        }

        case 'SET_HISTORY_DATA' : {
            return {
                ...state,
                chartData : {
                    labels: Object.keys(action.payload.cases),
                    datasets: [
                    {
                        label: 'cases',
                        data: Object.values(action.payload.cases)
                    }
                        ]
                    }
                }
        }

        default: {
            return state
        }
    }
}

export default dataReducer