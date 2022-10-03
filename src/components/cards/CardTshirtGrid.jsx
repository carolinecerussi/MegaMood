import React from "react";
import { Link } from "react-router-dom";

const CardTShirtGrid = (props) => {
	const tShirt = props.data;
	return (
		<div className="card">
		<img src={tShirt.img} className="card-img-top" alt="..." />
		{tShirt.isNew && (
			<span className="badge bg-success position-absolute mt-2 ms-2">
				New
			</span>
		)}
<div className="card-body">
<h6 className="card-subtitle mb-2">
	<Link to={tShirt.link} className="text-decoration-none">
		{tShirt.name}
	</Link>
</h6>
<div className="my-2">
	<span className="fw-bold h5">${tShirt.price}</span>
	{tShirt.originPrice > 0 && (
		<del className="small text-muted ms-2">${tShirt.originPrice}</del>
	)}
</div>
<div className="btn-group  d-flex" role="group">
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
);
};

export default CardTShirtGrid;