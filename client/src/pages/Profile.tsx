import { connect } from "react-redux";
import { RootState } from "../redux/store";


type ProfileProps = ReturnType<typeof mapStateToProps>;
function Profile(props:ProfileProps) {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <img src={props.user.currentUser.avatar} alt="profile" className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"/>
        <input type="text" placeholder="username" className="border p-3 rounded-lg" id="username"/>
        <input type="email" placeholder="email" className="border p-3 rounded-lg" id="email"/>
        <input type="password" placeholder="password" className="border p-3 rounded-lg" id="password"/>
        <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80">update</button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete Account</span>
        <span className="text-red-700 cursor-pointer">Sign out</span>
      </div>
    </div>
  )
}


function mapStateToProps(state: RootState) {
  return {
    user: state.user,
  };
}
export default connect(mapStateToProps)(Profile);