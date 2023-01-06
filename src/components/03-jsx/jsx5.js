import React from 'react'


const animals = ["kedi","köpek","fil","erdogan"]

const Jsx5 = () => {




  return (
    <div>
        <ul>
            { animals.map((animal,i) =>  <li key={i}><b>{animal}</b></li>  ) }
           
        </ul>
    </div>
  )
}

export default Jsx5