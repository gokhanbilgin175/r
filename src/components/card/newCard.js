import React from 'react'

const NewCard = (props) => {
    console.log(props);
  return (
    <div class="card">
    <img src={props.imageShow} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{props.cardTitle}</h5>
      <p class="card-text">{props.cardText}</p>
      <p class="card-text"><small class="text-muted">{props.cardTitle}</small></p>
    </div>
  </div>
  )
}

export default NewCard