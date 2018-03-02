// import React, { Component } from 'react';
// import * as MUI from 'material-ui'
// import styles from './DonorDetailStyles';
// import Person from 'material-ui/svg-icons/social/person';
//
//
// //<div>Age : ??</div>
// class DonorDetail extends Component {
//
//
//   componentWillMount() {
//     this.props.getDonorDetail(this.props.params.id);
//   }
//
//   //user-default
//   render() {
//     const {DonorDetail} = this.props;
//     const date = new Date(DonorDetail.dateOfBirth);
//     return (
//       <div style={styles.DonorDetailContainer}>
//         <MUI.Card>
//           <MUI.CardHeader
//             title={DonorDetail.fullName}
//             subtitle={DonorDetail.bloodGroup}
//             avatar={<MUI.Avatar icon={<Person />}/>}
//           />
//           <MUI.CardText >
//             <div>ContatctNo. : {DonorDetail.contactNo}</div>
//             <div>Email. : {DonorDetail.email}</div>
//             <div>DateOfBirth : {date.toString()}</div>
//             <div>Address : {DonorDetail.address}</div>
//           </MUI.CardText>
//         </MUI.Card>
//       </div>
//     );
//   }
// }
//
// export default DonorDetail
