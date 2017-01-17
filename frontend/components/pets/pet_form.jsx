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
			user_id: "",
			createPetForm: petStringToBoolean,
			modalIsOpen: false
		};
		// debugger
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillReceiveProps(newProps) {
		const petStringToBoolean = (this.props.createPetForm === 'true');

		this.setState({
			name: newProps.petDetails.name,
			pet_type: newProps.petDetails.pet_type,
			age: newProps.petDetails.age,
			breed: newProps.petDetails.breed,
			gender: newProps.petDetails.gender,
			description: newProps.petDetails.description || "",
			shelter_id: newProps.petDetails.shelter_id,
			createPetForm: petStringToBoolean,
			user_id: newProps.petDetails.user_id,
		});
	}

	openModal() {
		if (this.state.createPetForm) {
			this.setState({
				modalIsOpen: true,
				name: "",
				pet_type: "",
				breed: "",
				age: "",
				gender: "",
				description: "",
			});
		} else {
			this.setState({
				modalIsOpen: true,
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

	petActions() {
		return (
			this.state.createPetForm ? <button onClick={this.openModal}>
				Create Pet</button> : <button onClick={this.openModal}>
					Update Pet</button>
		);
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
				id: this.props.petDetails.id
			};
			this.props.updatePet(pet);
		}
		this.closeModal();
	}

	render() {
		const currentUser = this.props.session.user || "";

		return (
			<div className="authentication-form-container">

				{this.state.user_id === currentUser.id ? this.petActions() : ""}

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
								placeholder={this.state.createPetForm ? "" : this.state.name}
								value={this.state.name}
								onChange={this.update("name")} />
						</div>

						<div className="user-auth-fields">
							<label>Type</label>
							<input type="text"
								placeholder={this.state.createPetForm ? "" : this.state.pet_type}
								value={this.state.pet_type}
								onChange={this.update("pet_type")} />
						</div>

						<div className="user-auth-fields">
							<label>Breed</label>
							<input type="text"
								placeholder={this.state.createPetForm ? "" : this.state.breed}
								value={this.state.breed}
								onChange={this.update("breed")} />
						</div>

						<div className="user-auth-fields">
							<label>Age</label>
							<input type="text"
								placeholder={this.state.createPetForm ? "" : this.state.age}
								value={this.state.age}
								onChange={this.update("age")} />
						</div>

						<div className="user-auth-fields">
							<label>Gender</label>
							<input type="text"
								placeholder={this.state.createPetForm ? "" : this.state.gender}
								value={this.state.gender}
								onChange={this.update("gender")} />
						</div>

						<div className="user-auth-fields">
							<label>Description</label>
							<input type="text"
								placeholder={this.state.createPetForm ? "" : this.state.description}
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
