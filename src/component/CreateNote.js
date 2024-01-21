import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';


const CreateNote = (props) => {

    const [expand, setExpand] = useState(false);

    const [note, setNote] = useState({
        title: '',
        content: '',
    });


    const InputEvent = (event) => {

        const value = event.target.value;
        const name = event.target.name;

        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value,
            }
        })
    }

    const addEvent = () => {
        props.passNote(note);

        setNote({
            title: '',
            content: '',
        });
    }

    const expandIt = () => {
        setExpand(true);
    }

    const backToNormal = () => {
        setExpand(false);
    }
    return (
        <>
            <div className='main_note' onDoubleClick={backToNormal}>
                <form>
                    {expand ?
                        <input type='text'
                            placeholder='Title'
                            autoComplete='off'
                            name='title'
                            value={note.title}
                            onChange={InputEvent}

                        /> : null}
                    <textarea rows=''
                        column=''
                        placeholder='Write a note...'
                        name='content'
                        value={note.content}
                        onChange={InputEvent}
                        onClick={expandIt}>
                    </textarea>

                    {expand ?
                        <Button onClick={addEvent}>
                            <AddIcon className='plus-sign' />
                        </Button>
                        : null}
                </form>
            </div>
        </>
    )
}
export default CreateNote;

// npm install @mui/material @emotion/react @emotion/styled --legacy-peer-deps
// npm install @mui/icons-material --legacy-peer-deps