import react, { useState } from "react";
import { useRouter } from "next/router";
const Nav = () => {
  const [cat, setCat] = useState("");
  const router = useRouter();
  const handleClick = (val) => {
    console.log(cat);
    router.push(`/?s=${cat}`)
  };

  return (
    <ul className="mx-1 overflow-scroll text-white flex justify-between text-lg">
      <li onClick={handleClick} onMouseOver={(e) => setCat("Avengers")}>
        Avengers
      </li>
      <li onClick={handleClick} onMouseOver={(e) => setCat("Fast_&_furious")}>
        Fast_&_furious
      </li>
      <li onClick={handleClick} onMouseOver={(e) => setCat("Vikings")}>
        Vikings
      </li>
      <li onClick={handleClick} onMouseOver={(e) => setCat("Sherlock_holmes")}>
        Sherlock_holmes
      </li>
      <li onClick={handleClick} onMouseOver={(e) => setCat("Game_of_thrones")}>
        Game_of_thrones
      </li>
      <li onClick={handleClick} onMouseOver={(e) => setCat("Harry_potter")}>
        Harry_potter
      </li>
      <li onClick={handleClick} onMouseOver={(e) => setCat("Enola_holmes")}>
        Enola_holmes
      </li>
      <li onClick={handleClick} onMouseOver={(e) => setCat("Batman")}>
        Batman
      </li>

      <li onClick={handleClick} onMouseOver={(e) => setCat("Stranger_things")}>
        Stranger_things
      </li>
      <li onClick={handleClick} onMouseOver={(e) => setCat("Wanda_vision")}>
        Wanda_vision
      </li>
      <li onClick={handleClick} onMouseOver={(e) => setCat("Thor")}>
        Thor
      </li>
      <li onClick={handleClick} onMouseOver={(e) => setCat("Iron_man")}>
        Iron_man
      </li>
      <li onClick={handleClick} onMouseOver={(e) => setCat("Pirates of the Caribbean")}>
Pirates of the Caribbean

      </li>
  
    </ul>
  );
};
export default Nav;
