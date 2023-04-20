import React from 'react'
import Form from './Form'
import GridComponent from './GridComponent'


function Grid() {
  return (
    <div  className="mt-3" style={{display: "grid",gridTemplateColumns: "1fr 3fr",gridGap: "20px"}}>
          
        <Form/>
        <GridComponent/>
        
    </div>
  )
}

export default Grid