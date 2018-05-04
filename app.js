$(document).ready(function(){ 

	var searchId = $('#searchTerm');

	var numRecordsId = $('#numberOfRecords');

	var startYearId = $('#startYear');

	var endYearId = $('#endYear');

	var searchBtnId = $('#search');

	var clearBtnId = $('#clear');


	var searchText = '';

	var numRecord = 0;

	var startYear = 0;

	var endYear = 0;


	searchBtnId.click(function(){

		event.preventDefault();

		searchText = searchId.text();
		numRecord = numRecordsId.text();
		startYear = startYearId.text();
		endYear = endYearId.text();
		var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=8a157db08bd34988b2104282b0c41690&q=" + searchText + "&begin_date=" + startYear + "0101&end_date=" + endYear + "1231&page=" + numRecord;

		$.ajax({
			url: queryURL,
			method: "GET"
			}).then(function(response){
			console.log(response)
		})
	})

})







