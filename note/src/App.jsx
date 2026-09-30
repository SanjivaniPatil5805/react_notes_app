import { useState } from 'react'
import Header from './component/header'
import Note from './component/note'
import Footer  from './component/footer'
import notes from './component/notes'
import Createnote from './component/Createnote'

function App() {
  const [newNote, setNewNote] = useState(notes);
  
  function newNoteValue(newValue){
      setNewNote([...newNote, newValue]);
  }

  function deleteNote(id){
       setNewNote((prevNote)=>{
               return prevNote.filter((noteItem, index)=>{
                return index !== id;
           })
       })
  }
  return (
    <>

     <Header/>
     <Createnote newNoteValue = {newNoteValue}/>
      <div className='flex flex-wrap justify-center mt-6'>
        {
            newNote.map((note, index)=>{
            return(
            <Note deleteNote={deleteNote} title={note.title} content={note.content} id={index}/>
        )   
      })
     }
      </div>
     <Footer/>
    
    </>
  )
}

export default App
