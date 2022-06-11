import React from 'react';
import { IoExitSharp, IoPencil, IoTrashBinSharp } from 'react-icons/io5';
import './RenderNotes.css';

// eslint-disable-next-line react/prop-types
export default function RenderNotes({ props }) {
  // eslint-disable-next-line react/prop-types
  const { id, note } = props;
  const divStyle = {
    float: 'right',
  };
  const handleLogOut = () => {};

  return (
    <section className="card">
      <p>
        {id}
        <IoExitSharp
          type="submit"
          onClick={handleLogOut}
          size="1.2em"
          style={divStyle}
        />
        <IoPencil
          type="submit"
          onClick={handleLogOut}
          size="1.2em"
          style={divStyle}
        />
        <IoTrashBinSharp
          type="submit"
          onClick={handleLogOut}
          size="1.2em"
          style={divStyle}
        />
      </p>
      <p>00/00/0000</p>
      <p>{note}</p>
    </section>
  );
}
