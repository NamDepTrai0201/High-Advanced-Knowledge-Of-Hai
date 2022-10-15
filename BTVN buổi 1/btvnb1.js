const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '62826c7a76msh52e096aa75a4e74p1db0e4jsnba1b2d056ee8',
		'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
	}
};

fetch('https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=Canada', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));