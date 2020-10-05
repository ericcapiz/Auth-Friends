import React,{useState,useEffect} from "react";


import { axiosWithAuth } from "../api/axiosWithAuth";

const FriendList = () => {
    const [friends, setFriends] = useState([]);



    useEffect(() => {
     
   axiosWithAuth().get("/friends")
   .then(res=> setFriends(res.data) )
   .catch(error => console.error(error))
    }, [])
   return (
       <div>
        { friends.map((item,key) => (
           <div key={key}>
               <p>{item.name} </p>
               <p>{item.age} </p>
               <p>{item.email} </p>
             
             </div>
         ))}
       </div>
   )
}
export default FriendList;