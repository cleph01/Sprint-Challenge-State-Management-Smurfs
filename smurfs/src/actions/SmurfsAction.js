import axios from "axios";

//Post Data
export const PUT_SMURF_START = 'PUT_SMURF_START';
export const PUT_SMURF_SUCCESS = 'PUT_SMURF_SUCCESS';
export const PUT_SMURF_ERROR = 'PUT_SMURF_ERROR';

//Fetch Data
export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_ERROR = 'FETCH_SMURF_ERROR';


//put images function
export function putSmurf(sentData){

    return (dispatch) => {
        
        //Set isLoading to True
        dispatch({ type: PUT_SMURF_START })

        //axios call to API
        axios
            .post(`http://localhost:3333/smurfs`, sentData)
            .then( res => {
                //console log result
                console.log(res.data, 'Axios-Call-Success')

                // dispatch({ type: PUT_SMURF_SUCCESS, payload: res.data })
                dispatch({ type: PUT_SMURF_SUCCESS })

                fetchSmurf()
            })
            .catch( err => {

                console.log(err, 'Axios-Error')
                dispatch({ type: PUT_SMURF_ERROR, payload: err })
            })


    }
}


//fetch images function
export function fetchSmurf(){

    return (dispatch) => {
        
        //Set isLoading to True
        dispatch({ type: FETCH_SMURF_START })

        //axios call to API
        axios
            .get(`http://localhost:3333/smurfs`)
            .then( res => {
                //console log result
                console.log(res.data, 'Axios-Call-Success')

                dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data })
            })
            .catch( err => {

                console.log(err, 'Axios-Error')
                dispatch({ type: PUT_SMURF_ERROR, payload: err })
            })


    }
}


