"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [maintask, setmaintask] = useState([])
  const submitHandler= (e)=>{
    e.preventDefault()
    setmaintask([...maintask,{title,desc}]);
    
    settitle('')
    setdesc('')
    console.log(maintask)
  }
  const deleteHandler =(i)=>{
    let copytask =[...maintask]
    copytask.splice(i,1)
    setmaintask(copytask)

  }
  let rendertask =<h2> No task available</h2>
  if (maintask.length>0){
  rendertask=maintask.map((t,i)=>{
    return(
      <li key={i} className='flex items-center justify-between mb-10'>
       <div className='flex justify-between w-2/3'>
      <h5 className='text-2xl font-semibold'>{t.title}</h5>
      <h6 className='text-lg font-semibold' bg-neutral-800>{t.desc}</h6>
    </div>
    <button onClick={()=>{deleteHandler(i)}} className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button></li>
    )
  })}
  return (
   
    <>
    
    <div className=' w-2/3  bor border-2 border-slate-900  m-32 ml-44 bg-green-400'>
    <h1 className='bg-orange-500 text-white  text-bold text-center p-5 text-3xl'>My Todo-list</h1>
    <form onSubmit={submitHandler} >
    <input
    type='text'
    className='text-2xl border-green-600 border-4 m-5 px-4 py-2'
    placeholder='Enter task here'   
    value={title}
    onChange={(e)=>{
      settitle(e.target.value)
    }}
    /> 
    <input
    type='text'
    className='text-2xl border-green-600 border-4 m-5 px-4 py-2'
    placeholder='Enter Description here'   
    value={desc}
    onChange={(e)=>{
      setdesc(e.target.value)
    }}
    /> 
    <button className='bg-sky-700  text-white px-4 py-4 rounded-md text-2xl'>
    
    Add Task
    </button> 
    </form>
    <hr/>
    <div className='p-8 bg-slate-200'>
      <ul>
        {rendertask}
      </ul>

    </div>
    </div>
    </>
  )
}

export default page