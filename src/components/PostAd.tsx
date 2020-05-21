import React, { useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import './PostAdd.css'

import {  IonHeader, IonTitle, IonToolbar,IonSelect,IonSelectOption, IonInput, IonItem, IonLabel, IonList, IonButton, IonBackButton } from '@ionic/react';


const PostAd: React.FC = () => {

    const [name, setName] = useState<string>();
    const [date, setDate] = useState<string>();
    const [condition, setCondition] = useState<string>();
    const [price, setPrice] = useState<string>();
    const [category, setCategory] = useState<string>();
    const [description, setDescription] = useState<string>();
  
    return (
          <div >
              <IonToolbar>
                  <IonTitle color="primary">Post Your Ad </IonTitle>
              </IonToolbar>
              <div className="form">
              <IonList >
                  <IonItem >
                      <IonLabel color="medium"  position="floating">Name of The Product</IonLabel>
                      <IonInput value={name} onIonChange={e => setName(e.detail.value!)} required></IonInput>
                  </IonItem>
                  <IonItem>
                      <IonLabel color="medium"  position="floating">Tentative Date of Purchase</IonLabel>
                      <IonInput type="text" value={date} onIonChange={e => setDate(e.detail.value!)} required></IonInput>
                  </IonItem>
                  <IonItem>
                      <IonLabel color="medium"  position="floating">Condition</IonLabel>
                      <IonInput value={condition} onIonChange={e => setCondition(e.detail.value!)} required></IonInput>
                  </IonItem>
                 
              <IonItem>
                      <IonLabel color="medium"  position="floating">Category</IonLabel>
                      <IonSelect value={category} okText="Select" cancelText="Dismiss" onIonChange={e => setCategory(e.detail.value)}>
                      <IonSelectOption>Laptops</IonSelectOption>
                      <IonSelectOption>Mobile</IonSelectOption>
                      <IonSelectOption>Books</IonSelectOption>
                      <IonSelectOption>Cycle</IonSelectOption>
                      <IonSelectOption>Miscallaneous</IonSelectOption>
                      </IonSelect>
                  </IonItem>
                  <IonItem>
                      <IonLabel color="medium"  position="floating">Asking Price</IonLabel>
                      <IonInput value={price} onIonChange={e => setPrice(e.detail.value!)} required></IonInput>
                  </IonItem>
                  <IonItem>
                      <IonLabel color="medium"  position="floating">Description</IonLabel>
                      <IonInput value={description} onIonChange={e => setDescription(e.detail.value!)} required></IonInput>
                  </IonItem>
                  <IonItem>
                    
             <input type="file"/>
                  </IonItem>
             
              </IonList>
              </div>
              <div className="btn">
              <IonButton class="regbuttons" shape="round" expand="full" color="primary">Post</IonButton>
              </div>
          </div>
          );
  };
  
export default PostAd;