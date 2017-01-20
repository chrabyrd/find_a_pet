import React from 'react';
import Modal from 'react-modal';

class PetForm extends React.Component {
	constructor(props) {
		super(props);

		const petStringToBoolean = (this.props.createPetForm === 'true');

		this.state = {
			createPetForm: petStringToBoolean,
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
		if (this.props.createPetForm) {
			this.setState({
				name: "",
				pet_type: "",
				age: "",
				breed: "",
				gender: "",
				description: "",
				shelter_id: "",
				user_id: "",
				pet_image: "",
				modalIsOpen: true
			});
		} else {
			this.setState({
				name: this.props.petDetails.name,
				pet_type: this.props.petDetails.pet_type,
				age: this.props.petDetails.age,
				breed: this.props.petDetails.breed,
				gender: this.props.petDetails.gender,
				description: this.props.petDetails.description || "",
				shelter_id: this.props.petDetails.shelter_id,
				user_id: this.props.petDetails.user_id,
				pet_image: this.props.petDetails.pet_image,
				modalIsOpen: true
			});
		}
	}

	openModal() {
		this.inputFieldLogic();
		this.props.clearPetErrors();
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
			this.state.createPetForm ? <div className="pet-buttons" onClick={this.openModal}>
				Create Pet</div> : <div className="pet-buttons" onClick={this.openModal}>
					Update Pet</div>
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
				pet_image: this.state.pet_image || 'http://res.cloudinary.com/du9y1z3ol/image/upload/v1484638109/site-logo.png',
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
			<div className="pet-form-container">

				{this.petActions()}

				<Modal
					className="auth-modal"
					overlayClassName="auth-overlay"
					isOpen={this.state.modalIsOpen}
					onAfterOpen={this.afterOpenModal}
					onRequestClose={this.closeModal}
					contentLabel="petModal"
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

							<button className="image-button" onClick={this.cloudinate}>Add Image</button>

							{this.renderErrors()}

						</div>

						<div className="submit-button-container">
							<input className="submit-button" type="submit" value="Submit" autoFocus/>
						</div>

					</form>
				</Modal>
			</div>
		);
	}

}

export default PetForm;
