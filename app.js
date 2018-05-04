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

		searchText = searchId.val().trim();
		console.log(searchText)
		numRecord = numRecordsId.val().trim();
		startYear = startYearId.val().trim();
		endYear = endYearId.val().trim();
		var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchText + "?begin_date=" + startYear + "?end_date=" + endYear + "?page=" + numRecord + "&api-key=8a157db08bd34988b2104282b0c41690";
		
		console.log(queryURL);

		$.ajax({
			url: queryURL,
			method: "GET"
			}).then(function(response){
			console.log(response)
		})
	})

})







