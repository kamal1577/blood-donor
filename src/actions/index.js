// import axios from 'axios';
// import fetch from 'isomorphic-fetch';
// // require('dotenv').config();
//
//
//     // static REGISTER_DONOR = 'REGISTER_DONOR';
//     // static REGISTER_DONOR_SUCCESSFUL = 'REGISTER_DONOR_SUCCESSFUL';
//     // static REGISTER_DONOR_REJECTED = 'REGISTER_DONOR_REJECTED';
//
//   export const GET_DONOR_LIST = 'GET_DONOR_LIST';
//   export const GET_DONOR_LIST_SUCCESSFUL = 'GET_DONOR_LIST_SUCCESSFUL';
//   export const GET_DONOR_LIST_REJECTED = 'GET_DONOR_LIST_REJECTED';
//
//   export const ADD_DONOR = 'ADD_DONOR';
//
//   export const GET_DONOR_DETAIL = 'GET_DONOR_DETAIL';
//   export const GET_DONOR_DETAIL_SUCCESSFUL = 'GET_DONOR_DETAIL_SUCCESSFUL';
//   export const GET_DONOR_DETAIL_REJECTED = 'GET_DONOR_DETAIL_REJECTED';
//
//
//
//
//
//   export const getDonorList = () =>{
//         return {
//             type: GET_DONOR_LIST
//         }
//     }
//
//   export const getDonorListSuccessful = (donorList) => {
//         return {
//             type: GET_DONOR_LIST_SUCCESSFUL,
//             payload: donorList
//         }
//     }
//
//   export const addDonorToList = (donorObj) => {
//         return {
//             type: ADD_DONOR,
//             payload: donorObj
//         }
//     }
//
//   export const getDonorDetail = () => {
//         return {
//             type: GET_DONOR_DETAIL
//         }
//     }
//
//   export const getDonorDetailSuccessful = (donorObj) => {
//         return {
//             type: GET_DONOR_DETAIL_SUCCESSFUL,
//             payload: donorObj
//         }
//     }
//
//   export const getDonorDetailRejected = (error) => {
//         return {
//             type: GET_DONOR_DETAIL_REJECTED,
//             payload: error
//         }
//     }
//
//     // ////
//
//
//         /// Fetch Donor List Functions
//     //     static getDonorList(bloodGroup) {
//     //         console.log("getDonorList ",bloodGroup);
//     //         return (dispatch) => {
//     //             dispatch(DonorActions.getDonorList())
//     //             DonorMiddleware.getDonorListFromFirebase(dispatch,bloodGroup);
//     //         }
//     //     }
//     //
//     //     static getDonorListFromFirebase(dispatch,bloodGroup){
//     //         //playersRef.orderByChild("name").equalTo("John")
//     //         const donorListRef = firebase.database().ref('/')
//     //                             .child("users")
//     //                             .orderByChild("isDonor").equalTo(true);
//     //         donorListRef.on("child_added",function (snapshot){
//     //                         dispatch(DonorActions.addDonorToList(snapshot.val()))
//     //                     })
//     //     }
//     //
//     //     //Get Donor Detail
//     //     static getDonorDetial(donorId) {
//     //         console.log("getDonorDetial ",donorId);
//     //         return (dispatch) => {
//     //             dispatch(DonorActions.getDonorDetail())
//     //             DonorMiddleware.getDonorDetailFromFirebase(dispatch,donorId);
//     //         }
//     //     }
//     //
//     //     static getDonorDetailFromFirebase(dispatch,donorId){
//     //         firebase.database().ref('/')
//     //             .child(`users/${donorId}`)
//     //             .on("value",function (snapshot){
//     //                 dispatch(DonorActions.getDonorDetailSuccessful(snapshot.val()))
//     //             });
//     //     }
//     //
//     //
//     // }
