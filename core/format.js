const htmlBeautify = require('js-beautify').html;
const fs = require('fs');
const glob = require('glob');

const options = {
	end_with_newline: true,
	indent_size: 4,
	indent_char: ' ',
	indent_with_tabs: true,
	editorconfig: false,
	eol: '\n',
	indent_level: 0,
	preserve_newlines: true,
	max_preserve_newlines: 2,
	space_in_paren: false,
	space_in_empty_paren: false,
	brace_style: 'collapse',
	unindent_chained_methods: false,
	break_chained_methods: false,
	keep_array_indentation: false,
	unescape_strings: false,
	wrap_line_length: 0,
	e4x: false,
	operator_position: 'before-newline',
	indent_empty_lines: false,
	templating: ['auto'],
};

glob('**/_dist/*.html', { absolute: true }, (er, files) => {
	files.forEach((file) => {
		console.log(`Beautified: ${file}`);
		const data = fs.readFileSync(file, 'utf8');
		const nextData = htmlBeautify(data, options);
		fs.writeFileSync(file, nextData, 'utf8');
	});
});
