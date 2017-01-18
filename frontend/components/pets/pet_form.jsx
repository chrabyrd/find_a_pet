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
			pet_image: "",
			createPetForm: petStringToBoolean,
			modalIsOpen: false
		};

		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.cloudinate = this.cloudinate.bind(this);
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
			user_id: newProps.petDetails.user_id,
			createPetForm: petStringToBoolean,
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

	cloudinate(e) {
		e.preventDefault();
		cloudinary.openUploadWidget(
			window.cloudinary_options,
			(errors, imageInfo) => {
				if (errors === null) {
					let cloud_url = imageInfo[0].url;
					this.setState({
						pet_image: cloud_url
					});
				}
			}
		);
	}

	petActions() {
		return (
			this.state.createPetForm ? <button onClick={this.openModal}>
				Create Pet</button> : <button onClick={this.openModal}>
					Update Pet</button>
		);
	}

	handleSubmit(e) {
		if (this.state.createPetForm) {
			const pet = {
				name: this.state.name,
				pet_type: this.state.pet_type,
				age: this.state.age,
				breed: this.state.breed,
				gender: this.state.gender,
				description: this.state.description,
				pet_image: this.state.pet_image,
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
				pet_image: this.state.pet_image,
				id: this.props.petDetails.id
			};
			this.props.updatePet(pet);
		}
		this.closeModal();
	}

	render() {
		const currentUser = this.props.session.user || "";
		console.log(this.props);
		return (
			<div className="authentication-form-container">
				{this.petActions()}

				<Modal
					className="auth-modal"
					overlayClassName="auth-overlay"
					isOpen={this.state.modalIsOpen}
					onAfterOpen={this.afterOpenModal}
					onRequestClose={this.closeModal}
					contentLabel="Pet Modal"
				>
					<form onSubmit={this.handleSubmit}>

						<div className="user-auth-title">
							{this.state.createPetForm ? <h3>Create a Pet</h3> :
								<h3>Update a Pet</h3>}
						</div>

						<div className="auth-form">
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

							<button onClick={this.cloudinate}>Add Image</button>

						</div>

						<div className="submit-button-container">
							<input type="submit" value="Submit" autoFocus/>
						</div>

					</form>
				</Modal>
			</div>
		);
	}

}

export default PetForm;
