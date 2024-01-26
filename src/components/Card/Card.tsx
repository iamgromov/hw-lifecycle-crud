import Note from "../../interfaces/Note";
import { AiOutlineCloseCircle } from '../Icons';
import Button from "../Button/Button";
import './card-style.css';


type CardProps = {
  note: Note,
  handler: (id: number) => void
}

const Card: React.FC<CardProps> = ({ note, handler }) => {
  return (
    <div className="card">
      <pre className="card__content">{note.content}</pre>
      <Button
        className="card__close"
        handler={() => handler(note.id)}
      >
        <AiOutlineCloseCircle />
      </Button>
    </div>
  )
}

export default Card