
function getDataFromApi (searchTerm){
	$.ajax({
		url: `https://www.googleapis.com/youtube/v3/search?`,
		dataType: 'json',
		data: {
			q: `${searchTerm} in:title`,
			part: `snippet`,
			maxResults: `20`,
			key: `AIzaSyDBPGZUKC3yT8dLk8bVaaDmIBApZjyRE-E`
		},
		success: function(data) {
			renderResult(data);
        }	
	});
}

function renderResult(data) {
for(i=0; i<data.items.length; i++) {
            $('.js-search-results').append(
            `<h3>Title: ${data.items[i].snippet.title}</h3>
            <img src="${data.items[i].snippet.thumbnails.medium.url}">
            <p>${data.items[i].snippet.description}</p>
            <h4>More from ${data.items[i].snippet.channelTitle}</h4>`);
}
}

function watchSubmit() {
	$('.js-search-form').off().on('click', '.js-search-button', event => {
		$('.js-search-results').empty();
		event.preventDefault();
		const searchTerm = $('.js-query').val();
		getDataFromApi(searchTerm);
		$('.js-query').val('');
	});
}




$(watchSubmit);