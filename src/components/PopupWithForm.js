import Popup from "./Popup";

export default function PopupWithForm ({children, open, title, confirmation, onClose}) {
    return (
        <>
        <Popup open={open}>
          <div className="popup__container">
            <button className="popup__close-btn" onClick={onClose}></button>
            <h3 className="popup__title">{title}</h3>
            <form className="popup__form" noValidate>
            {children}
            <button className="popup__create-btn create-btn-disabled" type="submit">{confirmation}</button>
          </form>
        </div>
        </Popup>
        </>
    )
}