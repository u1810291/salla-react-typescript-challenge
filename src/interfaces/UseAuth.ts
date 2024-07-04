
export interface UserSignUpI {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
  confirmPassword: string;
}
export interface UserSignInI {
	email: string;
	password: string;
}

export interface AuthContextI {
	error: string;
	success: string;
	loading: boolean;
	getMe: () => void;
	signUp: (data: UserSignUpI) => void;
	signIn: (data: UserSignInI) => void;
}
