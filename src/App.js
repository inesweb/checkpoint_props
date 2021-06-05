import React from 'react'
//import logo from './logo.svg';
import photo3 from './photo3.jpg';
import photo2 from './photo2.jpg';
import photo1 from './photo1.jpg';
import Profile from './components/Profile/Profile'
//import './App.css';

function App() {
 
  return (
  
    <div style ={{textAlign :'center' , height: '100vh', backgroundColor: 'beige'}}>
     <Profile fullName ='ines zekri' bio ='let"s code '  profession ='software engineer'>
     <img style = {{marginTop: '80px',overflow: 'hidden' ,width: '32%'}} src={photo3}   />
     </Profile>
   
    </div>
 
   
  );
  
  }
 


export default App;
