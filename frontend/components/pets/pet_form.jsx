import React from 'react';
import Modal from 'react-modal';

class PetForm extends React.Component {
	constructor(props) {
		super(props);

		const petStringToBoolean = (this.props.createPetForm === 'true');

		this.state = {
			name: "",
			pet_type: "",
			age: "",
			breed: "",
			gender: "",
			description: "",
			shelter_id: "",
			createPetForm: petStringToBoolean,
			modalIsOpen: false
		};

		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	openModal() {
		const petStringToBoolean = (this.props.createPetForm === 'true');

		this.setState({
			name: this.props.petDetails.name,
			pet_type: this.props.petDetails.pet_type,
			age: this.props.petDetails.age,
			breed: this.props.petDetails.breed,
			gender: this.props.petDetails.gender,
			description: this.props.petDetails.description || "",
			shelter_id: this.props.petDetails.shelter_id,
			createPetForm: petStringToBoolean,
			modalIsOpen: true
		});
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
		if (this.state.createPetForm) {
			const pet = {
				name: this.state.name,
				pet_type: this.state.pet_type,
				age: this.state.age,
				breed: this.state.breed,
				gender: this.state.gender,
				description: this.state.description,
				shelter_id: this.props.shelterDetails.id,
			};
			this.props.createPet(pet);
		} else {
			const pet = {
				name: this.state.name,
				pet_type: this.state.pet_type,
				age: this.state.age,
				breed: this.state.breed,
				gender: this.state.gender,
				description: this.state.description,
				id: this.props.petDetails.id,
			};
			this.props.updatePet(pet);
		}
		this.closeModal();
	}

	render() {

		return (
			<div className="authentication-form-container">

				{this.state.createPetForm ? <button onClick={this.openModal}>
					Create Pet</button> : <button onClick={this.openModal}>
						Update Pet</button>}

				<Modal
					isOpen={this.state.modalIsOpen}
					onAfterOpen={this.afterOpenModal}
					onRequestClose={this.closeModal}
					contentLabel="Shelter Modal"
				>
					<form onSubmit={this.handleSubmit}
						className="auth-form">

						<div className="user-auth-title">
							{this.state.createPetForm ? <h3>Create a Pet</h3> :
								<h3>Update a Pet</h3>}
						</div>

						<div className="user-auth-fields">
							<label>Name</label>
							<input type="text"
								value={this.state.name}
								onChange={this.update("name")} />
						</div>

						<div className="user-auth-fields">
							<label>Type</label>
							<input type="text"
								value={this.state.pet_type}
								onChange={this.update("pet_type")} />
						</div>

						<div className="user-auth-fields">
							<label>Breed</label>
							<input type="text"
								value={this.state.breed}
								onChange={this.update("breed")} />
						</div>

						<div className="user-auth-fields">
							<label>Age</label>
							<input type="text"
								value={this.state.age}
								onChange={this.update("age")} />
						</div>

						<div className="user-auth-fields">
							<label>Gender</label>
							<input type="text"
								value={this.state.gender}
								onChange={this.update("gender")} />
						</div>

						<div className="user-auth-fields">
							<label>Description</label>
							<input type="text"
								value={this.state.description}
								onChange={this.update("description")} />
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

export default PetForm;
