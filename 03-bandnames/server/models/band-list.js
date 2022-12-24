const Band = require('./band');

class BandList {
	constructor() {
		this.bands = [
			// ejemplos
			new Band('Metallica'),
			new Band('Héroes del Silencio'),
			new Band('Bon Jovi'),
			new Band('Red Hot Chilli Peppers'),
		];
	}

	/**
	 * Add a new `Band` to the list
	 * @param {string} name The name of the band
	 * @returns {Band[]}
	 */
	addBand(name) {
		const newBand = new Band(name);
		this.bands.push(newBand);
		return this.bands;
	}

  /**
   * Remove a `Band` from the list
   * @param {*} id The unique id of the band
   */
	removeBand(id) {
		this.bands = this.bands.filter((band) => band.id !== id);
	}

  /**
   * Get all `Bands`
   * @returns {Band[]}
   */
	getBands() {
		return this.bands;
	}

  /**
   * Find a `Band` by its id and 
   * increase its votes by 1
   * @param {*} id The unique id of the band
   */
	increaseVotes(id) {
		this.bands = this.bands.map((band) => {
			if (band.id === id) {
				band.votes += 1;
			}
			return band;
		});
	}

  /**
   * Change the name of the `Band` by the new name passed
   * @param {*} id The unique id of the band
   * @param {*} newName The new name of the band
   */
	changeName(id, newName) {
		this.bands = this.bands.map((band) => {
			if (band.id === id) {
				band.name = newName;
			}
			return band;
		});
	}
}

module.exports = BandList;
