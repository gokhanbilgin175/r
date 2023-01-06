import React from 'react'

const Jsx3 = () => {

    const durum = false;

  return (
    <div>
    
     {durum ? <div> <h3>kendimi iyi hissetmiyorum</h3>
<ul>
    <li>Lorem, ipsum.</li>
    <li>Minima, quia.</li>
    <li>Porro, repellat!</li>
</ul></div>

:  <div> <h2>kendimi iyi hissediyorum.</h2>
<ul>
    <li>Lorem, ipsum.</li>
    <li>Minima, quia.</li>
    <li>Porro, repellat!</li>
</ul>
</div>
       }





    </div>
  )
}

export default Jsx3