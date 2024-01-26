import { useEffect, useState } from 'react'



const url = 'https://course-api.com/react-tabs-project'


function App() {

  const [loading, setLoading] = useState(true)
  const [job, setJobs] = useState([])
  const [value, setValue]= useState(0)
  
  const fetchjobs = async () =>{
    const response = await fetch(url)
    const jobsSerch = await response.json()
    setJobs(jobsSerch)
    setLoading(false)
     
  };

  useEffect(()=>{
    fetchjobs()
    
  }
  ,[])

  if(loading){
    return(
    <section className="section loading">
    <h1>Loading....</h1>
    </section>
    )
  };

  return (
    <>
     <h1>project setup</h1>
    </>
  )
}

export default App
