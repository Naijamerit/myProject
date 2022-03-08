const blogPost = function() {
		 fetch('https://gnews.io/api/v4/top-headlines?&token=0a7575cd1c4d5a68c4fb139869d906a8')
		.then(function(response) {
			return response.json()
		}).then(function(data) {
			console.log(data)
			//assigning data
			let post = data.articles;
			let container = `<div></div> `
			//loop the articles
			post.forEach(listPost => {
				var publishedAt = new Date(`${listPost.publishedAt}`);
				var myDate =  publishedAt.toDateString();
				container += `
				<div class="col-lg-6 pb-5 mb-5">
				<div class="text-center">
					<div class="shadow">
						<div class="card-body">
							<div class="d-flex justify-content-center border-bottom">
								<img id="image" class="img-fluid py-2" src="${listPost.image}">
							</div>
							<h5 class="fw-bold text-primary">${listPost.title}The news headline<br></h5>

							<h6 class="card-text">${listPost.content}</h6>
							<h6 class="card-text fst-italic">Source: ${listPost.source.name}</h6>
							<h6 class="card-text fst-italic text-danger">Published: ${myDate}</h6>
							<h6 class="fst-italic card-link text-end"><a href="${listPost.url}">Read More</a></h6>
						</div>
					</div>
				</div>
				</div>
						`;
			});
			//display users in your page
			
			document.getElementById('container').innerHTML = container;

		});
	
}
blogPost();

