import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup({ open, close, handleSubmit }) {
  return (
    <PopupWithForm
      open={open}
      title="Nuevo Lugar"
      confirmation="Crear"
      onClose={close}
      handleSubmit={handleSubmit}
    >
      <input
        id="popup__title"
        type="text"
        className="popup__text"
        name="title"
        minLength="2"
        maxLength="30"
        required
      />
      <p className="popup__error popup__title-error"></p>
      <input
        id="popup__url"
        className="popup__url"
        type="url"
        name="link"
        required
      />
      <p className="popup__error popup__url-error"></p>
    </PopupWithForm>
  );
}
