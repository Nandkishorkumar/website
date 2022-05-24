import React from 'react'

export default function Line(prop) {
    let len=prop.len
    console.log(len)
    return (
        <div style={{width:`${len}px`, height:"1px", border:"1px solid #E0E0E0", }} >
            
        </div>
    )
}
