import React from "react";


import { axiosWithAuth } from "../api/axiosWithAuth";

class FriendList extends React.Component {
  state = {
    friends: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    /* */
    axiosWithAuth()
      .get("/data")
      .then((res) => {
        console.log("friends ", res);
        this.setState({
          friendList: res.data.data
        });
      })
      .catch((err) =>
        console.error("bk: GasPrices: getData failed: err: ", err)
      );
  };

  

  render() {
    
    return (
        <div>
                {friends.map((item)=>(
                    <p>{item.name}</p>
                ))}
         </div>        
     
    );
  }
}

export default FriendList;
