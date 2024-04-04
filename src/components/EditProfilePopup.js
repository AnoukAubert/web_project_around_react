import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function EditProfilePopup({open, close, handleSubmit}) { 
  const currentUser = React.useContext(CurrentUserContext);
    return (
        <PopupWithForm
        open={open}
        title="Editar Perfil"
        onClose={close}
        handleSubmit={handleSubmit}
      >
        <>
          <input
            id="popup__text"
            type="text"
            className="popup__text"
            name="name"
            defaultValue={currentUser.name}
            minLength="2"
            maxLength="40"
            required
          />
          <p className="popup__error popup__text-error"></p>
          <input
            id="popup__job"
            type="text"
            className="popup__about-me"
            name="about"
            defaultValue={currentUser.about}
            minLength="2"
            maxLength="200"
            required
          />
          <p className="popup__error popup__job-error"></p>
        </>
      </PopupWithForm>
    )
}