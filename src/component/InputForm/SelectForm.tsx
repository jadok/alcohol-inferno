const SelectForm = ({ id, name, options, handleChange }) => (
	<div>
		<select id={id} name={name} onChange={handleChange}>
			{options.map(o => <option key={'gender_' + o.value} value={o.value}>{o.text}</option>)}
		</select>
	</div>
)

export default SelectForm
