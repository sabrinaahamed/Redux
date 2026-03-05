import React, { use } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './slices/counterSlice'

const App = () => {
  let dispatch = useDispatch()
  let data=useSelector((state)=>state.counter.value)  
  return (
    <div className='h-screen w-screen flex flex-col items-center justify-center gap-5'>
      <h1 className='text-2xl'>Counter {data}</h1>
      <button onClick={()=> dispatch(increment(1))} className='px-[20px] py-[10px] bg-black text-white rounded-2xl'>Increment</button>
  
    </div>
  )
}

export default App