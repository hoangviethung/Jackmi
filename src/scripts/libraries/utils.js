export const getSVGs = (selector) => {
	let images;
	if (selector) {
		images = Array.from(document.querySelectorAll(selector));
	} else {
		images = Array.from(document.querySelectorAll("img.svg"));
	}
	for (let i = 0; i < images.length; i++) {
		let url;
		if (images[i].getAttribute("data-src") != null) {
			url = images[i].getAttribute("data-src");
		} else {
			url = images[i].getAttribute("src");
		}
		const getImageRequest = new XMLHttpRequest();
		getImageRequest.open("GET", url, true);
		getImageRequest.onload = function (e) {
			images[i].outerHTML = e.target.response;
		};
		getImageRequest.send();
	}
};
