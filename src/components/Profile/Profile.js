import React from 'react'
import PropTypes from "prop-types";
function ReactHeader(props) {
    return <h1>React {props.version} Documentation</h1>;
   }
const Profile = (props)=> {
    const handleName = props.fullName;
    alert(handleName);
     
   // console.log(handleName)
   
 return(

    <div style ={{display: 'inline-grid'}}>
       <div > {props.children} </div>
        <h2 style={{color:'red' , display: 'inline-block', fontSize : '23px',paddingInline: '12px'}} >Name:     </h2>{props.fullName}
        <h3 style={{color:'red' , display: 'inline-block', fontSize : '23px',paddingInline: '12px'}}> Bio:</h3>{props.bio}
        <h3 style={{color:'red' , display: 'inline-block', fontSize : '23px',paddingInline: '12px'}}> Profession</h3>{props.profession}
       
    </div>
 )

}
// Set default props
Profile.defaultProps = {
  fullName: "Looding" ,
  bio:  "Looding" ,
  profession:  "Looding" ,
 };
 // Set propTypes
Profile.propTypes = {
    fullName: PropTypes.string ,
    bio: PropTypes.string ,
    profession: PropTypes.string ,
  };


export default Profile ;