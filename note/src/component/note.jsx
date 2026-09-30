import React from 'react'

function Note(props){
    function deleteClick(){
        props.deleteNote(props.id);
    }
    return(
        <>
          <div className='bg-white shadow-md rounded-xl p-4 w-[250px] m-4'>
          <h1 className='font-bold text-lg mb-2'> {props.title}</h1>
          <p className='text-gray-700'> {props.content}</p>
          <button onClick={deleteClick} className='text-red-500 text-sm mt-3 hover:text-red-700'>Delete</button>
          </div>
        </>
    )
}

export default Note