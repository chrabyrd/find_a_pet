import React from 'react';
import Modal from 'react-modal';
import classNames from 'classNames';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			email: "",
			password: "",
			user_image: "",
			modalIsOpen: false,
			signup: false,
		};

		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.userSignupForm	= this.userSignupForm.bind(this);
		this.loginForm = this.loginForm.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.cloudinate = this.cloudinate.bind(this);
	}

	openModal() {
	this.setState({modalIsOpen: true});
	}

	closeModal() {
		this.setState({
			modalIsOpen: false,
			signup: false,
		});
		this.props.clearErrors();
	}

	userSignupForm() {
		this.setState({
			signup: true,
			username: "",
			password: ""
		});
		this.openModal();
	}

	loginForm() {
		this.setState({
			signup: false,
			username: 'Demo Account',
			password: 'password'
		});
		this.openModal();
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	clear() {
		if (this.state.username === "Demo Account") {
			return e => this.setState({
				username: "",
				password: ""
			});
		}
	}

	cloudinate(e) {
		e.preventDefault();
		cloudinary.openUploadWidget(
			window.cloudinary_options,
			(errors, imageInfo) => {
				if (errors === null) {
					let cloud_url = imageInfo[0].url;
					this.setState({
						user_image: cloud_url
					});
				}
			}
		);
	}

	handleSubmit(e) {
		e.preventDefault();
		if (this.state.signup){
			const user = {
				username: this.state.username,
				email: this.state.email,
				user_image: this.state.user_image,
				password: this.state.password
			};
			this.props.processSignUpUser(user);
		} else {
			const user = {
				username: this.state.username,
				password: this.state.password
			};
			this.props.processLogIn(user);
		}
	}

	emailField() {
		if (this.state.signup) {
			return(
				<div className="user-auth-fields">
					<input type="email"
						placeholder="Email Address"
						value={this.state.email}
						onChange={this.update("email")} />
				</div>
			);
		}
	}

	photoField() {
		if (this.state.signup) {
			return(
				<div className="user-auth-fields">
					<button onClick={this.cloudinate}>Add Image</button>
				</div>
			);
		}
	}

	renderErrors() {
		if (this.props.errors[0]) {
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

		const demoBoolean = classNames ({
			'demo-input': this.state.username === "Demo Account"
		});

		return (
			<div className="authentication-form-container">

				<button
					className='greeting-button'
					onClick={this.loginForm}>Log In</button>
				<button
					className='greeting-button'
					onClick={this.userSignupForm}>Create User Account</button>

        <Modal
					className="auth-modal"
					overlayClassName="auth-overlay"
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Authentication"
        >

					<form onSubmit={this.handleSubmit}>

						<div className="user-auth-title">
							{this.state.signup ? <h3>Please Sign Up</h3> :
								<h3>Please Log In</h3>}
						</div>

						<div className="auth-form">
							<div className="user-auth-fields">
								<input type="text"
									placeholder={"Username"}
									value={this.state.username}
									onChange={this.update("username")}
									className={demoBoolean}
									onFocus={this.clear()} />
							</div>

							{this.emailField()}

							<div className="user-auth-fields">
								<input type="password"
									placeholder="Password"
									value={this.state.password}
									onChange={this.update("password")}
									className={demoBoolean}
									onFocus={this.clear()} />
							</div>

							{this.photoField()}

							{this.renderErrors()}

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

export default SessionForm;
