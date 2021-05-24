import React,{useState} from 'react'
import './Search.css'
const Search = ({getQuery}) => {
  const [text,setText]=useState('')
    const onChange =(q)=>{
      setText(q)
      getQuery(q)


    }
    return (
        <section className='search'>
      <form>
       
        <input type="text" className='form-control' value={text} placeholder='Search characters' onChange={(e)=>onChange(e.target.value)} />
      </form>
    </section>
        
    )
}

export default Search
