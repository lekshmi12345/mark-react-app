import React from 'react'
import Header from './Header'

const View = () => {
    var viewfaculty=[
        { 
            "Name":"anila",
            "Addno":"11045",
            "CGPA":"7.5",
        },
        {"Name":"anju",
        "Addno":"11047",
        "CGPA":"7.6",
    },
    {
    "Name":"vani",
    "Addno":"11047",
    "CGPA":"7.5",
    }
    ]
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
                                 <th scope="col">Addno</th>
                                 <th scope="col">CGPA</th>
                                                                         
                                 </tr>
                                 </thead>
                                 <tbody>
                                          {
                                           viewfaculty.map((value,key)=>{
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