import React from "react";
import { Link } from "react-router-dom";
// import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";

const CardFeaturedTShirt = (props) => {
  const tShirts = props.data;
  return (
    <div className="card mb-3">
      <div className="card-header fw-bold text-uppercase">
        Featured Shirts
      </div>
      <div className="card-body">
        {tShirts.map((tShirt, idx) => (
          <div
            className={`row ${idx + 1 === tShirts.length ? "" : "mb-3"}`}
            key={idx}
          >
            <div className="col-md-4">
              <img src={tShirt.img} className="img-fluid" alt="..." />
            </div>
            <div className="col-md-8">
              <h6 className="text-capitalize mb-1">
                <Link to={tShirt.link} className="text-decoration-none">
                  {tShirt.artist}
                </Link>
              </h6>
    
              <span className="fw-bold h5">${tShirt.price}</span>
              {tShirt.originPrice > 0 && (
                <del className="small text-muted ms-2">
                  ${tShirt.originPrice}
                </del>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardFeaturedTShirt;