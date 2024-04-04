import PopupWithForm from "./PopupWithForm"

export default function EditAvatarPopup({open, close, handleSubmit}){
    return (
        <PopupWithForm
        open={open}
        title="Cambiar Imagen de Perfil"
        confirmation="Guardar"
        onClose={close}
        handleSubmit={handleSubmit}
      >
        <input
          id="popup__url-pic"
          className="popup__url-pic"
          type="url"
          name="pic"
          required
        />
        <p className="popup__error popup__url-pic-error"></p>
      </PopupWithForm>
    )
}