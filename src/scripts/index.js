import loader from './parser.js';

JSONEditor.defaults.options.theme = 'bootstrap2';


loader("public/example.sd.json", $("#root"));
