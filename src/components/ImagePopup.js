import Popup from "./Popup";

export default function ImagePopup({ open, onClose, selectedCard }) {
  return (
    <>
      <Popup open={open}>
        <>
          <button
            onClick={onClose}
            className="popup__close-btn popup__close-btn-zoom"
          ></button>
          <img
            className="popup__image"
            src={selectedCard.link}
            alt={selectedCard.name}
          />
          <h3 className="popup__image-title">{selectedCard.name}</h3>
        </>
      </Popup>
    </>
  );
}
