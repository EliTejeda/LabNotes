/* eslint-disable no-unused-vars */
import { MdDeleteForever } from 'react-icons/md';
import {
  IoExitSharp, IoAddCircleSharp, IoPencil, IoTrashBinSharp,
} from 'react-icons/io5';

// eslint-disable-next-line react/prop-types
export default function NoteOne({ props }) {
  // eslint-disable-next-line react/prop-types
  const { title, date, text } = props;
  const editNotes = () => {

  };

  return (
    <div>
      <hr />
      {title}
      <IoPencil type="submit" onClick={editNotes} size="1em" />
      <IoTrashBinSharp type="submit" onClick={editNotes} size="1em" />

      <br />
      {date}
      <br />
      {text}
    </div>
  );
}
