/**
 * @file Bounds - Object for describing object bounds.
 *
 * @author noodep
 * @version 0.1
 */

'use strict'

export default class Bounds {

	constructor(x, y, width, height) {
		this.from(x, y, width, height);
	}

	get x() {
		return this._x;
	}

	get y() {
		return this._y;
	}

	get width() {
		return this._width;
	}

	get height() {
		return this._height;
	}

	get xMax() {
		return this._x + this._width;
	}

	get yMax() {
		return this._y + this._height;
	}

	from(x, y, width, height) {
		this._x = x;
		this._y = y;
		this._width = width;
		this._height = height;
	}

}

