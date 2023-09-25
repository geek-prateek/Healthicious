import React from 'react'

const Card = (props) => {
  return (
    <>
    
    <div class="card" style={{width: "18rem", margin: "50px",}}>
            <img src={props.src} class="card-img-top" alt={props.title}/>
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">Ready in {props.desc} minutes</p>
                <a href="/" class="btn btn-primary" style={{padding: "10px"}}>Give it a try !</a>
            </div>
            </div>
          
    </>
  )
}

export default Card