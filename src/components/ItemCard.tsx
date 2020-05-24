import React from 'react'
import { IonThumbnail, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';


class ItemCard extends React.Component<any,any>{


    render(){
        const {item} = this.props
        return(
            <IonCard style={{margin:'0'}}>
                <img src={item.image} />
          
          
          <IonCardHeader>
            <IonCardSubtitle>{item.name}</IonCardSubtitle>
            Rs. {item.price}


          </IonCardHeader>
          
        </IonCard>
            
           
        )
    }
}

export default ItemCard