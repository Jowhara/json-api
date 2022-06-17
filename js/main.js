$(document).ready(() => {
  $("#searchForm").on("submit", (e) => {
    let searchText = $("#searchText").val();
    getMovies(searchText);
    e.preventDefault();
  });
});

function getMovies(searchText) {
  axios
    .get(`http://www.omdbapi.com/?s=${searchText}&apikey=36b02af8`)
    .then((response) => {
      let movies = response.data.Search;
      let output = ``;
      $.each(movies, (index, movie) => {
        output += `
              <img src="${movie.Poster}">
              <h1>${movie.Title}</h1>
        `;
      });
      $("#movies").html(output);
    })
    .catch((err) => {
      console.log(err);
    });
}

function movieSelected(id) {
  sessionStorage.setItem("movieId", id);
  window.location = "movie.html";
  return false;
}
