/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoTrashBinSharp } from 'react-icons/io5';
import { AiFillEdit } from 'react-icons/ai';
import './RenderNotes.css';

// eslint-disable-next-line react/prop-types
export default function RenderNotes(props) {
  const navigate = useNavigate();
  // eslint-disable-next-line react/prop-types
  const {
    id, note, title, timestamp,
  } = props.notes;
  const divStyle = {
    float: 'right',
  };
  const handleDeleteNote = () => {
    props.sweetAlert(id);
  };

  const handleEditNote = () => {
    navigate('/CreateNote', { state: { noteid: id, noteContent: note, noteTitle: title } });
  };

  return (
    <section className="card">
      <p>
        {title}
        <AiFillEdit
          type="submit"
          onClick={handleEditNote}
          size="1.2em"
          style={divStyle}
        />
        <IoTrashBinSharp
          type="submit"
          onClick={handleDeleteNote}
          size="1.2em"
          style={divStyle}
        />
      </p>
      <p>{note}</p>
      <p>{new Date(timestamp.seconds * 1000).toLocaleString()}</p>
    </section>
  );
}
