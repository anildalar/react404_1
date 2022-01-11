import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

//RFC
function App() {
  //1. States/Variables
  //Hooks varaible
  //const [variable, function] = useState(initialData)
  const [studentName, setStudentName] = useState('ANIL')

  //2.Functions and
  //Lets create a function with Fat Arrow notation
  let myFunction = ()=>{
    console.log(studentName)
  }

  //3. Return Statements JSX x=XML
  return (
    <div className="App">
      <form>
        <label>Enter Student Name:<br />
          <input type="text" value={ studentName } onChange={ (e)=>{ setStudentName(e.target.value)  } }/>
        </label><br />
        <input type="button" onClick={ myFunction } name="studentName" value="Save Student" />
      </form>
    </div>
  );
}

export default App;
