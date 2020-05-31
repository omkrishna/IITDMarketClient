import React from "react";
import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
} from "@ionic/react";
import HeaderCard from "../../components/HeaderCard/HeaderCard";
import { RouteComponentProps } from "react-router";

const chats: React.FC<RouteComponentProps> = (props) => {
  return (
    <IonPage>
      <IonContent>
        <IonHeader style={{ padding: 0 }}>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/" />
            </IonButtons>
            <IonTitle>Chats</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default chats;
