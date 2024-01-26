import { GrSend } from "react-icons/gr";
import Button from "../Button/Button";
import './input-note-style.css';

type InputNoteProps = {
  text: string,
  setText: (text: string) => void,
  addNote: () => void
}

const InputNote: React.FC<InputNoteProps> = ({ text, setText, addNote }) => {
  return (
    <div className="input">
      <h3 className="input__itle">New Note</h3>
      <label>
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
        >
        </textarea>
        <Button handler={addNote}>
          <GrSend />
        </Button>
      </label>
    </div>
  )
}

export default InputNote