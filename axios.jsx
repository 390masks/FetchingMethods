// axios method
// axios is a popular HTTP clint library for making API requests.
// axios simplifies fetching  data compaierd to fetch() by haddling jSON convertion automatically and provide better error handiling 

import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [data,setData]=useState([])


  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response=>setData(response.data))
    .catch(error=>console.error("Error :" ,error))
  },[])


  return (
    <div>
      {data.length>0 ?(
        <div>{data.map(post=>(
          <div key={post.key}>{post.title}</div>
        ))}</div>
      ):(<p>Loading.......</p>)}
    </div>
  )
}

export default App
