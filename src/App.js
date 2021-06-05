import React from 'react'
import photo3 from './photo3.jpg';
//import photo2 from './photo2.jpg';
//import photo1 from './photo1.jpg';
import Profile from './components/Profile/Profile'
//import './App.css';handleName={handleName}

function App() {
 // const handleName = fullName => alert(fullName);
 const img = {marginTop: '80px',overflow: 'hidden' ,width: '32%' }
 const container ={textAlign :'center' , height: '100vh', backgroundColor: 'beige'}
  return (
  
    <div style ={container}>
     <Profile fullName ='ines zekri' bio ='let"s code '  profession ='software engineer' >
     <img style = {img} src={photo3}   />
     </Profile>
   
    </div>
 
   
  );
  
  }
 


export default App;
