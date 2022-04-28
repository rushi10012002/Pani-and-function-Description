import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function TableInfo() {
    const [data, setdata] = useState([])
   useEffect(() => {
    localStorage.getItem('object')? setdata(JSON.parse(localStorage.getItem('object'))): setdata([])
   }, [])
   
    // console.log(data);
  return (
    <div className="container">
           <Link to='/'><button type='button' className="btn btn-dark mx-2 my-2   my-3">Back</button></Link> <br />
        <div className="row">
            <div className="col-lg-10 offset-lg-1">
                <div className="table-responsive">
                <table class="table table-striped table-dark">
  <thead>
      
    <tr>
      <th scope="col">#</th>
      <th scope="col">Problems</th>
      <th scope="col">Have you been diagnosed with this problem?</th>
      <th scope="col">Did the problem start after a physical trauma?</th>
      <th scope="col">Did the problem start after a mental trauma?</th>
      <th scope="col">How often do you experience the problem</th>
      <th scope="col">When do you experience the problem ?</th>
      <th scope="col">How intense is the experience of the problem on average on a 0-10 scale?</th>
       
    </tr>
  </thead>
  <tbody>
   {
       data?.map((item,i)=>{
           return(
            <tr key={i}>
            <th scope="row">{i+1}</th>
            <td>{item.Problems}</td>
            <td>{item.diagnosedProblem}</td>
            <td>{item.physicalTrauma}</td>
            <td>{item.mentalTrauma}</td>
            <td>{item.experienceProblem}</td>
            <td>
              <ul>
               {item.NotRelevant &&  <li> "NotRelevant"</li>}
                 {item.whenlyingdown && <li>  "whenlyingdown"</li>}
                {item.whensitting && <li>  "whensitting"</li>}
                 {item.Understanding && <li>  "Understanding"</li>}
                {item.Inwalking && <li> "Inwalking"</li>}
              </ul>
            </td>
            <td>{item.rating}</td>
          </tr>
           )
       })
   }
     
  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TableInfo