/**
 * @file Daedalus - Procedural map generation.
 *
 * @author noodep
 * @version 0.47
 */

'use strict'

import Room from './room.js';

export default class Daedalus {

	constructor(width, height) {
		this._rooms = [];
		this._width = width;
		this._height = height;
	}

	generate(count) {
		const grid = 25;
		const w_sections = Math.floor(this._width / grid);
		const h_sections = Math.floor(this._height / grid);

		for(let idx = 0 ; idx < count ; idx++) {
			const room = new Room();
			let valid = false;
			for(let iteration = 0 ; !valid && iteration < Daedalus.RETRY_COUNT ; iteration++) {
				valid = true;
				const w = randInt(1, w_sections / 5);
				const h = randInt(1, h_sections / 5);
				const x = randInt(1, w_sections - w);
				const y = randInt(1, h_sections - h);

				room.bounds.from(x * grid, y * grid, w * grid, h * grid);

				for(let local_room of this._rooms) {
					if(room.intersects(local_room)) {
						valid = false;
						break;
					}
				}
			}

			if(valid)
				this._rooms.push(room);
		}
	}

	render(renderer) {
		console.debug('rendering');
		for(let room of this._rooms) {
			room.render(renderer);
		}
	}

}

Daedalus.RETRY_COUNT = 1e3;

function randInt(min, max) {
	return Math.round(min + Math.random() * (max - min));
}

