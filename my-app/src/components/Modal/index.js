import "./Modal.css";
import Button from "../Button";

const Modal = (props) => {
  const classes = `modal ${props.className}`;
  return (
    <div className={classes}>
      <h2>Would you really like to remove this member: {props.id} ?</h2>
      <div className="modal-buttons">
        <Button func={props.funcDelete}>Yes</Button>
        <Button func={props.funcExit}>No</Button>
      </div>
    </div>
  );
};

export default Modal;