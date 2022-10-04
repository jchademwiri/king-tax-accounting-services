const FormInput = (props) => {
	return (
		<div>
			<label htmlFor='username'>Username</label>
			<input type='text' id='username' placeholder={props.placeholder} />
		</div>
	);
};

export default FormInput;
