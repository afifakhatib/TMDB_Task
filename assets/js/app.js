
let cl = console.log;

cl(movieArray);

let movie = document.getElementById('movieContainer');


let result = ``;


movieArray.forEach((card) =>{
	
	result += `
	<div class="col-md-4">
				<div class="card mt-4">
					<figure class="movieCard mb-0">
						<img src="http://image.tmdb.org/t/p/w342${card.poster_path}" alt="logo">
						<figcaption>
							<div class="ratingSection">
								<div class="row">
									<div class="col-md-10">
									<h3 class='mb-0'> ${card.original_title} </h3>
									</div>
									<div class="col-md-2">
									  <div class='rating text-center'>
									  ${card.vote_average >= 8 ? `<p class="bg-success">${card.vote_average}</p>` :
									card.vote_average<= 7 && card.vote_average>=5 ? `<p class="bg-warning">${card.vote_average}</p>` : 
									card.vote_average<5 ? `<p class="bg-danger">${card.vote_average}</p>`:`<p class="bg-warning">
									${card.vote_average}</p>`}
												</div>
											</div>
								</div>
							</div>
							<div class="overviewSection">
								<h4>${card.title}</h4>
								<em>Overview</em>
								<p> ${card.overview} </p>
						</figcaption>
					</figure>
					
				</div>
			</div>
	`
});

movie.innerHTML = result;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   