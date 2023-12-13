import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
const Card = () => {
  return (
    <div className="w-60 h-72 rounded-[20px] bg-zinc-900/90 p-5 text-white">
      <FaRegFileAlt /> 
      <p className="text-sm mt-5 font-semibold leading-tight">Contrary to popular belief, Lorem Ipsum is not simply random text. </p> 
   

    </div>
  )
}

export default Card