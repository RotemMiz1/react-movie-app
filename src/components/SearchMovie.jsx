import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

export default function SearchMovie() {
  const inputRef = useRef();
  const nav = useNavigate();

  const onSub = (e) => {
    e.preventDefault();
    const input_val = inputRef.current.value;
    console.log(input_val);
    nav("/?s="+input_val)
  } 

  return (
    <div className='my-3'>
      <form onSubmit={onSub} className='col-md-4 d-flex'>
        <input ref={inputRef} placeholder='search for movie name' type="search" className='form-control'/>
        <button className='btn btn-dark'>Search</button>
      </form>
    </div>
  )
}
