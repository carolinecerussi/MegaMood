
import React from "react";
import { Link } from "react-router-dom";

const CardTShirtList = (props) => {
	const tShirt = props.data;
	return (
		<div className="card">
			<div className="row g-0">
				<div className="col-md-3 text-center">
					<img src={tShirt.image} className="img-fluid" alt="..." />
				</div>
				<div className="col-md-6">
					<div className="card-body">
					<h6 className="card-subtitle me-2 d-inline">
              <Link to={tShirt.link} className="text-decoration-none">
                {tShirt.name}
              </Link>
            </h6>
            {tShirt.isNew && (
              <span className="badge bg-success me-2">New</span>
            )}
            {tShirt.description &&
              tShirt.description.includes("|") === false && (
                <p className="small mt-2">{tShirt.description}</p>
              )}
            {tShirt.description && tShirt.description.includes("|") && (
              <ul className="mt-2">
                {tShirt.description.split("|").map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="col-md-3">
          <div className="card-body">
          <div className="mb-2">
            <span className="fw-bold h5">${tShirt.price}</span>
            {tShirt.originPrice > 0 && (
              <del className="small text-muted ms-2">
                ${tShirt.originPrice}
              </del>
            )}
          <div className="btn-group d-flex" role="group">
            <button
              type="button"
              className="btn btn-sm btn-primary"
              title="Add to cart"
            >
            </button>
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
              title="Add to wishlist"
            >
            </button>
          </div>
					</div>
				</div>
			</div>
		</div>
		</div>
	)
}

export default CardTShirtList;