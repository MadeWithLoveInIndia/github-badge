import firebase from "firebase";
import firebaseApp from "./firebase";
import constants from "./constants";

export const register = (email, password, name) => {
	return new Promise((resolve, reject) => {
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(success => {
				let user = firebase.auth().currentUser;
				user
					.updateProfile({
						displayName: name,
						photoURL: constants.profile.default_user_image
					})
					.then(() => {
						user
							.sendEmailVerification()
							.then(() => {
								resolve(user);
							})
							.catch(error => {
								resolve(user);
							});
					})
					.catch(error => {
						resolve(user);
					});
			})
			.catch(error => {
				reject(error.code);
			});
	});
};

export const login = (email, password) => {
	return new Promise((resolve, reject) => {
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(success => {
				resolve(success);
			})
			.catch(error => {
				reject(error.code);
			});
	});
};

export const getUser = () => {
	return new Promise((resolve, reject) => {
		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				resolve(user);
			} else {
				reject();
			}
		});
	});
};

export const logout = () => {
	return new Promise((resolve, reject) => {
		firebase
			.auth()
			.signOut()
			.then(() => {
				resolve();
			})
			.catch(error => {
				reject(error);
			});
	});
};

export const resendVerification = () => {
	return new Promise((resolve, reject) => {
		let user = firebase.auth().currentUser;
		user
			.sendEmailVerification()
			.then(function() {
				resolve();
			})
			.catch(error => {
				reject(error);
			});
	});
};

export const sendResetLink = email => {
	return new Promise((resolve, reject) => {
		firebase
			.auth()
			.sendPasswordResetEmail(email)
			.then(function() {
				resolve();
			})
			.catch(error => {
				reject(error);
			});
	});
};

export const updateSettings = (name, profilePicture) => {
	return new Promise((resolve, reject) => {
		let user = firebase.auth().currentUser;
		user
			.updateProfile({
				displayName: name,
				photoURL: profilePicture // || constants.profile.default_user_image
			})
			.then(() => {
				resolve(user);
			})
			.catch(error => {
				reject(user);
			});
	});
};
