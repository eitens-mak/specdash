import { createElement } from './parser.js';

it.each([
    [
	{
	    "title": "Sample Vega",
	    "type": "vega",
	    "spec": "public/line-chart.vg.json"
	}
    ],
    [
	{
	    "title": "Example JSON Editor",
	    "type": "json-editor",
	    "spec": "public/basic_person.json"
	}
    ]
])(
    "createElement",
    (ele) => {
	fetch.mockResponseOnce(
	    JSON.stringify(require('../../' + ele.spec))
	);

	return createElement(ele).then(card => {
	    expect(card.html()).toMatchSnapshot();
	});  
    },
)

it.each
