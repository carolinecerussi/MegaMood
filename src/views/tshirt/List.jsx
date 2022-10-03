import React, { lazy, Component } from "react";
import { data } from "../../data";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faTh, faBars } from "@fortawesome/free-solid-svg-icons";
// const Paging = lazy(() => import("../../components/Paging"));
// const Breadcrumb = lazy(() => import("../../components/Breadcrumb"));
// const FilterArtist = lazy(() => import("../../components/filter/Artist"));
// const FilterSize = lazy(() => import("../../components/filter/Size"));
// const FilterColor = lazy(() => import("../../components/filter/Color"));
// const FilterClear = lazy(() => import("../../components/filter/Clear"));
// const CardServices = lazy(() => import("../../components/card/CardServices"));
const CardTShirtGrid = lazy(() =>
  import("../../components/card/CardTShirtGrid")
);
const CardTShirtList = lazy(() =>
  import("../../components/card/CardTShirtList")
);


class TShirtListView extends Component {
	state = {
		currentTShirts:[],
		currentPage: null,
		totalPages: null,
		totalItems: 0,
		view: "list",
	}

	UNSAFE_compoundWillMount() {
		const totalItems = this.getTShirts().length;
		this.setState({totalItems});
	}
onPageChanged = (page) => {
	let tShirts = this.getTshirts();
	const { currentPage, totalPages, pageLimit } = page;
	const offset = ( currentPage -1 ) * pageLimit;
	const currentTShirts = tShirts.slic(offset, offset + pageLimit );
	this.setState({ currentPage, currentTShirts, totalPages})
};

OnChangeView = (view) => {
	this.setState(view);
}


getTShirts = () => {
	let tShirts = data.tShirts;
	tShirts = tShirts.concat(tShirts);
	tShirts = tShirts.concat(tShirts);
	tShirts = tShirts.concat(tShirts);
	tShirts = tShirts.concat(tShirts);
	tShirts = tShirts.concat(tShirts);
	tShirts = tShirts.concat(tShirts);
	tShirts = tShirts.concat(tShirts);
	return tShirts;
}


render() {
	return (
		<React.Fragment>
			<div
				className="p-5 bg-primary bs-cover"
				style={{
					backgroundImage: "url(../../images/banner/50-Banner.webp)",
				}}	
			>
				<div className="container text-center">
					<span className="display-5 px-3 bg-white rounded shadow">
						T-Shirts
					</span>
				</div>
			</div>
			<Breadcrumb />
			<div className="container-fluid mb-3">
				<div className="row">
					<div className="col-md-3">
						<FilterArtist />
						<FilterPrice />
						<FilterSize />
						<FilterColor />
						<FilterClear />
						<CardServices />
					</div>
					<div className="col-md-9">
						<div className="row">
							<div className="col-7">
								<span className="align-middle fw-bold">
									{this.state.totalItems} results for{" "}
									<span className="text-warning">"t-shirts"</span>
								</span>
							</div>
							<div className="col-5 d-flex justify-content-end">
								<select
									className="form-select mw-180 float-start"
									aria-label="Default select"
								>
									<option value={2}>Latest items</option>
				
									<option value={4}>Price low to high</option>
									<option value={4}>Price high to low</option>
								</select>
								<div className="btn-group ms-3" role="group">
									<button
										aria-label="Grid"
										type="button"
										onClick={() => this.onChangeView("grid")}
										className={`btn ${
											this.state.view === "grid"
												? "btn-primary"
												: "btn-outline-primary"
										}`}
									>
										<FontAwesomeIcon icon={faTh} />
									</button>
									<button
										aria-label="List"
										type="button"
										onClick={() => this.onChangeView("list")}
										className={`btn ${
											this.state.view === "list"
												? "btn-primary"
												: "btn-outline-primary"
										}`}
									>
										{/* <FontAwesomeIcon icon={faBars} /> */}
									</button>
								</div>
							</div>
						</div>
						<hr />
						<div className="row g-3">
							{this.state.view === "grid" &&
								this.state.currentTShirts.map((tShirt, idx) => {
									return (
										<div key={idx} className="col-md-4">
											<CardTShirtGrid data={tShirt} />
										</div>
									);
								})}
							{this.state.view === "list" &&
								this.state.currentTShirts.map((tShirt, idx) => {
									return (
										<div key={idx} className="col-md-12">
											<CardTShirtList data={tShirt} />
										</div>
									);
								})}
						</div>
						<hr />
						<Paging
							totalRecords={this.state.totalItems}
							pageLimit={9}
							pageNeighbours={3}
							onPageChanged={this.onPageChanged}
							sizing=""
							alignment="justify-content-center"
						/>
						</div>
				</div>
			</div>
		</React.Fragment>)
}
			
export default TShirtListView;
