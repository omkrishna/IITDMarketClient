import React from "react";
import { Redirect, Route } from "react-router-dom";
import axios from "axios";
import qs from "querystring";
import { connect } from "react-redux";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  chatboxOutline,
  gridOutline,
  homeOutline,
  personOutline,
} from "ionicons/icons";
import Home from "./pages/home/home";
import Categories from "./pages/categories/categories";
import Chats from "./pages/chats/chats";
import MyAccount from "./pages/myaccount/myaccount";
/* new imports */
import Register from "./pages/register/register";
import Health from "./pages/Health/Health";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import PostAd from "./components/PostAd/PostAd";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { authSuccess } from "./store/actions/index";

class App extends React.Component<any, any> {
  componentDidMount() {
    const eventUser = new EventSource("http://localhost:5000/streamUser");
    eventUser.onmessage = (e) => this.props.changeUser(e.data);
    const data = {
      username: "ssh",
      password: "12345",
    };
    axios
      .post("http://localhost:5000/login", qs.stringify(data))
      .then((res) => console.log(res))
      .catch((err) => console.log(err.response));
  }
  render() {
    return (
      <IonApp>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route path="/register" component={Register} />
              <Route path="/healthz" component={Health} />
              <Route path="/home" component={Home} />
              <Route path="/categories" component={Categories} />
              <Route path="/chats" component={Chats} />
              <Route path="/myaccount" component={MyAccount} />
              <Route path="/postad" component={PostAd} />
              <Route path="/itemdetail" component={ItemDetail} />
              <Redirect to="/home" />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="home" href="/home">
                <IonIcon size="small" icon={homeOutline} />
                <IonLabel>Home</IonLabel>
              </IonTabButton>
              <IonTabButton tab="categories" href="/categories">
                <IonIcon size="small" icon={gridOutline} />
                <IonLabel>Categories</IonLabel>
              </IonTabButton>
              <IonTabButton tab="chats" href="/chats">
                <IonIcon size="small" icon={chatboxOutline} />
                <IonLabel>Chats</IonLabel>
              </IonTabButton>
              <IonTabButton tab="myaccount" href="/myaccount">
                <IonIcon size="small" icon={personOutline} />
                <IonLabel>My Account</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </IonApp>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeUser: (data) => dispatch(authSuccess(data)),
});

export default connect(null, mapDispatchToProps)(App);
