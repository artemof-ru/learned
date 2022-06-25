const requestUrl = 'http://api.tvmaze.com/search/shows?q=girls'
const dataWrapper = document.getElementById('wrapper')

const createTemplate = data => {
  let genres = []

  if (data.show.genres.length) {
    genres = data.show.genres.reduce((acc, item) => {
      return acc + ", " + item
    })
  } else {
    genres = 'unknown'
  }
  
  return `
    <div class="data-item">
      ${data.show.image ?  '<div class="data-item__image"> <img src="'+data.show.image.medium+'" alt=""> </div>' : ''}
      <div class="data-item__text"><span>Name:</span>${data.show.name}</div>
      <div class="data-item__text"><span>Score:</span>${data.scope}</div>
      <div class="data-item__text"><span>Genres:</span>${genres}</div>
      <div class="data-item__text"><span>Language:</span>${data.show.language}</div>
      <div class="data-item__text"><span>Description:</span>${data.show.summary}</div>
    </div>
  `
}

fetch(requestUrl)
  .then(response => response.json())
  .then(data => {
    if(data) {
      data.forEach(item => {
        dataWrapper.innerHTML += createTemplate(item)
      })
    }
  })