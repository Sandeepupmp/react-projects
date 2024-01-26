import { useEffect, useState } from 'react'
import { FaAngleDoubleRight } from "react-icons/fa";



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
 
  const {company,dates, duties, title} = job[value]

 return(
  <section className="section">
    <div className="title">
      <h2>Exprince</h2>
      <div className="underline"></div>
    </div>
    <div className="jobs-center">
      <div className="btn-container">
        {job.map((item, index)=>{ 
          return(
            <button 
            className={`job-btn ${index === value && "active-btn"}`}
            key={index} onClick={()=>setValue(index)}>{item.company}</button>
          )

        })}
      </div>

      
      <article className='job-info'>
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className='job-date'> {dates}</p>
        {duties.map((duty, index)=>{
          return(
            <div key={index} className="job-desc">
             <FaAngleDoubleRight className="job-icon">
              </FaAngleDoubleRight>
              <p>{duty}</p>
            </div>
          )

        })}

      </article>
    </div>
    
  </section>
 )
}

export default App
