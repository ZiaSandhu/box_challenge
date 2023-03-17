// import { prefix } from '@fortawesome/free-regular-svg-icons'
import React, { useState } from 'react'
import BoxDiv from './Box'

import Data from './Data'
export default function Boxes() {
    const [data,setData] = useState(Data)
    
    function toggle(id){
        // setData(prev => {
        //     const newData = [];
        //     for(let i=0;i<prev.length;i++){
        //         let currentBox=prev[i]
        //         if(currentBox.id === id){
        //             const updateSquare = {
        //                 ...currentBox,
        //                 on : !currentBox.on
        //             }
        //             newData.push(updateSquare);
        //         }
        //         else{
        //             newData.push(currentBox);
        //         }
        //     }
        //     return newData
        // })
        // console.log(data)
        //same working of above code
        setData(prev => {
            return prev.map((square)=>{
                return square.id === id ? { ...square,on:!square.on } : square
            })
        })
    }
    
    const Box = data.map(index =>( 
        // <BoxComp key={index.id} id={index.id} color={index.on} toglefunc={toggle} />
        <BoxDiv key={index.id} color={index.on} toglefunc={()=>toggle(index.id)}/>
   ))
    return (
    <div>
        {Box}
    </div>
  )
}
