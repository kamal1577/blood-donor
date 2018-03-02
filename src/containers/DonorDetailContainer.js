//
// import { connect } from 'react-redux';
// import * as Actions from '../actions';
// import { bindActionCreators } from 'redux';
// import DonorDetail from '../components/DonorDetail/';
//
// const mapStateToProps = (state) => {
//   return{
//     donor: state.donor_reducer.donor,
//     requestPending: state.donor_reducer.isLoading,
//     isError: state.donor_reducer.isError,
//     errorMessage: state.donor_reducer.errorMessage,
//     // comments: state.donor_reducer.comments
//   }
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     actions: bindActionCreators(Actions, dispatch)
//   };
// };
//
// const DonorDetailContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(DonorDetail);
//
// export default DonorDetailContainer;
