import s from './Modal.module.css';

function Modal({ imageURL, closeImage }) {
  window.addEventListener('keydown', closeImage);

  return (
    <div onClick={closeImage} className={s.Overlay}>
      <div className={s.Modal}>
        <img src={imageURL} alt="" />
      </div>
    </div>
  );
}

export default Modal;
