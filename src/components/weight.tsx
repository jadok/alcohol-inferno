export default function Weight({weight, handleChange}) {
	return (
		<div className="weight">
			<label for="WeightInput">What is your weight(Kg)?</label>
			<input id="WeightInput" name="weight" type="number" value={ weight } onInput={handleChange} />
		</div>
	);
}

