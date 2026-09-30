import React, { useState } from 'react'

function Createnote(props){
    const[newTitle, setNewTitle] = useState("");
    const[newContent, setNewContent] = useState("");

    const submitNote = (e) =>{
        e.preventDefault();

        const  newValue = {
            key: Math.random()*10,
            title: newTitle,
            content: newContent
        }
        props.newNoteValue(newValue);
        setNewTitle("");
        setNewContent("");
    }
    return(
        <>
           <form onSubmit={submitNote} className='bg-white shadow-lg rounded-xl p-4 w-[90%] md:w-[400px] mx-auto mt-6'>
               <input type="text" value={newTitle} onChange={e => setNewTitle(e.target.value) } placeholder=' title' className='w-full border-b outline-none p-2 text-lg'/>
               <textarea value={newContent} onChange={e => setNewContent(e.target.value) } placeholder=' Content' className='w-full mt-3 outline-none resize-none'> 
               </textarea>
               <input type="submit" value="Add" className='bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-full shadow float-right' />
           </form>
        </>
    )
}

export default Createnote