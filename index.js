
function getDataFromApi (searchTerm){
	$.ajax({
		url: `https://www.googleapis.com/youtube/v3/search?&q=${searchTerm}
		&part=snippet&maxResults=20&key=AIzaSyDBPGZUKC3yT8dLk8bVaaDmIBApZjyRE-E`,
		dataType: 'json',
		success: function(data) {
			console.log(data)
			//renderResult(data);
		}	
	});
}


function watchSubmit() {
	$('.js-search-form').off().on('click', '.js-search-button', event => {
		event.preventDefault();
		const searchTerm = $('.js-query').val();
		getDataFromApi(searchTerm);
	});
}


function renderResult(data) {
	for(let i=0; i<data.items.length; i++){
	const searchResult = `<img src="${data.items.i.snippet.thumbnails.medium.url}">`;
	insertResults(searchResult);
}
}

function insertResults(searchResult) {
	$('.js-search-results').append(searchResult);
}

watchSubmit();