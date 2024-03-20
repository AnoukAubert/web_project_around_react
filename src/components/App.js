import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main'
import Footer from './Footer';
import Popup from './Popup';
import PopupWithForm from './PopupWithForm';

function App() {

  const [openPopupProfile, setOpenPopupProfile] = React.useState(false);
  const [openPopupNewPost, setOpenPopupNewPost] = React.useState(false);
  const [openPopupZoom, setOpenPopupZoom] = React.useState(false);
  const [openPopupPic, setOpenPopupPic] = React.useState(false);
  const [openPopupErase, setOpenPopupErase] = React.useState(false);

  const handleEditAvatarClick = () => {
    setOpenPopupPic(true)
  };
  const handleEditProfileClick = () => {
    setOpenPopupProfile(true)
  };
  const handleAddPlaceClick = () => {
    setOpenPopupNewPost(true)
  };

  return (
    <div className="page">
      <Header />
      <Main 
      handleEditAvatarClick={handleEditAvatarClick}
      handleEditProfileClick={handleEditProfileClick}
      handleAddPlaceClick={handleAddPlaceClick}
      />
      <Footer />
      
      <PopupWithForm open={up} title="Editar Perfil" /*onClose={() = > {setOpenPopupProfile=(false)}}*/>
        <>
              <input
              id="popup__text"
              type="text"
              className="popup__text"
              name="name"
              minLenght="2"
              maxLenght="40"
              required
            />
            <p className="popup__error popup__text-error"></p>
            <input
              id="popup__job"
              type="text"
              className="popup__about-me"
              name="about"
              minLenght="2"
              maxLenght="200"
              required
            />
            <p className="popup__error popup__job-error"></p>
        </>
      </PopupWithForm>
      {/* <Popup>
        <button className="popup__close-btn"></button>
        <div className="popup__container">
          <h3 className="popup__title">Nuevo lugar</h3>
          <form className="popup__form">
            <input
              id="popup__title"
              type="text"
              className="popup__text"
              name="title"
              minLenght="2"
              maxLenght="30"
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
            <button className="popup__create-btn create-btn-disabled" type="submit">
              Crear
            </button>
          </form>
        </div>
      </Popup>
      <Popup>
        <button className="popup__close-btn popup__close-btn-zoom"></button>
        <img className="popup__image" src=" " alt=" " />
        <h3 className="popup__image-title"></h3>
      </Popup>
      <Popup>
        <button className="popup__close-btn"></button>
        <div className="popup__container">
          <h3 className="popup__title">Cambiar Imagen de Perfil</h3>
          <form className="popup__form" novalidate>
            <input
              id="popup__url-pic"
              className="popup__url-pic"
              type="url"
              name="pic"
              required
            />
            <p className="popup__error popup__url-pic-error"></p>
            <button className="popup__create-btn create-btn-disabled" type="submit">
              Guardar
            </button>
          </form>
        </div>
      </Popup>
      <Popup>
        <button className="popup__close-btn"></button>
        <div className="popup__container">
          <h3 className="popup__title">¿Estás seguro/a?</h3>
          <button className="popup__create-btn popup__yes-btn" type="submit">
            Sí
          </button>
        </div>
  </Popup>*/}
    </div> 
  );
}

export default App;
