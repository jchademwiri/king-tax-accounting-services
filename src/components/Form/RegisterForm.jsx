import FormInput from './formInput';

const RegisterForm = () => {
	return (
		<form>
			<FormInput placeholder='Please enter your username' />
			<FormInput placeholder='Please enter your email address' />
			<FormInput placeholder='Please enter your Full Name' />
		</form>
	);
};

export default RegisterForm;
