import React, { useState } from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import CreateNote from './component/CreateNote';
import Note from './component/Note';

const App = () => {

  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    // alert("clicked");
    setAddItem((prevData) => {
      return [...prevData, note];
    }
    );

    console.log(note);
  }

  const onDelete = (id) => {

    setAddItem((oldData) => {
      return oldData.filter((curData, index) => 
      {
        return index !== id;
      })
  })
  }
  
  return (
    <>
      <Header />
      <CreateNote
        passNote={addNote}
      />
      
      {

        addItem.map((val, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={val.title}
              content={val.content}

              deleteItem={onDelete}
            />
          );
        })
      }
      <Footer />

    </>
  );
}

export default App;