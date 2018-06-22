function insert(num) {
	'use strict';
	document.form.textview.value =  document.form.textview.value + num;
}

function equal() {
	'use strict';
	document.form.textview.value =  eval(document.form.textview.value).toFixed(0);
}
function del() {
	//'use strict';
	document.form.textview.value = ""
}