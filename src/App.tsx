import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
    IonApp,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {
    chatboxOutline,
    gridOutline,
    homeOutline,
    personOutline,
} from 'ionicons/icons';
import Home from './pages/home/home';
import Categories from './pages/categories/categories';
import Chats from './pages/chats/chats';
import MyAccount from './pages/myaccount/myaccount';
/* new imports */
import RegisterForm from './components/RegisterForm/RegisterForm';
import Health from './pages/Health/Health';
import ItemDetail from './components/ItemDetail/ItemDetail';
import PostAd from './components/PostAd/PostAd';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Route exact path="/healthz" component={Health} />
                    <Route path="/home" component={Home} exact />
                    <Route path="/categories" component={Categories} exact />
                    <Route path="/chats" component={Chats} />
                    <Route path="/myaccount" component={MyAccount} exact />
                    <Route path="/register" component={RegisterForm} exact />
                    <Route path="/postad" component={PostAd} exact />
                    <Route path="/itemdetail" component={ItemDetail} exact />
                    <Route
                        path="/"
                        render={() => <Redirect to="/home" />}
                        exact
                    />
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

export default App;
