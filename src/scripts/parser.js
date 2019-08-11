function loader(schemaUrl, rootDiv) {
    fetch(schemaUrl)
	.then(resp => resp.json())
	.then(resp => {
	    for (var i=0;i<resp.length;i++) {
		resp[i].id = i;
		createElement(resp[i]).then(
		    card => rootDiv.append(card)
		).catch(console.error).done(console.log);
	    }
	});
}

function createElement(ele) {
    let container = $("<div></div>").attr('id', "specdash" + ele.id)
    container.ready(() => {
	fetch(ele.spec)
	    .then(spec => spec.json())
	    .then(spec => {
		return new vega.View(vega.parse(spec))
		    .logLevel(vega.Warn)
		    .renderer('canvas')
		    .initialize('#' + container.attr('id'))
		    .hover()
		    .runAsync();
	    });
    });

    return $("<div></div>")
	.addClass("card-body")
	.append(
	    $("<h5></h5>")
		.addClass("card-title")
		.append(ele.title)
	)
	.append(container)
	.promise()
	.then(body => {
	    return $("<div></div>")
		.addClass("card")
		.addClass("float-left")
		.addClass("shadow p-2 m-2 bg-white rounded")
		.append(body)
		.promise()
	})
	.catch(console.error);
}

export default loader;
	      
