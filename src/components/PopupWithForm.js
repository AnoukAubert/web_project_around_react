import React from "react";
import Popup from "./Popup";
import FormValidator from "./FormValidator";

export default function PopupWithForm({
  children,
  open,
  title,
  confirmation = "Guardar",
  onClose,
  handleSubmit,
  activeSubmit=false
}) {
  const formRef = React.useRef();
  const [buttonContent, setButtonContent] = React.useState(confirmation);
  const getInputValues = () => {
    const inputValues = {};
    const inputList = Array.from(formRef.current.querySelectorAll("input"));
    inputList.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  };
  const handlePrepareSubmit = (evt) => {
    evt.preventDefault();
    setButtonContent("Guardando...");
    handleSubmit(getInputValues()).finally(() => {
      setButtonContent(confirmation);
    });
  };

  React.useEffect(() => {
    const formValidatorProfile = new FormValidator(formRef.current, {
      inputSelector: "input",
      submitClass: ".popup__create-btn",
      submitDisabledClass: "create-btn-disabled",
      textSelector: "text_error-enable",
      inputErrorClass: "popup__input_type_error",
    });
    formValidatorProfile.enableValidation();
  });

  return (
    <>
      <Popup open={open}>
        <div className="popup__container">
          <button className="popup__close-btn" onClick={onClose}></button>
          <h3 className="popup__title">{title}</h3>
          <form
            ref={formRef}
            onSubmit={handlePrepareSubmit}
            className="popup__form"
            noValidate
          >
            {children}
            <button
              className={`popup__create-btn ${!activeSubmit ? 'create-btn-disabled' : ''}`}
              type="submit"
            >
              {buttonContent}
            </button>
          </form>
        </div>
      </Popup>
    </>
  );
}
