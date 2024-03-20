import React from "react";
import avatar from "../images/Avatar.png";

export default function (handleEditAvatarClick,handleEditProfileClick,handleAddPlaceClick) {
  return (
    <div>
      <main className="content">
        <section className="profile">
          <div>
            <img
              className="profile__image"
              src={avatar}
              alt="imagen de perfil"
            />
            <button className="profile__image-btn" onClick={handleEditAvatarClick}></button>
          </div>
          <div className="profile__container">
            <div className="profile__container-b">
              <h1 className="profile__name">Jacques Cousteau</h1>
              <button className="profile__edit-btn" onClick={handleEditProfileClick}></button>
            </div>
            <h4 className="profile__description">Explorador</h4>
          </div>
          <button className="profile__add-btn" onClick={handleAddPlaceClick}>+</button>
        </section>
        <section className="update"></section>
      </main>
    </div>
  );
}