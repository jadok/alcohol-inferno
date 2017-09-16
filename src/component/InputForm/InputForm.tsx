const InputForm = ({ id, name, value, type = 'text', handleChange }) => (
	<div>
		<label for={id} >{value}</label>
		<input type={type} id={id} name={name} onChange={handleChange} />
	</div>
)

export default InputForm
