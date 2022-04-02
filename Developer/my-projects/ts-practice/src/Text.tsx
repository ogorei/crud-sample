import React from 'react'
import {useState, useEffect} from 'react'

interface Props {
    text: string;
    ok?: boolean;
    fn?:(bob:string)=> void
    object?:{
      firstName:string
    }
}

export const Text:React.FC<Props> = ()=> {
  const [number, setNumber]= useState<number>(4)
  
  return (
    <div>
      <input />
    </div>
  )
}