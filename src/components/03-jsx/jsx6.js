import React from 'react'
import countries from "./countries (11).json"

const Jsx6 = () => {


   
  return (
 <table>
  <thead>
    <tr>
    <td>no</td>
    <td>country name</td>
    <td>country code</td>
     
    </tr>
  </thead>
  <tbody>
    {countries.map((city,index)=>  <tr key={index}>
    <td>{index+1}</td>
    <td>{city.name}</td>
    <td>{city.code}</td>
    </tr>) }
   
  </tbody>
 </table>
  )
}

export default Jsx6