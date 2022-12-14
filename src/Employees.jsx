import React from 'react'
import { useState } from 'react'
import femaleProfile from './images/femaleProfile.jpg';
import  maleProfile from './images/maleProfile.jpg';
const Employees = () => {
    const [employees, setEmployees] = useState( [{
        id: 1,
        fullName: "favour ofego",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "TeamA"
      },
      {
        id: 2,
        fullName: "Great Joe",
        designation: "Node Developer",
        gender: "female",
        teamName: "TeamA"
      },
      {
        id: 3,
        fullName: "Hillary Ewoma",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamA"
      },
      {
        id: 4,
        fullName: "David Joe",
        designation: "React Developer",
        gender: "male",
        teamName: "TeamB"
      },
      {
        id: 5,
        fullName: "David Henry",
        designation: "DotNet Developer",
        gender: "male",
        teamName: "TeamB"
      },
      {
        id: 6,
        fullName: "Sarah Rose",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "TeamB"
      },
      {
        id: 7,
        fullName: "James Ben",
        designation: "Angular Developer",
        gender: "male",
        teamName: "TeamC"
      },
      {
        id: 8,
        fullName: "Jessica Faye",
        designation: "API Developer",
        gender: "female",
        teamName: "TeamC"
      },
      {
        id: 9,
        fullName: "Lita Stone",
        designation: "C++ Developer",
        gender: "female",
        teamName: "TeamC"
      },
      {
        id: 10,
        fullName: "Daniel Young",
        designation: "Python Developer",
        gender: "male",
        teamName: "TeamD"
      },
      {
        id: 11,
        fullName: "Adrian Jacobs",
        designation: "Vue Developer",
        gender: "male",
        teamName: "TeamD"
      },
      {
        id: 12,
        fullName: "Devin Monroe",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "TeamD"
      }]);
  return (
    <main className="container"> 
     <div className='row justify-content-center mt-3 mb-3'>
            <div className="col-8">
               <select>
                 <option>Team A</option>
                 <option>Team B</option>
                 <option>Team C</option>
                 <option>Team D</option>
               </select>
            </div>
        </div>
       <div className='row justify-content-center mt-3 mb-3'>
            <div className="col-8">
              <div className='card-collection'>
                {
                  employees.map((employee) => (
                    <div id={employee.id} className="card m-2" style={{cursor:"pointer"}}>

                         {(employee.gender === 'male')?<img src={maleProfile} className="card-img-top" />
                                                      :<img src={femaleProfile} className="card-img-top" />  }

                         <div className='card-body'>
                             <h5 className='card-title'>Full Name: {employee.fullName}</h5>
                             <p className='card-text'><b>Designation:</b>{employee.designation}</p>
                         </div>
                    </div> 
                  ))
                }
                </div>
            </div>
       </div>
    </main>
  )
}

export default Employees
