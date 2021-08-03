import React from "react";
import { HashRouter, Redirect, Route } from "react-router-dom";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import Preloader from "./components/common/Preloader/Preloader";
import { Suspense } from "react";
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


          </div>
        </div>
        <Route path="/Login" render={() => <Login />} />
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
