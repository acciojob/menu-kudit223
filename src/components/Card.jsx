import React from "react";

function Card({image,name,price,description,dataTestId}){
    return(<div data-test-id={dataTestId} style={{
        display:'flex',
        width:'400px',
        backgroundColor:'white',
        borderRadius:'10px',
        margin:'10px',

    }}>
        <img src={image} alt="breakfast" width='150px' style={{borderTopLeftRadius:'10px',borderBottomLeftRadius:'10px'}}/>
        <div style={{padding:'10px'}}>
            <div style={{
                display:'flex',
                justifyContent:'space-between'
            }}>
                <h3>{name}</h3>
                <span>{Math.floor(price*10)}rs</span>
            </div>
            <hr />
            <p style={{marginTop:'5px'}}>{description}</p>
        </div>
    </div>)
}


export default Card;