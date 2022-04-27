import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
  const Navigate=useNavigate()
  const [object, setobject] = useState([
    {
      Problems:"",
      diagnosedProblem:"",
      physicalTrauma:"",
      mentalTrauma:"",
      experienceProblem:"",
      rating:"",    
      NotRelevant:false,
      whenlyingdown:false,
      whensitting:false,
      Understanding:false,
      Inwalking:false,

    }
  ])
  useEffect(() => {
    localStorage.getItem('object')? setobject(JSON.parse(localStorage.getItem('object'))): setobject([
      {
        Problems:"",
        diagnosedProblem:"",
        physicalTrauma:"",
        mentalTrauma:"",
        experienceProblem:"",
        rating:""
      }
    ])
  }, [])

  const HandleChange= (e,index)=>{
    
  const values=[...object]
  values[index][e.target.name]=e.target.value
   
  setobject(values);
  }
  const HandleAdd=()=>{
    setobject([...object,{
      Problems:"",
      diagnosedProblem:"",
      physicalTrauma:"",
      mentalTrauma:"",
      experienceProblem:"",
      rating:""
     
    }])
     
  }
  const HandleSubmit=(e)=>{
     e.preventDefault();
    localStorage.setItem('object',JSON.stringify(object));
    Navigate('/tableInfo')
    
  }
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-lg-10 offset-lg-1">
        {
          object?.map((item,index)=>{
            return(
              <div className="card p-5 shadow mt-3">
                <div className="card-header bg-transparent text-center">
                <h3 className="text-center"><strong>Form {index+1}</strong></h3>

                  <h3 className="text-center text-primary"><strong>Pain & Functional Description</strong></h3>
                  <span className='textColor'>The description of the current situation gives your Optimum Trainer a picture of and clues to the underlying causes of your problems</span>
                </div>
              <div className="card-body">
                  
              <form method='get' onSubmit={HandleSubmit}>
            <div className="mb-3">
               <label htmlFor="exampleFormControlInput1" className="form-label">If you have problems with pain/aches, stiffness, weakness or functional problems, describe this/these below. (List the symptoms in descending order with the most troublesome first)</label>
               <textarea name="Problems" value={item.Problems} onChange={(e)=>{
                 HandleChange(e,index)
               }} id="" cols="30" rows="3" className="form-control"></textarea>
             </div>
             {/* ------ */}
             <div className="d-flex justify-content-around my-5">
               <label htmlFor="diagnosedProblem">Have you been diagnosed with this problem?</label>
               <div class="form-check">
                 <input onChange={(e)=>{
                   HandleChange(e,index)
                 }} class="form-check-input" type="radio" name="diagnosedProblem" checked={item.diagnosedProblem=="Not relevant" ? true:false} value={"Not relevant"} id={"diagnosedProblem1"+index} />
                 <label class="form-check-label" for={"diagnosedProblem1"+index}>
                   Not relevant
                 </label>
               </div>
               <div class="form-check">
                 <input class="form-check-input"  checked={item.diagnosedProblem=="yes" ? true:false} type="radio" onChange={(e)=>{
                   HandleChange(e,index)
                 }} value={'yes'}  name="diagnosedProblem" id={"diagnosedProblem2"+index} />
                 <label class="form-check-label" for={"diagnosedProblem2"+index}>
                   yes
                 </label>
               </div>
               <div class="form-check">
                 <input class="form-check-input"  checked={item.diagnosedProblem=="no" ? true:false} onChange={(e)=>{
                   HandleChange(e,index)
                 }}  value={'no'} type="radio" name="diagnosedProblem" id={"diagnosedProblem3"+index} />
                 <label class="form-check-label" for={"diagnosedProblem3"+index}>
                   no
                 </label>
               </div>
             </div>
             {/* ----------------------- */}
             <div className="d-flex justify-content-around my-5">
               <label htmlFor="diagnosedProblem">Did the problem start after a physical trauma?</label>
               <div class="form-check">
                 <input class="form-check-input" checked={item.physicalTrauma==" Not relevant" ? true:false} onChange={(e)=>{
                   HandleChange(e,index)
                 }}  value={'Not relevant'} type="radio" name="physicalTrauma" id={"physicalTrauma1"+index} />
                 <label class="form-check-label" for={"physicalTrauma1"+index}>
                   Not relevant
                 </label>
               </div>
               <div class="form-check">
                 <input class="form-check-input" checked={item.physicalTrauma=="yes" ? true:false} onChange={(e)=>{
                   HandleChange(e,index)
                 }}  value={'yes'} type="radio" name="physicalTrauma" id={"physicalTrauma2"+index} />
                 <label class="form-check-label" for={"physicalTrauma2"+index}>
                   yes
                 </label>
               </div>
               <div class="form-check">
                 <input class="form-check-input" checked={item.physicalTrauma=="no" ? true:false} onChange={(e)=>{
                   HandleChange(e,index)
                 }}  value={'no'} type="radio" name="physicalTrauma" id={"physicalTrauma3"+index} />
                 <label class="form-check-label" for={"physicalTrauma3"+index}>
                   no
                 </label>
               </div>
             </div>
             {/* ----------------------- */}
             <div className="d-flex justify-content-around my-5">
               <label htmlFor="diagnosedProblem">Did the problem start after a mental trauma?</label>
               <div class="form-check">
                 <input class="form-check-input" checked={item.mentalTrauma==" Not relevant" ? true:false} onChange={(e)=>{
                   HandleChange(e,index)
                 }} value={'Not relevant'} type="radio" name="mentalTrauma" id={"mentalTrauma1"+index} />
                 <label class="form-check-label" for={"mentalTrauma1"+index}>
                   Not relevant
                 </label>
               </div>
               <div class="form-check">
                 <input class="form-check-input" checked={item.mentalTrauma=="yes" ? true:false} onChange={(e)=>{
                   HandleChange(e,index)
                 }}  value={'yes'} type="radio" name="mentalTrauma" id={"mentalTrauma2"+index} />
                 <label class="form-check-label" for={"mentalTrauma2"+index}>
                   yes
                 </label>
               </div>
               <div class="form-check">
                 <input class="form-check-input"  checked={item.mentalTrauma=="no" ? true:false} onChange={(e)=>{
                   HandleChange(e,index)
                 }}  value={'no'} type="radio" name="mentalTrauma" id={"mentalTrauma3"+index} />
                 <label class="form-check-label" for={"mentalTrauma3"+index}>
                   no
                 </label>
               </div>
             </div>
             {/* ----------------------- */}
             <div className="d-flex justify-content-around my-5">
               <label htmlFor="diagnosedProblem">How often  do you experience the problem</label>
               <div class="form-check">
                 <input class="form-check-input" onChange={(e)=>{
                   HandleChange(e,index)
                 }}  value={'Not relevant'} checked={item.experienceProblem=="Not relevant" ? true:false} type="radio" name="experienceProblem" id={"experienceProblem1"+index} />
                 <label class="form-check-label" for={"experienceProblem1"+index}>
                   Not relevant
                 </label>
               </div>
               <div class="form-check">
                 <input class="form-check-input" onChange={(e)=>{
                   HandleChange(e,index)
                 }}  value={'Daily'} type="radio" checked={item.experienceProblem=="Daily" ? true:false} name="experienceProblem" id={"experienceProblem2"+index} />
                 <label class="form-check-label" for={"experienceProblem2"+index}>
                   Daily
                 </label>
               </div>
               <div class="form-check">
                 <input class="form-check-input" onChange={(e)=>{
                   HandleChange(e,index)
                 }}  value={"Several times/week"} checked={item.experienceProblem=="Several time/week" ? true:false} type="radio" name="experienceProblem" id={"experienceProblem3"+index} />
                 <label class="form-check-label" for={"experienceProblem3"+index}>
                   Several times/week
                 </label>
               </div>
               <div class="form-check">
                 <input class="form-check-input" onChange={(e)=>{
                   HandleChange(e,index)
                 }}  value={'A few time/months'} checked={item.experienceProblem=="A few time/months" ? true:false} type="radio" name="experienceProblem" id={"experienceProblem4"+index} />
                 <label class="form-check-label" for={"experienceProblem4"+index}>
                   A few time/months
                 </label>
               </div>
               <div class="form-check">
                 <input class="form-check-input" type="radio" onChange={(e)=>{
                   HandleChange(e,index)
                 }}  value={'A few time/year'} checked={item.experienceProblem==" A few time/year" ? true:false}  name="experienceProblem" id={"experienceProblem5"+index} />
                 <label class="form-check-label" for={"experienceProblem5"+index}>
                   A few time/year
                 </label>
               </div>
             </div>
             <label htmlFor="">When do you experience the problem ?</label>
             <div class="form-check">
               <input class="form-check-input" checked={item?.NotRelevant && true} onChange={(e)=>{
                 const values=[...object]
                 values[index][e.target.name]=e.target.checked
                 setobject(values)
               }} type="checkbox" name="NotRelevant" value="NotRelevant" id={"flexCheckDefault5"+index} />
               <label class="form-check-label" for={"flexCheckDefault5"+index}>
                 Not Relevant
               </label>
             </div>
             <div class="form-check">
               <input class="form-check-input" checked={item?.whenlyingdown}  onChange={(e)=>{
                 const values=[...object]
                 values[index][e.target.name]=e.target.checked
                 setobject(values)
               }} type="checkbox" name="whenlyingdown" value="whenlyingdown" id={"flexCheckDefault4"+index} />
               <label class="form-check-label" for={"flexCheckDefault4"+index}>
               when lying down
               </label>
             </div>
             <div class="form-check">
               <input class="form-check-input" checked={item?.whensitting && true} onChange={(e)=>{
                 const values=[...object]
                 values[index][e.target.name]=e.target.checked
                 setobject(values)
               }} type="checkbox" name="whensitting" value="whensitting" id={"flexCheckDefault1"+index} />
               <label class="form-check-label" for={"flexCheckDefault1"+index}>
                  when sitting
               </label>
             </div>
             <div class="form-check">
               <input class="form-check-input" checked={item?.Understanding && true} onChange={(e)=>{
                 const values=[...object]
                 values[index][e.target.name]=e.target.checked
                 setobject(values)
               }} type="checkbox" name="Understanding" value=" Understanding" id={"flexCheckDefault2"+index} />
               <label class="form-check-label" for={"flexCheckDefault2"+index}>
               Under standing
               </label>
             </div>
             <div class="form-check">
               <input class="form-check-input" checked={item?.Inwalking && true} onChange={(e)=>{
                 const values=[...object]
                 values[index][e.target.name]=e.target.checked
                 setobject(values)
               }} type="checkbox" name="Inwalking" value="Inwalking"  id={"flexCheckDefault3"+index} />
               <label class="form-check-label" for={"flexCheckDefault3"+index}>
               In walking
               </label>
             </div>
               {/* ----------------------- */}
             <div className="d-flex justify-content-around my-5">
               <label htmlFor="diagnosedProblem">How intense is the experience of the problem on average on a 0-10 scale?</label>
               <div class="form-check">
                 <input class="form-check-input" type="radio" onChange={(e)=>{
                   HandleChange(e,index)
                 }}  value={0} name="rating" checked={item.rating=="0" ? true:false}  id={"rating0"+index} />
                 <label class="form-check-label" for={"rating0"+index}>
                  0
                 </label>
               </div>
               <div class="form-check">
                 <input class="form-check-input " checked={item.rating=="1" ? true:false}  type="radio" onChange={(e)=>{
                   HandleChange(e,index)
                 }} value={1} name="rating" id={"rating1"+index} />
                 <label class="form-check-label" for={"rating1"+index}>
                   1
                 </label>
               </div>
               <div class="form-check">
                 <input class="form-check-input" checked={item.rating=="2" ? true:false}  type="radio" onChange={(e)=>{
                   HandleChange(e,index)
                 }} value={2} name="rating" id={"rating2"+index} />
                 <label class="form-check-label" for={"rating2"+index}>
                   2
                 </label>
               </div>
               <div class="form-check">
                 <input class="form-check-input" checked={item.rating=="3" ? true:false}  type="radio" onChange={(e)=>{
                   HandleChange(e,index)
                 }} value={3} name="rating" id={"rating3"+index} />
                 <label class="form-check-label" for={"rating3"+index}>
                   3
                 </label>
               </div>
               <div class="form-check">
                 <input class="form-check-input" checked={item.rating=="4" ? true:false}  type="radio" onChange={(e)=>{
                   HandleChange(e,index)
                 }} value={4} name="rating" id={"rating4"+index} />
                 <label class="form-check-label" for={"rating4"+index}>
                   4
                 </label>
               </div>
               <div class="form-check">
                 <input class="form-check-input" checked={item.rating=="5" ? true:false}  onChange={(e)=>{
                   HandleChange(e,index)
                 }} value={5} type="radio" name="rating" id={"rating5"+index} />
                 <label class="form-check-label" for={"rating5"+index}>
                   5
                 </label>
               </div>
               <div class="form-check">
                 <input class="form-check-input" checked={item.rating=="6" ? true:false}  type="radio" onChange={(e)=>{
                   HandleChange(e,index)
                 }} value={6} name="rating" id={"rating6"+index} />
                 <label class="form-check-label" for={"rating6"+index}>
                   6
                 </label>
               </div>
               <div class="form-check">
                 <input class="form-check-input" checked={item.rating=="7" ? true:false}  type="radio" onChange={(e)=>{
                   HandleChange(e,index)
                 }} value={7} name="rating" id={"rating7"+index} />
                 <label class="form-check-label" for={"rating7"+index}>
                   7
                 </label>
               </div>
               <div class="form-check">
                 <input class="form-check-input" checked={item.rating=="8" ? true:false}  type="radio" onChange={(e)=>{
                   HandleChange(e,index)
                 }} value={8} name="rating" id={"rating8"+index} />
                 <label class="form-check-label" for={"rating8"+index}>
                   8
                 </label>
               </div>
               <div class="form-check">
                 <input class="form-check-input" checked={item.rating=="9" ? true:false}  type="radio" onChange={(e)=>{
                   HandleChange(e,index)
                 }} value={9} name="rating" id={"rating9"+index} />
                 <label class="form-check-label" for={"rating9"+index}>
                   9
                 </label> 
               </div>
               <div class="form-check">
                 <input class="form-check-input" checked={item.rating=="10" ? true:false}  type="radio" name="rating" onChange={(e)=>{
                   HandleChange(e,index)
                 }} value={10} id={"rating10"+index} />
                 <label class="form-check-label" for={"rating10"+index}>
                   10
                 </label>
               </div>
             </div>
            <div className="mx-auto w-100 ">
            <button type='button' onClick={HandleAdd} className="btn btn-dark mx-2 my-2">Add</button>
          
           <button type='submit' className="btn btn-dark mx-2 my-2">Next</button>            </div>
            </form>
              </div>
            </div>
            )
          })
        }
        <button className="btn btn-warning my-3 w-100" onClick={()=>{
          localStorage.removeItem("object")
          window.location.reload()
        }}>Clear</button>
        </div>
      </div>
    </div>
  )
}

export default Home