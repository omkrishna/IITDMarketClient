import React from 'react';
import {
    IonContent,
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle,
} from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import CategoryCard from '../../components/CategoryCard/CategoryCard';

const categories: React.FC<RouteComponentProps> = () => {
    return (
        <IonPage>
            <IonHeader style={{ padding: 0 }}>
                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/" />
                    </IonButtons>
                    <IonTitle>Categories</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <CategoryCard />
            </IonContent>
        </IonPage>
    );
};

export default categories;
