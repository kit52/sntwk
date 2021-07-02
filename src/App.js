import React from "react";
import { BrowserRouter, HashRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Nav from "./components/Nav/Nav";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import { initializedSucsess } from "./redux/app-reducer";
import { connect } from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";
import { Suspense } from "react";
import firebase from "firebase/app";
import { firebaseConfig } from "./index";
const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);

class App extends React.Component {
  componentDidMount() {
    // firebase.initializeApp(firebaseConfig);
  }
  render() {
    // console.log(this.props);
    // if (!this.props.initialized) return <Preloader />;

    return (
      <HashRouter>
        <div className="app-wrapper">
          <HeaderContainer />
          <Nav />
          <div className="app-wrapper-content">

            <Redirect from="/" to="/Profile" />
            <Route
              path="/Dialogs"
              render={() => (
                <Suspense fallback={<Preloader />}>
                  <DialogsContainer />
                </Suspense>
              )}
            />
            <Route
              path="/Profile/:userId?"
              component={() => <ProfileContainer />}
            />
            <Route path="/Users" render={() => <UsersContainer />} />
            <Route path="/Login" render={() => <Login />} />

          </div>
        </div>
      </HashRouter>
    );
  }
}
// const mapStateToProps = (state) => {
//   return {
//     initialized: state.app.initialized,
//   };
// };
export default App;
// export default connect(mapStateToProps, { initializedSucsess })(App);
