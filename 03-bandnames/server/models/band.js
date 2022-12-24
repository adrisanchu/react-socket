const { v4: uuidv4 } = require('uuid');

class Band {
  /**
   * A `Band` with a name and id.
   * It can accumulate votes.
   * @param {*} name The name of the `Band`
   */
	constructor(name) {
		this.id = uuidv4();
		this.name = name;
		this.votes = 0;
	}
}

module.exports = Band;
