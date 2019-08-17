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
		    fetch.mockResponseOnce(
			JSON.stringify(require('../../' + ele.spec))
		    );

		    return createElement(ele).then(card => {
			expect(card.html()).toMatchSnapshot();
		    });  
		}
	    )
	});
    }
});
