// // components/CounterApp.jsx
// import { connect } from 'react-redux';
// import * as Actions from '../actions';
// import { bindActionCreators } from 'redux';
// import DonorList from '../components/DonorList/DonorList';
//
// const mapStateToProps = (state) => {
//   return{
//     donors: state.donor_reducer.donors,
//     requestPending: state.donor_reducer.isLoading,
//     isError: state.donor_reducer.isError,
//     errorMessage: state.donor_reducer.errorMessage
//   }
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     actions: bindActionCreators(Actions, dispatch)
//   };
// };
//
// const DonorListContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(DonorList);
//
// export default DonorListContainer;
