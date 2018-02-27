import { GET_DONOR_LIST, GET_DONOR_LIST_SUCCESSFUL, ADD_DONOR, GET_DONOR_DETAIL, GET_DONOR_DETAIL_SUCCESSFUL, GET_DONOR_DETAIL_REJECTED  } from '../actions';

const INITIAL_STATE = {

    isProcessing : false,
    isError : false,
    errorMessage: {},
    donorList: [],
    donorDetail : {},
    isDetailUpdated: false,
}

const donor_reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {

        case GET_DONOR_LIST:
            return {
              ...state,
              isProcessing: true,
              isError : false,
              donorList:[]
            };

        case GET_DONOR_LIST_SUCCESSFUL:
            return {
              ...state,
              isProcessing: false,
              isError : false,
              donorList:action.payload
            };

        case ADD_DONOR:
            var newDonorList = [
              ...state.donorList
            ];
            newDonorList.push(action.payload);
            return {
              ...state,
              isProcessing: false,
              isError : false,
              donorList:newDonorList
            };

        case GET_DONOR_DETAIL:
            return {
              ...state,
              isProcessing: true,
              isError : false,
              donorDetail: {}
            };

        case GET_DONOR_DETAIL_SUCCESSFUL:
            return {
              ...state,
              isProcessing: false ,
              isError : false,
              errorMessage: {},
              donorDetail:action.payload
            };

        case GET_DONOR_DETAIL_REJECTED:
            return {
              ...state,
              isProcessing: false,
              isError : true,
              errorMessage: action.payload,
              donorDetail:{}
            };

        default:
            return state;
    }
}

export default donor_reducer;
