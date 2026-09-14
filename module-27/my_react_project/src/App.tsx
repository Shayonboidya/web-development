
function App() {
  
  return (
    <>
          <h1>Get started</h1>
          <Person></Person>
          <Gedgts></Gedgts>
    </>
  )
}

function Person(){
  return <p>Hello i am shayon</p>
}

function Gedgts(){
  const money = 200;
  return (
    <>
      <p>hello</p>
      <p>sum {2*4}</p>
      <p>Money {money} </p>
    </>
  )
}

export default App
