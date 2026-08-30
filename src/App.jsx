import './App.css'
import './Counter.jsx'
import Counter from './Counter.jsx'
import Batsman from './Batsman.jsx'

function App(){

 function handleClick(){
  alert('I am click')
 }

 return (
  <>
  <h3> Vite + React </h3>

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