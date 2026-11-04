function generateMovieObject(title, director, rating) {
  const movie = {
    title: title,
    director: director,
    rating: rating,
    isPopular: function () {
      if (movie.rating >= 8) {
        return "Popular";
      } else if (movie.rating >= 5 && movie.rating <= 7.9) {
        return "Average";
      } else if (movie.rating < 5) {
        return "Not recommended";
      } else return "NaN";
    },
  };
  return movie;
}

const movie1 = generateMovieObject(
  "Film 2: Electric Boogaloo",
  "Micheal Michealsson",
  6,
);
const movie2 = generateMovieObject(
  "Live Action 3: The Saxon is free",
  "Jack Jacksson",
  8.1,
);

function displayMovieDetails(moviename) {
  for (let key in moviename) {
    if (
      typeof moviename[key] == "string" ||
      typeof moviename[key] == "number"
    ) {
      console.log(moviename[key]);
    }
  }
  console.log(moviename.isPopular());
}

displayMovieDetails(movie1);
