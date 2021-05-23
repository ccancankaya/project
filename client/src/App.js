import {useState, useEffect } from "react";
import axios from "axios";

const App=()=> {
  const [values,setValues]=useState()

  useEffect(()=>{
      axios.get('/api/values/all').then(res=>{
          setValues(res.data)
          console.log(res.data)
      })
  },[])


  return(
      <div>
    {values}
      </div>
  )
}

export default App;
