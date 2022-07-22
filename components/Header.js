const API_KEY = process.env.API_KEY;
import react, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { ImSearch } from "react-icons/im";
const Header = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    if (e.target.value) {
      setQuery(e.target.value);
    }
    if (e.key === "Enter") {
      router.push(`/?s=${query}`);
    }
  };

  const handleClick = () => {
    router.push(`/?s=${query}`);
  };
  return (
    <div className="header-main bg-content-col text-white ">
      <h1 className="text-4xl font-bold text-white">MOVIE&apos;S-INFO</h1>
      <div className="py-12 inline-grid items-center">
        <p className="text-xl text-center ">
          To get info search any movies or webseries name..
        </p>
      
      </div>
      <div className="absolute my-0 mx-40 flex items-center  bg-midnight ">
          <input
            onChange={handleChange}
            onKeyPress={handleChange}
            className="p-2 text-black"
            type="text"
            placeholder="movie name ..."
          />
          <ImSearch
            onClick={handleClick}
            className="px-1 text-white text-3xl hover:text-search-2 cursor-pointer transition ease-in "
          />
        </div>
    </div>
  );
};

export default Header;
