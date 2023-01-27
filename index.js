const nameMovie = document.getElementById("movie");
const showButton = document.getElementById("button12");
const myYear = document.getElementById("yrr");
// console.log(showButton)

// show movies name
const getMoviesNames = async (n) => {
  console.log("kkk", n.value);
  const resp = await fetch(
    `http://www.omdbapi.com/?s=${n.value}&apikey=9cd1622f`
  );
  const data = await resp.json();
//   const movieArr=data.Search;
//   movieArr.map(addMovies);
  console.log(data);

  const year = data["Search"];
  const showYear = year.filter((ad) => {
    if (ad["Year"] === myYear.value) {
      return ad;
    }
  });
  console.log(showYear);
  if (showYear!= "") {
      const movieArr=showYear;
      movieArr.map(addMovies);

    }else{
        const movieArr=data.Search;
        movieArr.map(addMovies);
    }
};
showButton.addEventListener("click", () => {
  getMoviesNames(nameMovie);
});
// getMoviesNames();

function addMovies(data) {
    let show_movie_detail=document.getElementById('movieD');
    const movieDetails=
    `
    <div class="frame">
    <img src="${data.Poster}" alt="image" class="image" />
    <h1>${data.Title}</h1>
    <h3>${data.Year}
    </div>

    `
    show_movie_detail.insertAdjacentHTML("afterbegin", movieDetails)
}


