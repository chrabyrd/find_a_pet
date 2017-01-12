import React from 'react';
import Modal from 'react-modal';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			email: "",
			password: "",
			modalIsOpen: false,
			signup: false
		};

		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.signupForm	= this.signupForm.bind(this);
		this.loginForm = this.loginForm.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	openModal() {
	this.setState({modalIsOpen: true});
}

	closeModal() {
		this.setState({modalIsOpen: false});
	}

	signupForm() {
		this.setState({signup: true});
		this.openModal();
	}

	loginForm() {
		this.setState({signup: false});
		this.openModal();
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();

		if (this.state.signup) {
			const user = {
				username: this.state.username,
				email: this.state.email,
				password: this.state.password
			};
			this.props.processSignUp(user);
		} else {
			const user = {
				username: this.state.username,
				password: this.state.password
			};
			this.props.processLogIn(user);
		}
	}

	emailField() {
		return(
			<label> Email:
				<input type="email"
					value={this.state.email}
					onChange={this.update("email")}
					className="login-input" />
			</label>
		);
	}

	renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {
		return (
			<div className="authentication-form-container">

				<button onClick={this.loginForm}>Log In</button>
				<button onClick={this.signupForm}>Sign Up</button>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Authentication"
        >

				<form onSubmit={this.handleSubmit} className="login-form-box">
					{this.renderErrors()}
					<div className="login-form">

						<label> Username:
							<input type="text"
								value={this.state.username}
								onChange={this.update("username")}
								className="login-input" />
						</label>

						{this.state.signup ? this.emailField() : ""}

						<label> Password:
							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="login-input" />
						</label>

						<input type="submit" value="Submit" />
					</div>
				</form>
			</Modal>
			</div>
		);
	}

}

export default SessionForm;
