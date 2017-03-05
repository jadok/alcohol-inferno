// This is example of using Functional Component (stateless)
export default function Gender ({gender, handleChange}) {
	return (
		<div className="gender">
			<label for="GenderSelector">Choose your gender!</label>
			<select id="GenderSelector" name="gender" defaultValue={gender} onChange={ handleChange } >
				<option value="0">Man</option>
				<option value="1">Woman</option>
			</select>
		</div>
	);
}

