import React from 'react'

const age = 15;

const Jsx4 = () => {
  return (
    <div>
        { age>=18 && "ehliyet alabilir" }
        { age>=18 || "ehliyet alamaz" }
    </div>
  )
}

export default Jsx4