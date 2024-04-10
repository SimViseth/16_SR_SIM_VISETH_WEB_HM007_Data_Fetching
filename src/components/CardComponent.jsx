import React from "react";
import { getMovieService } from "@/services/movie.service";
import Link from "next/link";

const CardComponent = async () => {
  const movieData = await getMovieService();

  return (
    <div>
      <div className="overflow-x-auto">
        <div className="carousel carousel-end rounded-box gap-4 flex flex-nowrap overflow-x-scroll remove_scroll">
          {movieData.payload.map((data) => (
            <Link
              key={data.movie_id}
              className="p-4 border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex-none bg-gray-200 w-[300px]"
              href={`/movie/${data.movie_id}`}
            >
              <img
                src={data.image}
                className="shadow rounded-lg overflow-hidden border"
              />
              <div className="mt-8">
                <h4 className="font-bold text-xl line-clamp-1">
                  {data.movie_title}
                </h4>
                <p className="mt-2 text-gray-600 line-clamp-2">
                  {data.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
