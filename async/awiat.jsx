// Using async/await for API calls offers better readability, error handling, and performance compared to traditional promise-based approaches (.then() and .catch()). Here’s why:

import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [data,setData]=useState([]);

  useEffect(()=>{
    const fetchData=async ()=>{
      try{
        const response=await axios.get("https://jsonplaceholder.typicode.com/posts")
        setData(response.data)
      }catch(error){
        console.error("Error fetching API : ",error)
      }
    };
    fetchData();
  },[])
  return (
    <div>
      
        {data.length > 0 ? (
          <div>
            {data.map(post=>(
              <div key={post.id}>{post.title}</div>
            ))}
          </div>
        ):(<p>Loding.......</p>)}
      
    </div>
  )
}

export default App
