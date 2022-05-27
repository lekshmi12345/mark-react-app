import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const View = () => {
    var [viewMark,setMark]=useState([])
    axios.get("http://localhost:4000/api/viewall").then( 
        (response)=>{
            console.log(response.data)
            setMark(response.data)
        }
    )
       
  return (
    <div>

<div>
<Header/>
    <div>
        <div class="container">
            <div class="row ">
                 <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <table class="table table-success table-striped" >
                         <thead>
                             <tr>
                                 <th scope="col">Name</th>
                                 <th scope="col">Admission no.</th>
                                 <th scope="col">CGPA</th>
                                                                         
                                 </tr>
                                 </thead>
                                 <tbody>
                                          {
                                           viewMark.map((value,key)=>{
                                                return <tr>
                                                <th><p class="card-text">{value.Name}</p></th>
                                                <td><p class="card-text">{value.Addno}</p></td>
                                                <td><p class="card-text">{value.CGPA}</p></td>
                                    
                                                
                                        

                                                </tr>
                                            })}
                                            </tbody>
                                            </table>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
            </div>
  )
}


export default View