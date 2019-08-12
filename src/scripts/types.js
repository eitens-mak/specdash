export default {
    "vega": function (spec, id) {
	return new vega.View(vega.parse(spec))
	    .logLevel(vega.Warn)
	    .renderer('canvas')
	    .initialize('#' + id)
	    .hover()
	    .runAsync();
    },
    "json-editor": function (spec, id) {
	return new JSONEditor(
	    document.getElementById(id),
	    { schema: spec }
	);
    }
};
