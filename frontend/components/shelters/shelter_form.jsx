import React from 'react';
import Modal from 'react-modal';

class ShelterForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			shelter_name: "",
			email: "",
			address: "",
			phone_number: "",
			user_id: "",
			createShelter: false,
			modalIsOpen: false
		};

		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.loginForm = this.loginForm.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	openModal() {
		this.setState({
			shelter_name: this.props.shelterDetails.shelter_name,
			email: this.props.shelterDetails.email,
			address: this.props.shelterDetails.address,
			phone_number: this.props.shelterDetails.phone_number,
			user_id: this.props.shelterDetails.user_id,
			createShelter: false,
			modalIsOpen: true
		});
}

	closeModal() {
		this.setState({modalIsOpen: false});
	}

	loginForm() {
		this.setState({
			createShelter: false,
			name: 'Demo Account',
		});
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	clear() {
		if (this.state.shelter_name === "Demo Account") {
			return e => this.setState({
				name: "",
			});
		}
	}

	demoOrNot() {
		return (
			this.state.name === "Demo Account" ? "demo-input" : "user-auth-input"
		);
	}

	handleSubmit(e) {
		e.preventDefault();
		const shelter = {
			shelter_name: this.state.shelter_name,
			email: this.state.email,
			address: this.state.address,
			phone_number: this.state.phone_number,
			user_id: this.state.user_id,
			id: this.props.shelterDetails.id
		};

		this.props.updateShelter(shelter);
	}

	render() {
		return (
			<div className="authentication-form-container">

				<button onClick={this.openModal}>Update Info</button>

				<Modal
					isOpen={this.state.modalIsOpen}
					onAfterOpen={this.afterOpenModal}
					onRequestClose={this.closeModal}
					contentLabel="Shelter Modal"
				>
					<form onSubmit={this.handleSubmit}
						className="auth-form">

						<div className="user-auth-title">
							{this.state.createShelter ? <h3>Create a Shelter</h3> :
								<h3>Update a Shelter</h3>}
						</div>

						<div className="user-auth-fields">
							<label>Name</label>
							<input type="text"
								value={this.state.shelter_name}
								onChange={this.update("shelter_name")}
								onFocus={this.clear()}
								className={this.demoOrNot()} />
						</div>

						<div className="user-auth-fields">
							<label>Email</label>
							<input type="text"
								value={this.state.email}
								onChange={this.update("email")}
								onFocus={this.clear()}
								className={this.demoOrNot()} />
						</div>

						<div className="user-auth-fields">
							<label>Address</label>
							<input type="text"
								value={this.state.address}
								onChange={this.update("address")}
								onFocus={this.clear()}
								className={this.demoOrNot()} />
						</div>

						<div className="user-auth-fields">
							<label>Phone Number</label>
							<input type="text"
								value={this.state.phone_number}
								onChange={this.update("phone_number")}
								onFocus={this.clear()}
								className={this.demoOrNot()} />
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
