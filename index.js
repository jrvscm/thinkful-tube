
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
			console.log(data)
			renderResult(data);
        }	
	});
}

function renderResult(data) {
for(i=0; i<data.items.length; i++) {
    $('.js-search-results').append(
       `<div class="result-container">
       		<a href="https://www.youtube.com/watch?v=${data.items[i].id.videoId}" 
       		target=_"blank"><h3>${data.items[i].snippet.title}</h3></a>
       		<a href="https://www.youtube.com/watch?v=${data.items[i].id.videoId}" 
       		target=_"blank"><img src="${data.items[i].snippet.thumbnails.medium.url}" alt="${data.items[i].snippet.title}"></a>
       			<p>${data.items[i].snippet.description}</p>
       		<a href="https://youtube.com/${data.items[i].snippet.channelTitle}" 
       		target="_blank"><h4>More videos from ${data.items[i].snippet.channelTitle}</h4></a>
       </div>`).prop('hidden', false);
}
	$('.js-results-h2').empty().append(`Results: ${data.items.length}`).prop('hidden', false);
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