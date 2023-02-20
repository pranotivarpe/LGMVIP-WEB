

import React, {useState} from "react";
import Navbar from "./Navbar";
import UserCardGrid from "./UserCardGrid";
import axios from "axios";
import './App.css';
import loadingGif from "./loading_gif.gif";

function App(){
  const [users,setUsers]= useState([]);
  const [isLoading,setIsLoading]=useState(false);

  const handleGetUsersClick = async() => {
    try {
      setIsLoading(true);
      const response = await axios.get("https://reqres.in/api/users?page=1");
      setUsers(response.data.data);

      setTimeout(() =>{
        setIsLoading(false);
      },2000);
      
      } catch(error){
      console.error(error);
    setIsLoading(false);
    }
  };

  return (
    <div className="container">
    <Navbar onGetUsersClick={handleGetUsersClick} isLoading={isLoading}/>
    {isLoading ? (
      <img src={loadingGif} alt="Loading..." className="loading-img"/>
    ) : (
<UserCardGrid users={users} />
    )}
    </div>
  );
};

export default App;
