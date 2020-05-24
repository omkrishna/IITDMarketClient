import React from 'react';
import { IonContent,IonLabel, IonHeader,IonSegment, IonSegmentButton, IonPage, IonFab,IonFabButton,IonIcon, IonToolbar, IonFabList, IonGrid, IonRow, IonFooter } from '@ionic/react';
import { add, createOutline } from 'ionicons/icons';
import './home.css';
import SearchBar from '../components/SearchBar'
import HeaderCard from '../components/HeaderCard'
import ItemList from '../components/ItemList'
import CategoryCard from '../components/CategoryCard'

class home extends React.Component{

  state = {
    category : 'all'
  }

  render(){
  return (
    <IonPage>
      <IonHeader translucent className="ion-no-border">
        <SearchBar />

      </IonHeader>

      <IonContent>
      <HeaderCard />

      

      <IonToolbar style={{marginBottom:'1em'}}>
        <IonSegment scrollable onIonChange={e => this.setState({category:e.detail.value})} color="primary">
          <IonSegmentButton value="all">
            <IonLabel>All</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="laptop">
            <IonLabel>Laptops</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="mobile">
            <IonLabel>Mobiles</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="bicycle">
            <IonLabel>Bicycles</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="book">
            <IonLabel>Books</IonLabel>
          </IonSegmentButton>
          
        </IonSegment>
        </IonToolbar>

      <ItemList category={this.state.category} />
     
      
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>
          <IonFabList side="start">
              <IonIcon class="ad" size="large" icon={createOutline}/>
              <IonLabel>Post an Ad</IonLabel>
          </IonFabList>
        </IonFab>


        </IonContent>
        
    </IonPage>
  )};
};

export default home;
