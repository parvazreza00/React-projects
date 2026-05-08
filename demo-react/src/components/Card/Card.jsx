import React from "react";
// import cardImage from "./../../../public/card-image.jpg";

const Card = ({ item, index }) => {
  const { cardTitle, cardSubtile, cardDes, cardImage, address, phones } = item;
  console.log(item);
  const date = new Date();
  return (
    <div>
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">
            {cardTitle}-{index + 1}
          </h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            {cardSubtile}
          </h6>

          <p className="card-text">{cardDes}</p>

          <div className="text-center">
            <img src={cardImage} alt="" className="img-thumbnail" />
          </div>
          <small className="fw-bold">{date.toLocaleDateString()}</small>

          <div>
            <small className="d-block">Street: {address.street}</small>
            <small className="d-block">Home: {address.home}</small>
          </div>
          <hr />

          {phones.map((phone, index) => (
            <div className="d-inline-block me-3" key={index}>
              {phone.home && (
                <span>
                  <strong>Home:</strong> {phone.home}
                </span>
              )}
              {phone.office && (
                <span>
                  <strong>Office:</strong> {phone.office}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
