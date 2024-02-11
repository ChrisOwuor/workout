import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className=" w-5/6 mx-auto my-3 pl-14">
      <div className=" ">
        <Link to="/">
          <h1 className="text-3xl font-semibold">Workout Buddy</h1>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
