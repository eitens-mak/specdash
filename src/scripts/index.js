import loader from './parser.js';

JSONEditor.defaults.options.theme = 'bootstrap2';

let root = $('.specdash')
loader(root.attr('src'), root);
