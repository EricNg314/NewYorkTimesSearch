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
			//console.log(response)
			var articleBody = $('#article')

			for(var i=0; i<numRecord; i++){

				var titleDiv = $('<h4>')
				var articleTitle = response.response.docs[i].headline.main;
				//console.log(articleTitle)

				titleDiv.text(articleTitle);

				var authorDiv = $('<h5>')
				var articleAuthor = response.response.docs[i].byline.original;
				//console.log(articleAuthor)

				authorDiv.text(articleAuthor);

				var dateDiv = $('<p>')
				var articleDate = response.response.docs[i].pub_date;
				//console.log(articleDate)

				dateDiv.text(articleDate);

				articleBody.append(titleDiv, authorDiv, dateDiv);

			}

				


		})
	})

})







