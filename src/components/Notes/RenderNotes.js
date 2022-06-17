/* eslint-disable max-len */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoTrashBinSharp } from 'react-icons/io5';
import { AiFillEdit } from 'react-icons/ai';
import './RenderNotes.css';

// FUNCION PARA RENDERIZAR LA LISTA DE NOTAS
export default function RenderNotes(props) {
  const navigate = useNavigate();
  // eslint-disable-next-line react/prop-types
  const {
    id, note, title, timestamp,
  } = props.notes;
  const divStyle = {
    float: 'right',
  };

  // FUNCION PARA BORRAR NOTAS
  const handleDeleteNote = () => {
    props.sweetAlert(id);
  };

  // FUNCION PARA EDITAR NOTAS
  const handleEditNote = () => {
    navigate('/CreateNote', { state: { noteId: id, noteContent: note, noteTitle: title } });
  };

/* const getDateFormat = (dateStamp) => {
    const date = new Date(dateStamp);
    return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}   ${date.getHours()}:${date.getMinutes()}`;
}; */

  const getDateFormat2 = (dateStamp) => {
    const date = new Date(dateStamp);
    const daysWeek = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sábado'];
    const monthYear = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    return `${daysWeek[date.getDay()]} ${date.getDate()} de ${monthYear[date.getMonth()]} ${date.getHours()}:${date.getMinutes()}`;
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
        {getDateFormat2(timestamp)}
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
