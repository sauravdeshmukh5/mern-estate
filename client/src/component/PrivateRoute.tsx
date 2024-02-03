import { connect } from "react-redux";
import { RootState } from "../redux/store";
import { Outlet, Navigate } from "react-router-dom";
type PrivateRouteProps = ReturnType<typeof mapStateToProps>;

function PrivateRoute(props: PrivateRouteProps) {
  return props.user.currentUser ? <Outlet /> : <Navigate to={'sign-in'}/>
}

function mapStateToProps(state: RootState) {
  return {
    user: state.user,
  };
}
export default connect(mapStateToProps)(PrivateRoute);
