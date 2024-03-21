export default function Card({name, link, likes, handleClick}) {
  return (
    <>
      <div className="update__card">
        <img onClick={() => {
            handleClick(name, link)
        }} className="update__image" src={link} alt={name} />
        <button className="update__delete-btn"></button>
        <div className="update__description">
          <h2 className="update__title">{name}</h2>
          <div className="update__like-container">
            <button className="update__like-btn"></button>
            <p className="update__counter">{likes.length}</p>
          </div>
        </div>
      </div>
    </>
  );
}
