export async function getMovieService() {
  const movie = await fetch("https://movie-api-get-only-bmc3.vercel.app/api", {
    cache: "no-store",
  });
  const data = await movie.json();
  //console.log(data);
  return data;
}

export async function getMovieActionService() {
  const movie = await fetch(
    "https://movie-api-get-only-bmc3.vercel.app/api?genre=Action",
    { cache: "no-store" }
  );
  const data = await movie.json();
  return data;
}

export async function getMovieDramaService() {
  const movie = await fetch(
    "https://movie-api-get-only-bmc3.vercel.app/api?genre=Drama",
    { cache: "no-store" }
  );
  const data = await movie.json();
  return data;
}

export async function getMovieScienceService() {
  const movie = await fetch(
    "https://movie-api-get-only-bmc3.vercel.app/api?genre=Science Fiction",
    { cache: "no-store" }
  );
  const data = await movie.json();
  return data;
}

export async function getMovieByIdService(id) {
  const movie = await fetch(
    `https://movie-api-get-only-bmc3.vercel.app/api/${id}`
  );
  const data = await movie.json();
  return data;
}
