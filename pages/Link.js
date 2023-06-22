import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Link() {
  
  const [data, setData] = useState(null)
  
  useEffect(() => {
    axios.get('/api/hello')
    .then(data =>{
      setData(data.data)
    })
     
  }, []);

  return (
    <div>
      <h1>{data ? data.map((item, index)=> {
        return (
          <div key={index}>
          <h4>{item.title}</h4>
          <p>{item.age}</p>
          </div>
        )
      }) : 'Loading...'}</h1>
    </div>
  );
}

export default Link;
