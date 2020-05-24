import React from 'react'
import { Route } from 'react-router-dom';
import {  IonCard, IonCardHeader, IonCardSubtitle,IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';



class ItemCard extends React.Component<any,any>{

    render(){
        const {item} = this.props
        return(
          <div>
              
        
            <IonCard style={{margin:'0'}} href='/itemdetail' >
                <img src={item.image} />
                <IonCardHeader>
                  <IonCardSubtitle>{item.name}</IonCardSubtitle> Rs. {item.price}
                </IonCardHeader>
            </IonCard>
        
        </div>
        )
    }
}

export default ItemCard;