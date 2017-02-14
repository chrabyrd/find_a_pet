import React from 'react';
import Modal from 'react-modal';

class ShelterForm extends React.Component {
	constructor(props) {
		super(props);

		const shelterStringToBoolean = (this.props.createShelterForm === 'true');

		this.state = {
			createShelterForm: shelterStringToBoolean,
		};

		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.cloudinate = this.cloudinate.bind(this);
	}

	componentWillReceiveProps (newProps) {
		if (!newProps.errors) {
			this.setState({
				modalIsOpen: false
			});
		}
	}

	inputFieldLogic () {
		if (this.props.createShelterForm) {
			this.setState({
				shelter_name: "",
				email: "",
				address: "",
				phone_number: "",
				user_id: "",
				shelter_image: "",
				modalIsOpen: true
			});
		} else {
			this.setState({
				shelter_name: this.props.shelterDetails.shelter_name,
				email: this.props.shelterDetails.email,
				address: this.props.shelterDetails.address,
				phone_number: this.props.shelterDetails.phone_number,
				user_id: this.props.shelterDetails.user_id || 'http://res.cloudinary.com/du9y1z3ol/image/upload/v1484638109/site-logo.png',
				shelter_image: this.props.shelterDetails.shelter_image,
				modalIsOpen: true
			});
		}
	}

	openModal() {
		this.inputFieldLogic();
		this.props.clearShelterErrors();
	}

	closeModal() {
		this.setState({modalIsOpen: false});
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	cloudinate(e) {
		e.preventDefault();
		cloudinary.openUploadWidget(
			window.cloudinary_options,
			(errors, imageInfo) => {
				if (errors === null) {
					let cloud_url = imageInfo[0].url;
					this.setState({
						shelter_image: cloud_url
					});
				}
			}
		);
	}

	shelterActions() {
		return (
				this.state.createShelterForm ? <button className="shelter-button" onClick={this.openModal}>
					+ Create a New Shelter</button> : <button className="update-shelter-button" onClick={this.openModal}>
						Update Shelter</button>
		);
	}

	handleSubmit(e) {
		e.preventDefault();
		if (this.state.createShelterForm) {
			const shelter = {
				shelter_name: this.state.shelter_name,
				email: this.state.email,
				address: this.state.address,
				phone_number: this.state.phone_number,
				description: this.state.description,
				shelter_image: this.state.shelter_image,
				user_id: this.props.userDetails.id,
			};
			this.props.createShelter(shelter);
		} else {
			const shelter = {
				shelter_name: this.state.shelter_name,
				email: this.state.email,
				address: this.state.address,
				phone_number: this.state.phone_number,
				description: this.state.description,
				shelter_image: this.state.shelter_image,
				id: this.props.shelterDetails.id,
			};
			this.props.updateShelter(shelter);
		}
	}

	renderErrors() {
		if (this.props.errors) {
			return(
				<ul className="user-auth-errors">
					{this.props.errors.map((error, i) => (
						<li key={`error-${i}`}>
							{error}
						</li>
					))}
				</ul>
			);
		}
	}

	render() {
		return (
			<div className="shelter-form-container">

				{this.shelterActions()}

				<Modal
					className="shelter-modal"
					overlayClassName="auth-overlay"
					isOpen={this.state.modalIsOpen}
					onAfterOpen={this.afterOpenModal}
					onRequestClose={this.closeModal}
					contentLabel="shelterModal"
				>
					<form onSubmit={this.handleSubmit}>

						<div className="user-auth-title">
							{this.state.createShelterForm ? <div className="shelter-index-title">Create Shelter</div> :
								<div className="shelter-index-title">Update Shelter</div>}
						</div>

						<div className="shelter-form">
							<div className="shelter-form-left">
								<div className="user-auth-fields">
									<input type="text"
										value={this.state.shelter_name}
										style={{width: '100%', margin: '30px', borderBottom: '2px solid #3c2f2f'}}
										placeholder={"Name"}
										onChange={this.update("shelter_name")} />
								</div>

								<div className="user-auth-fields">
									<input type="text"
										value={this.state.email}
										style={{width: '100%', margin: '30px', borderBottom: '2px solid #3c2f2f'}}
										placeholder={"Email"}
										onChange={this.update("email")} />
								</div>
							</div>

							<div className="shelter-form-right">
								<div className="user-auth-fields">
									<input type="text"
										value={this.state.address}
										style={{width: '100%', margin: '30px', borderBottom: '2px solid #3c2f2f'}}
										placeholder={"Address"}
										onChange={this.update("address")} />
								</div>

								<div className="user-auth-fields">
									<input type="text"
										value={this.state.phone_number}
										style={{width: '100%', margin: '30px', borderBottom: '2px solid #3c2f2f'}}
										placeholder={"Phone Number"}
										onChange={this.update("phone_number")} />
								</div>
							</div>
						</div>

						{this.renderErrors()}
						<button className="image-button" onClick={this.cloudinate}>Add Image</button>

						<div className="submit-button-container">
							<input className="submit-button" type="submit" value="Submit" autoFocus/>
						</div>

					</form>
				</Modal>
			</div>
		);
	}

}

export default ShelterForm;
