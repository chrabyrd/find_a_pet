import React from 'react';
import Modal from 'react-modal';

class ShelterForm extends React.Component {
	constructor(props) {
		super(props);

		const shelterStringToBoolean = (this.props.createShelterForm === 'true');

		this.state = {
			shelter_name: "",
			email: "",
			address: "",
			phone_number: "",
			user_id: "",
			createShelterForm: shelterStringToBoolean,
			modalIsOpen: false
		};

		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillReceiveProps(newProps) {

		const shelterStringToBoolean = (this.props.createShelterForm === 'true');

		this.setState({
			shelter_name: this.props.shelterDetails.shelter_name,
			email: this.props.shelterDetails.email,
			address: this.props.shelterDetails.address,
			phone_number: this.props.shelterDetails.phone_number,
			user_id: this.props.shelterDetails.user_id,
			createShelterForm: shelterStringToBoolean
		});
	}

	openModal() {
		if (this.state.createPetForm) {
			this.setState({
				shelter_name: "",
				email: "",
				address: "",
				phone_number: "",
				modalIsOpen: true
			});
		} else {
			this.setState({
				modalIsOpen: true
			});
		}
	}

	closeModal() {
		this.setState({modalIsOpen: false});
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
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
				id: this.props.shelterDetails.id,
			};
			this.props.updateShelter(shelter);
		}
		this.closeModal();
	}

	render() {
		return (
			<div className="authentication-form-container">

				{this.state.createShelterForm ? <button onClick={this.openModal}>
					Create Shelter</button> : <button onClick={this.openModal}>
						Update Shelter</button>}

				<Modal
					isOpen={this.state.modalIsOpen}
					onAfterOpen={this.afterOpenModal}
					onRequestClose={this.closeModal}
					contentLabel="Shelter Modal"
				>
					<form onSubmit={this.handleSubmit}
						className="auth-form">

						<div className="user-auth-title">
							{this.state.createShelterForm ? <h3>Create a Shelter</h3> :
								<h3>Update a Shelter</h3>}
						</div>

						<div className="user-auth-fields">
							<label>Name</label>
							<input type="text"
								value={this.state.shelter_name}
								onChange={this.update("shelter_name")} />
						</div>

						<div className="user-auth-fields">
							<label>Email</label>
							<input type="text"
								value={this.state.email}
								onChange={this.update("email")} />
						</div>

						<div className="user-auth-fields">
							<label>Address</label>
							<input type="text"
								value={this.state.address}
								onChange={this.update("address")} />
						</div>

						<div className="user-auth-fields">
							<label>Phone Number</label>
							<input type="text"
								value={this.state.phone_number}
								onChange={this.update("phone_number")} />
						</div>

						<div className="user-auth-buttons">
							<input className="auth-submit-button" type="submit" value="Submit" autoFocus/>
						</div>

					</form>
				</Modal>
			</div>
		);
	}

}

export default ShelterForm;
