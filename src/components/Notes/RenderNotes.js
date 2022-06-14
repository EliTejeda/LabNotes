/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoTrashBinSharp } from 'react-icons/io5';
import { AiFillEdit } from 'react-icons/ai';
import './RenderNotes.css';

// cajita : toda la notita
// cajita 1: título
// c 2 : texto
// c 3 tenemos iconos
// c 4 tenemos timestamp

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
        <AiFillEdit
          type="submit"
          onClick={handleEditNote}
          size="1.2em"
          style={divStyle}
        />
      </p>
      <p>{title}</p>
      <p>{note}</p>
      <p className="noteDate">
        {new Date(timestamp.seconds * 1000).toLocaleString()}
      </p>
      <IoTrashBinSharp
        type="submit"
        onClick={handleDeleteNote}
        size="1.2em"
        style={divStyle}
      />
    </section>
  );
}
