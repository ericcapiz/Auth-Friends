import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../api/axiosWithAuth';

const FriendsList = () => {

    const [friendForm,setFriendForm] = useState({
        id:Date.now(),
        name:"",
        age:"",
        email:""
    });

    const [clicked, setClick] = useState(true);
    const handleChanges = e => {
        const newFormData = {
            ...friendForm, [e.target.name] : e.target.value
        }
        setFriendForm(newFormData);
    }
    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/friends', friendForm )
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(friendForm)
        })
    }
    const [data,setData] = useState([]);
    const getData = () => {
        axiosWithAuth()
        .get('/friends')
        .then((res) => {
            console.log(res)
            setData(res.data)
        })
        .catch((err) => {
            console.log(err)
        
        })
    }
    useEffect(() => {
        getData();
        console.log(data);
    }, [clicked]);
    return(
        <div>
            <h2>Friends List:</h2>
            {data.map((friends) => (
                <div key={friends.id}>
                <h3>Name: {friends.name}</h3>
                <p>Age: {friends.age}</p>
                <p>Email: {friends.email}</p>
                </div>
            ))}
            <div>
        <h2>ADD FRIEND</h2>
        <form onSubmit = {handleSubmit}>
            <label htmlFor = "name">
                Name:
            <input
            type = "text" 
            name = "name"
            placeholder = "name"
            value = {friendForm.name}
            onChange = {handleChanges}
             />
            </label>
            <label htmlFor = "age">
                Age:
            <input
            type = "text" 
            name = "age"
            placeholder = "age"
            value = {friendForm.age}
            onChange = {handleChanges}
             />
            </label>
            <label htmlFor = "email">
                Email:
            <input
            type = "email" 
            name = "email"
            placeholder = "email"
            value = {friendForm.email}
            onChange = {handleChanges}
             />
            </label>
            <button onClick = {() => (setClick(!clicked) && setClick(!clicked))}>Add</button>
        </form>
        </div>
        </div>
        
    )
}

export default FriendsList;
