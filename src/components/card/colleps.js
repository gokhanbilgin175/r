import React from 'react'

const Colleps = (props) => {
  return (
    <div>
        <p>
 
  <a class="btn btn-primary" data-bs-toggle="collapse" href={"#".concat(props.href)} role="button" aria-expanded="false" aria-controls="collapseExample">
    Link with href
  </a>
</p>
<div class="collapse" id={props.href}>
  <div class="card card-body">
  {props.children}
  </div>
</div>
    </div>
  )
}

export default Colleps