import './App.css'
import './Counter.jsx'
import Counter from './Counter.jsx'
import Batsman from './Batsman.jsx'
import { Suspense } from 'react'
import Users from './Users.jsx'
import Friends from './Friends.jsx'
import Posts from './Posts.jsx'

const fetchUsers =fetch('https://jsonplaceholder.typicode.com/users')
 .then(res => res.json()) ;


// fetch for frnds
const fetchFriends=async()=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/users');
    return res.json();

}

// fetch for Posts
const fetchPosts=async()=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();

}




function App(){
  const FriendsPromise = fetchFriends();

 function handleClick(){
  alert('I am click')

 }

  const PostsPromise = fetchPosts();
 return (
  <>
  <h3> Vite + React </h3>
  <Suspense fallback="Post are comming... ">
  <Posts PostsPromise={ PostsPromise}></Posts>  
  </Suspense>




  {/* suspence for users  */}
  <Suspense fallback={<h3> Loading....</h3>}>
   <Users fetchUsers={fetchUsers}> </Users>
 </Suspense>


{/* suspence for Friends */}

<Suspense fallback={<h3> Friends are waiting for sami </h3>}>
<Friends FriendsPromise={FriendsPromise}></Friends>
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