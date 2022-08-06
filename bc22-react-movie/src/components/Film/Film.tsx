import React from "react";
import { Movie } from "interfaces/movie";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {icon} from '@fortawesome/fontawesome-svg-core'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowRight)
interface Props {
  movie: Movie;
}
const Film: React.FC<Props> = ({ movie }) => {
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50 my-10">
      <div
        style={{
          background: `url(${movie.hinhAnh}) no-repeat url(https://picksum.photos/1000/200)`,
          backgroundPosition: "center",
          backgroundSize: "100%",
        }}
      >
        <img
          src={movie.hinhAnh}
          alt=""
          className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
        />
      </div>

      <div className="mt-6 mb-2">
        <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400 "></span>
        <h2 className="text-xl font-semibold tracking-wide text-center">
          {movie.tenPhim}
        </h2>
      </div>
      <p className="dark:text-gray-100">
        Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed
        feugiat mi. Etiam ut lacinia dui.
      </p>
      <div className="flex justify-center">
        <a href="" className="inline-flex text-center focus:ring focus:ring-violet-300 ">
          Đặt vé 
          <div className="px-5">
        <FontAwesomeIcon icon={faArrowRight} style={{color: "#1010b1"}}/>
        </div>
        </a>
       
        {/* <FontAwesomeIcon icon="solid fa-arrow-right" /> */}
      </div>
    </div>
  );
};

export default Film;
