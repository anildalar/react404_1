import './App.css';
import { useEffect, useState } from 'react';
import swal from 'sweetalert';

//import something from somelibrary
import { BASE_URL,headers,TOKEN } from './Helper'

//useHOOK

//RFC React Functional Components
function App() {
  //1. States/Variables
  //Hooks varaible
  //const [variable, setfunction] = useState(initialData)
  const [studentName, setStudentName] = useState('ANIL')


  //useEffect(<function>, <dependency>)

  // ()=>{}  Fat arrow annanymous function
  useEffect(()=>{

  },[]) //Empty Array
  //2.Functions and
  //Lets create a function with Fat Arrow notation
  let myFunction = ()=>{
    console.log(studentName);
    // Call the api here
    var data = {
      "data": {
        "name": studentName
      }
    }
    //Promise Chain
    fetch(BASE_URL+'/api/friends',{ // + concatination operator
      method: 'POST',
      headers: {
        ...headers

      },
      body:JSON.stringify(data)
    }).then((d)=>{
      console.log(d.status);
      if(d.status === 200){ //Strictly Comparision Operator
        swal("Good job!", "Data Created Successfully", "success");
      }
    }).catch((e)=>{}).finally((all)=>{});
  }

  // Ananymous function (e)=>{}  ES6

  //3. Return Statements JSX x=XML
  return (
    <div className="App">
      { studentName }
      <form>
        <label>Enter Student Name:<br />
          <input type="text" value={ studentName } onChange={ (e)=>{ setStudentName(e.target.value) }  } />
        </label><br />
        <input type="button" onClick={ myFunction } name="studentName" value="Save Student" />
      </form>
    </div>
  );
}

export default App;
