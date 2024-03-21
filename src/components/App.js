import React from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import { api } from "../utils/Api";
import ImagePopup from "./ImagePopup";

function App() {
  const [openPopupProfile, setOpenPopupProfile] = React.useState(false);
  const [openPopupNewPost, setOpenPopupNewPost] = React.useState(false);
  const [openPopupZoom, setOpenPopupZoom] = React.useState(false);
  const [openPopupPic, setOpenPopupPic] = React.useState(false); 
  const [openPopupErase, setOpenPopupErase] = React.useState(false); //no esta config para abrir
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});

  const handleEditAvatarClick = () => {
    setOpenPopupPic(true);
  };
  const handleEditProfileClick = () => {
    setOpenPopupProfile(true);
  };
  const handleAddPlaceClick = () => {
    setOpenPopupNewPost(true);
  };
  const handleZoomClick = (name, link) => {
    setOpenPopupZoom(true);
    setSelectedCard({
      name, link
    }); 
  }

  const closeAllPopups = () => {
    setOpenPopupErase(false);
    setOpenPopupZoom(false);
    setOpenPopupProfile(false);
    setOpenPopupNewPost(false);
    setOpenPopupPic(false);
  };

  React.useEffect(() => {
    api.getCards().then(cards => {
      setCards(cards)
    })
    api.getUserInfo().then(user => {
      setCurrentUser(user);
    })
  }, [])

  return (
    <div className="page">
      <Header />
      <Main
        handleEditPicClick={handleEditAvatarClick}
        handleEditProfileClick={handleEditProfileClick}
        handleNewPostClick={handleAddPlaceClick}
        handleZoomClick={handleZoomClick}
        cards={cards}
        user={currentUser}
      />
      <Footer />

      <PopupWithForm
        open={openPopupProfile}
        title="Editar Perfil"
        confirmation="Guardar"
        onClose={closeAllPopups}
      >
        <>
          <input
            id="popup__text"
            type="text"
            className="popup__text"
            name="name"
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
            minLength="2"
            maxLength="200"
            required
          />
          <p className="popup__error popup__job-error"></p>
        </>
      </PopupWithForm>
      <PopupWithForm
        open={openPopupNewPost}
        title="Nuevo Lugar"
        confirmation="Crear"
        onClose={closeAllPopups}
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
      <ImagePopup selectedCard={selectedCard} open={openPopupZoom} onClose={closeAllPopups}></ImagePopup>
      <PopupWithForm
        open={openPopupPic}
        title="Cambiar Imagen de Perfil"
        confirmation="Guardar"
        onClose={closeAllPopups}
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
      <PopupWithForm
        open={openPopupErase}
        title="¿Estás Seguro/a?"
        confirmation="Sí"
        onClose={closeAllPopups}
      ></PopupWithForm>
    </div>
  );
}

export default App;
