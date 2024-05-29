import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError();
    const styles ={
        width:"100vw",
        height:"100vh",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    }
  return (
    <div style={styles}>
        <div className='text-8xl font-bold'>{error.status}</div>
        <div className='text-3xl'>{error.statusText}</div>
    </div>
  )
}

export default Error