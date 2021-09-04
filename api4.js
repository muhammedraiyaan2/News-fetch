// Initialize the news api parameters
let source = 'bbc-news';
let apiKey = '94d96e1f22e34e63be8befc6138f9d5a'

// Grab the news container
let newsAccordion = document.getElementById('card');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=sports&source=bbc-news&apiKey=94d96e1f22e34e63be8befc6138f9d5a`, true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            // console.log(element, index)
            let news = `<div style="display:flex; display:inline:block; width:470%; background-size:cover; height:1%;" class="container-fluid my-2 card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link" type="button"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                   <b>Breaking News ${index+1}: Date: ${element["publishedAt"]}</b> ${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div aria-labelledby="heading${index}">
                                <div class="card-body"><img src="${element["urlToImage"]}" style="width:100%; height="40%"> ${element["content"]}. <a href="${element["url"]}" target="_blank" >Read more here</a>  </div>
                            </div>
                        </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()