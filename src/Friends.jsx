import { use } from "react";
import Friend from "./Friend.jsx";

export default function Friends({FriendsPromise}){

    const friends =use (FriendsPromise);
    console.log(friends);
    return (
        <div>
            <h3> Friends :{friends.length}</h3>
             {
                friends.map(friend => <Friend friend={friend} />)
            }
        </div>
    )
}