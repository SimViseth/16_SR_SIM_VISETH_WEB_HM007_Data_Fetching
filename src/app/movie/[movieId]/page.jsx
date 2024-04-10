const { getMovieByIdService } = require("@/services/movie.service");

const star = (rating) => {
  const stars = [];
  const roundedRating = Math.round(rating * 2) / 2;

  for (let i = 1; i <= 5; i++) {
    if (i <= roundedRating) {
      stars.push(
        <span key={i} className="text-yellow-500">
          &#9733;
        </span>
      );
    } else if (i - 0.5 === roundedRating) {
      stars.push(
        <span key={i} className="text-yellow-500">
          &#9734;
        </span>
      );
    } else {
      stars.push(
        <span key={i} className="text-yellow-500">
          &#9733;
        </span>
      );
    }
  }

  return stars;
};

const MovieDetail = async ({ params }) => {
  const data = await getMovieByIdService(params.movieId);
  return (
    <main>
      <div className="bg-red-950 py-8 h-[619px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={data.payload.image}
                  alt="Product Image"
                />
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {data.payload.director}
              </h2>
              <p className="text-white text-sm mb-4">{`${data.payload.runtime} minutes`}</p>
              <p className="text-white text-sm italic">Action</p>
              <p className="text-white">{star(data.payload.rating)}</p>
              <div className="mt-5">
                <span className="text-2xl font-bold text-gray-700 dark:text-gray-300">
                  {data.payload.movie_title}
                </span>
                <span className="text-2xl font-bold text-gray-700 dark:text-gray-300 ml-2">
                  {`(${data.payload.released_year})`}
                </span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {data.payload.description}
                </p>
              </div>
              <div>
                <p className="text-white mt-12">
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                    hour12: true,
                  }).format(new Date(data.payload.posted_at))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MovieDetail;
