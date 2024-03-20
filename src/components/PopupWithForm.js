import Popup from "./Popup";

export default function PopupWithForm ({children, open, title, onClose}) {
    return (
        <>
        <Popup open={open}>
        <button className="popup__close-btn" onClick={onClose}></button>
        <div className="popup__container">
          <h3 className="popup__title">{title}</h3>
          <form className="popup__form" novalidate>
            {children}
            <button className="popup__create-btn create-btn-disabled" type="submit">Guardar</button>
          </form>
        </div>
        </Popup>
        </>
    )
}