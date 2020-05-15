import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { chatboxOutline, gridOutline,home,personOutline, } from 'ionicons/icons';
import Home from './pages/home';
import Categories from './pages/categories';
import Chats from './pages/chats';
import MyAccount from './pages/myaccount';

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
          <Route path="/home" component={Home} exact={true} />
          <Route path="/categories" component={Categories} exact={true} />
          <Route path="/chats" component={Chats} />
          <Route path="/myaccount" component={MyAccount} />
          <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
          <IonIcon size="small" icon={home}/>
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
