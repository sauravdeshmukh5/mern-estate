import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";
import { connect } from "react-redux";

type HeaderProps = ReturnType<typeof mapStateToProps>;

function Header(props: HeaderProps) {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to={"/home"}>
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Saurav</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4 ">
          <Link to={"/home"}>
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>

          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              About
            </li>
          </Link>
          <Link to="/profile">
            {props.user.currentUser ? (
             
              <img  
                src={props.user.currentUser.avatar}
                alt=""
                className="rounded-full h-7 w-7 object-cover"
              />
             
            ) : (
              <li className="hidden sm:inline text-slate-700 hover:underline">
                Signin
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}

function mapStateToProps(state: RootState) {
  return {
    user: state.user,
  };
}
export default connect(mapStateToProps)(Header);
