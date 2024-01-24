import cardImage from "./assets/profilePic.jpg";

function Card() {
  return (
    <div className="card">
      <img className="card-img" src={cardImage} alt="card-image" />
      <h2 className="card-title">Dev Bro</h2>
      <p className="card-text">
        I`m web developer and i stdying react at Astrum IT Academy
      </p>
    </div>
  );
}

export default Card;
