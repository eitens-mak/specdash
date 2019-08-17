import { createElement } from './parser.js';
import fs from 'fs';

fs.readdirSync("./public/").forEach(fname => {
    if (fname.includes(".sd.json")) {
	describe(fname, () => {
	    it.each(
		require("../../public/" + fname)
		    .map(ele => [ele.title, ele])
	    )(
		"createElement('%s')",
		(title, ele) => {
		    if (typeof ele.spec === 'string') {
			fetch.mockResponseOnce(
			    JSON.stringify(require('../../' + ele.spec))
			);
		    }

		    ele.id = 0;
		    return createElement(ele).then(card => {
			expect(card.html()).toMatchSnapshot();
		    });  
		}
	    )
	});
    }
});
