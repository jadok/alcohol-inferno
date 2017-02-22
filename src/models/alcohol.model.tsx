export class DoseModel {
	public degree:number;
	public quantity:number;
}

export class RatioAlcoholPerson {
	public gender: number; // 0 or 1
	public weight: number;
	public ratio: number;

	private _gender_ratio: Array<number>;
	private _ethanol_value: number;

	constructor(gender: number, weight: number) {
		this.gender = gender;
		this.weight = weight;
		this._ethanol_value = 0.806;
		this._gender_ratio = [0.7, 0.6];
	}

	public Calc() {
		return this._ethanol_value / (this._gender_ratio[this.gender] * this.weight);
	}
}


	/**
	 * 
	 * @description The mathematics formula took from wikipedia : q*10*d/100.
	 * @param q The quantity of alcohol in the alcohol dose. The value must be in cL => mL
	 * @param d The degree of alcohol in the alcohol dose. The value must be in ° => decimal.
	 */
export function	calcDose(q: number, d: number) {
	return q * d / 10;
}
/*
ADD default value to RatioAlcoholPerson
*/