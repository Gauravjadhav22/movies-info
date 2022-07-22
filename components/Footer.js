import {BsFacebook} from "react-icons/bs"
import {FiTwitter} from "react-icons/fi"
import {AiOutlineYoutube,AiOutlineInstagram} from "react-icons/ai"

const Footer = () => {
  return (
    <div className="px-4 py-2 bg-content-col flex justify-around font-medium text-lg">
      <div className="py-2 my-2 ">
        <h2>contact us :- +9185412563700</h2>
        <h2>mail us :- moviesInfo@moviesinfo.com</h2>
      </div>

      <div className="py-2 my-2 ">
        <p>
          --movies info--
          <br />
          here you will get info about movies such as <br /> rating year actors
          and summary.
        </p>
      </div>

      <div className="py-2 ">
        follow us -
        <ul className="list-none leading-12 cursor-pointer">
          <li className="">
            {" "}
            <div>{<BsFacebook />}</div> <h2>@moviesINfo</h2>
          </li>
          <li className="">
            {" "}
            <div>{<AiOutlineInstagram />}</div> <h2>@moviesINfo</h2>
          </li>
          <li className="">
            {" "}
            <div>{<FiTwitter />}</div> <h2> &nbsp; @moviesInfoss</h2>
          </li>
          <li className="">
            {" "}
            <div>{<AiOutlineYoutube />}</div>{" "}
            <h2> &nbsp; &nbsp;moviesUpdates</h2>
          </li>
        </ul>
      </div>
    </div>
  );
};


export default Footer;