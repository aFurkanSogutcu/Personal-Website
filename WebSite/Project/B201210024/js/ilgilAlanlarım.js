const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com',
		'X-RapidAPI-Key': '033aafcac6msh22c2ee84e1e0546p1cb91bjsnd609b15185ba'
	}
};

fetch('https://api-basketball.p.rapidapi.com/standings?league=12&season=2019-2020', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

	