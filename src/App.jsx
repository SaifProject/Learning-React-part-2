import './App.css'
import './Counter.jsx'
import Counter from './Counter.jsx'
import Batsman from './Batsman.jsx'
import { Suspense } from 'react'
import Users from './Users.jsx'

const fetchUsers =fetch('https://jsonplaceholder.typicode.com/users')
 .then(res => res.json()) ;

function App(){

 function handleClick(){
  alert('I am click')
 }

 return (
  <>
  <h3> Vite + React </h3>
  <Suspense fallback={<h3> Loading....</h3>}>
   <Users fetchUsers={fetchUsers}> </Users>
 </Suspense>

  <Batsman></Batsman>
  <Counter> </Counter>
  {/* <button onclick="handleClick()"> Click Me</button> */}
  <button onClick={handleClick}> Click me</button>
  {/* uasing arry func */}
  <button onClick={() => alert('Click 2')} > Click me 2</button>    
  </>
 )
}
export default App