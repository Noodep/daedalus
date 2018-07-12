/**
 * @file Room - A Daedalus room.
 *
 * @author noodep
 * @version 0.33
 */

'use strict'

import Bounds from './bounds.js';

export default class Room {

	constructor(x, y, width, height) {
		this._bounds = new Bounds(x, y, width, height);
	}

	intersects(room) {
		const b1 = this._bounds;
		const b2 = room.bounds;

		return b1.xMax > b2.x && b1.yMax > b2.y && b1.x < b2.xMax && b1.y < b2.yMax;
	}

	get bounds() {
		return this._bounds;
	}

	render(renderer) {
		renderer.lineWidth = 2;
		renderer.lineJoin = 'round';
		renderer.strokeStyle = 'black';
		renderer.fillStyle = 'gray';

		renderer.fillRect(
			this._bounds.x,
			this._bounds.y,
			this._bounds.width,
			this._bounds.height
		);

		renderer.strokeRect(
			this._bounds.x,
			this._bounds.y,
			this._bounds.width,
			this._bounds.height
		);
	}

}

