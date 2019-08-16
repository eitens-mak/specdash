export default {
    "vega": function (spec, id) {
	return new vega.View(vega.parse(spec))
	    .logLevel(vega.Warn)
	    .renderer('canvas')
	    .initialize('#' + id)
	    .hover()
	    .runAsync();
    },
    "json-editor": function (spec, id, post) {
	let editor = new JSONEditor(
	    document.getElementById(id),
	    { schema: spec }
	);

	if (post) {
	    editor.on('change', () => {
		let errors = editor.validate();

		if (errors.length) {
		    console.error(errors);
		} else {
		    fetch(post, { method: "POST",
				  headers: { 'Content-Type': 'application/json' },
				  body: JSON.stringify(editor.getValue()) })
			.then(response => response.json())
			.then(console.log)
			.catch(console.error);
		}
	    });
	}

	return editor;
    }
};
