import Image from 'next/image';
import { StringifyOptions } from 'querystring'
import React from 'react'


type ButtonProps={
    type:'button'| 'submit';
    title: string;
   icon?: string;
   variant: string;
}

const Button = ({type,variant, title,icon}:ButtonProps) => {
  return (
    
    <button className={`flexCenter gap-3 rounded-full border ${variant}`} type={type}>

    {icon && <Image src={icon} alt={title} width={24} height={24}/>}
    <label className='bold-16 whitespace-nowrap'>{title}</label>

    </button>
  )
}

export default Button