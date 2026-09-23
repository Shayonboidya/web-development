import './App.css'
import Todo from './Todo';

function App() {
  return (
    <>
      <div>
        <h1>Hello React</h1>
        {/* <Person></Person>
        <Gedget></Gedget> */}
        <Student name='shayon' id='28' ></Student>
        <Student name='nitu'></Student>
        {/* <Student name='nayon'></Student> */}

        <Devoloper language='Java' name='Shayon' selary='899990'></Devoloper>
        <Devoloper language='Javascript' name='Shy' selary='8990'></Devoloper>
        <Devoloper language='Typescript'></Devoloper>

        <Todo task= "Face book" time='2:00' date='today'></Todo>



      </div>


    </>
  )
}


function Person() {
  return (
    <>
      <p>i am devoloper shayon. how was that?
      </p>
    </>
  )
}

function Gedget(){
  const money = 29;
  return(
    <>
      <h2>Sum {2*4} </h2>
      <h2>Sum {money} </h2>
    
    </>
  )
}
interface StudentType{
  name:string;
  id?:string;
}

function Student(props:StudentType){
  console.log(props);
  return(
    <div className='student'>
      <h2> Name:  {props.name} </h2>
      <h2> ID: {props?.id} </h2>
    </div>
  )
}

interface DeveloperType{
  language: string;
  name?: string;
  selary ?:string;
}

function Devoloper(props : DeveloperType){
  return (
    <div>
      <h2> language: {props.language} </h2>
      
      {props.name !== undefined ? <h2> Developer name: {props.name} </h2>: undefined}
      {props.selary !== undefined ? <p>selary :{props.selary} </p> : undefined}
    </div>
  )
}


export default App
