import { use } from "react"
import Post from "./Post";

export default function Posts({PostsPromise}){
    const posts= use(PostsPromise);
    console.log(posts);
return (
    <div className="posts-container">
        <h2> All posts are here : {posts.length}</h2>
        
     {
        posts.map(post => <Post post={post} />)
    }
    </div>
)

}