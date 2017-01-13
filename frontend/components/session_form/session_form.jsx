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
		this.props.clearErrors();
	}

	signupForm() {
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

	demoOrNot() {
		return (
			this.state.username === "Demo Account" ? "demo-input" : "user-auth-input"
		);
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
			<div className="user-auth-fields">
				<label className="user-auth-label"> Email
					<input type="email"
						value={this.state.email}
						onChange={this.update("email")}
						className={this.demoOrNot()} />
				</label>
			</div>
		);
	}

	renderErrors() {
		return(
			<div className="user-auth-fields">
				<ul className="user-auth-errors">
					{this.props.errors.map((error, i) => (
						<li key={`error-${i}`}>
							{error}
						</li>
					))}
				</ul>
			</div>
		);
	}

	render() {

		return (
			<div className="authentication-form-container">

				<button
					className='greeting-button'
					onClick={this.loginForm}>Log In</button>
				<button
					className='greeting-button'
					onClick={this.signupForm}>Sign Up</button>

        <Modal
					className="auth-modal"
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Authentication"
        >

					<form onSubmit={this.handleSubmit}
						className="login-form-box">

						<div className="user-auth-title">
							{this.state.signup ? <h3>Please Sign Up</h3> :
								<h3>Please Log In</h3>}
						</div>

						<div className="user-auth-fields">
							<label className="user-auth-label"> Username
								<input type="text"
									value={this.state.username}
									onChange={this.update("username")}
									onFocus={this.clear()}
									className={this.demoOrNot()} />
							</label>
						</div>

						{this.state.signup ? this.emailField() : ""}

						<div className="user-auth-fields">
							<label className="user-auth-label"> Password
								<input type="password"
									value={this.state.password}
									onChange={this.update("password")}
									onFocus={this.clear()}
									className={this.demoOrNot()} />
							</label>
						</div>

						<div className="user-auth-fields">
							<input type="submit" value="Submit" autoFocus/>
						</div>

						{this.renderErrors()}

					</form>
				</Modal>
			</div>
		);
	}

}

export default SessionForm;
