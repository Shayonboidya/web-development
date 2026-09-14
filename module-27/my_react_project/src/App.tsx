import './App.css'
function App() {

  return (
    <>
      <h1>Get started</h1>
      {/* <Person></Person>
          <Gedgts></Gedgts> */}

      {/* <Student></Student>
          <Student></Student> */}

      <Developer language="javaScript" exprience="3 years"></Developer>
      <Developer language = "java" exprience = "4 year"></Developer>
      <Developer language="c++" exprience="none"></Developer>
    </>
  )
}

function Developer(props) {
  // console.log(props);
  return (
    <div className='person'>
      <h4>Programing language: {props.language} </h4>
      <h4>exprience : {props.exprience} </h4>
    </div>


  )
}


function Person() {
  return (
    <div className='person'>
      <h2>hello </h2>
      <h1>Shayon Boida</h1>
    </div>
  )
}

function Student() {
  const studentStyle = {
    border: "2px solid red",
    borderRadius: "20px",
    margin: '20px',
    padding: '10px'
  }

  return (
    <div style={studentStyle}>
      <h2>Hello ia am nothing.....</h2>
    </div>

  )
}

function Gedgts() {
  const money = 200;
  return (
    <>
      <p>hello</p>
      <p>sum {2 * 4}</p>
      <p>Money {money} </p>
    </>
  )
}

export default App
