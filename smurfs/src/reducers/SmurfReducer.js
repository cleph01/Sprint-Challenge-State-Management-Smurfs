import { 
    FETCH_SMURF_START,
    FETCH_SMURF_SUCCESS, 
    FETCH_SMURF_ERROR,
    PUT_SMURF_START, 
    PUT_SMURF_SUCCESS,
    PUT_SMURF_ERROR 
} from '../actions/SmurfsAction';


//Initial State

const initialState ={

    smurfs : [],
    isLoading : false,
    isPosting : false,
    error : null
}


//reducer function

export function fetchReducer(state = initialState, action){

    switch(action.type){

        case FETCH_SMURF_START:

            return{
                    ...state,
                        isLoading: true
                    }

        case FETCH_SMURF_SUCCESS:

            return{
                    ...state,
                        isLoading: false,
                        smurfs: action.payload
                    }
        
        case FETCH_SMURF_ERROR:

                return{
                        ...state,
                            isLoading: false,
                            error: action.payload
                        }

        default:

            return state;
    }
}




//Put Reducer
export function postReducer(state = initialState, action){

    switch(action.type){

        case PUT_SMURF_START:

            return{
                    ...state,
                        isPosting: true
                    }

        case PUT_SMURF_SUCCESS:

            return{
                    ...state,
                        isPosting: false,
                        // smurfs: action.payload
                    }
        
        case PUT_SMURF_ERROR:

                return{
                        ...state,
                            isPosting: false,
                            error: action.payload
                        }

        default:

            return state;
    }
}