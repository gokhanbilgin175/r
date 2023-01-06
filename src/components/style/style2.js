import React from 'react'

const Style2 = () => {
    const styleTitle ={
        fontSize:"2rem",
        backgroundColor: "red",
        color:"green"


    }


  return (
    <div>
        <h2 style={styleTitle}>Lorem, ipsum.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure a quo ab molestias quae culpa numquam aliquam eum. Debitis quis eaque sapiente ratione eius iusto dolore enim! Eaque dolorem nisi optio, aliquam illo debitis recusandae molestias alias nihil. Aliquam voluptas, veniam dolore est, adipisci atque a explicabo reprehenderit optio eligendi saepe. Cupiditate minus doloremque mollitia harum unde qui quam libero dolores explicabo. Iusto perferendis officiis nostrum sit eligendi magnam, id voluptate aliquam! Nesciunt, voluptatibus maxime. Voluptas iusto, adipisci sunt sit molestiae obcaecati eligendi nam aspernatur minus aliquid quis. Consequuntur neque voluptate libero saepe consequatur labore modi deleniti sunt beatae cupiditate.</p>
        <h2 style={{...styleTitle,color:"yellow"}}>Lorem, ipsum vvddvd.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure a quo ab molestias quae culpa numquam aliquam eum. Debitis quis eaque sapiente ratione eius iusto dolore enim! Eaque dolorem nisi optio, aliquam illo debitis recusandae molestias alias nihil. Aliquam voluptas, veniam dolore est, adipisci atque a explicabo reprehenderit optio eligendi saepe. Cupiditate minus doloremque mollitia harum unde qui quam libero dolores explicabo. Iusto perferendis officiis nostrum sit eligendi magnam, id voluptate aliquam! Nesciunt, voluptatibus maxime. Voluptas iusto, adipisci sunt sit molestiae obcaecati eligendi nam aspernatur minus aliquid quis. Consequuntur neque voluptate libero saepe consequatur labore modi deleniti sunt beatae cupiditate.</p>

    </div>
  )
}

export default Style2