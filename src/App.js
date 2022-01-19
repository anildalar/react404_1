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
  const [studentName, setStudentName] = useState('')


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
    })
    .then(response => response.json()) // THis will make your json data readable
    .then((d)=>{

      //Check if we are receving an eror
      if ('error' in d){
        console.log('Error');
        if(d.error.status === 401){ //Strictly Comparision Operator
          swal(d.error.name, d.error.message, "error");
        }
      }else{
        // console.log(d)
        //Success
        //console.log(d.status);
        if(Object.keys(d.data).length !== 0){ //Strictly Comparision Operator
          swal("Good job!", "Data Created Successfully", "success");
        }
      }
     
      
    }).catch((e)=>{
      //Error
      //console.log('MyError',e)
    }).finally((all)=>{

      //All Case
    });
    //Fetch API 
    //fetch.then.catch.finally
  }

  // Ananymous function (e)=>{}  ES6

  //3. Return Statements JSX x=XML
  return (
    <div className="App">
      { studentName }
      <form>
        <label>Enter Student Name:<br />
          <input autoFocus type="text" value={ studentName } onChange={ (e)=>{ setStudentName(e.target.value) }  } />
        </label><br />
        <input type="button" onClick={ myFunction } name="studentName" value="Save Student" />
      </form>
    </div>
  );
}

export default App;
