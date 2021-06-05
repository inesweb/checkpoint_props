import React from 'react'
import PropTypes from "prop-types";

const Profile = (props)=> {
    const handleName = props.fullName;
    alert(handleName);
     
   // console.log(handleName)
   const container = {display: 'inline-grid'}
   const h2  ={color:'red' , display: 'inline-block', fontSize : '23px',paddingInline: '12px'}
   const h3  ={color:'red' , display: 'inline-block', fontSize : '23px',paddingInline: '12px'}
 return(

    <div style ={container}>
       <div > {props.children} </div>
        <h2 style={h2} >Name:     </h2>{props.fullName}
        <h3 style={h3}> Bio:</h3>{props.bio}
        <h3 style={h3}> Profession</h3>{props.profession}
      
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