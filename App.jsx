import React, { useEffect, useState } from 'react'

const App = () => {
  const [data,setData]=useState([])

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response=>response.json())
    .then(data=>setData(data))
    .catch(error=>console.error(error))
  },[]);

  console.log(data)
  return (
    <div>
      <div>
        {data.length > 0 ?(
          <div>
            {data.map(post=>(
              <div key={post.ley}>{post.title}</div>
            ))}
          </div>
        ):(
        <p>Loding......</p>)
        }
      </div>
    </div>
  )
}

export default App