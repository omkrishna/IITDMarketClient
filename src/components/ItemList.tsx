import React from 'react'
import { IonCol,IonRow } from '@ionic/react';
import ItemCard from './ItemCard'


class ItemList extends React.Component<any,any>{
    state = {
        items : [
          { id:1, name:'Asus Tuf Gaming', price:40000, category:'laptop',image:'/images/laptop.jfif'},
          { id:2, name:'Macbook Air', price:60000, category:'laptop',image:'/images/laptop.jfif'},
          { id:3, name:'Hero Thunderbird', price:4000, category:'bicycle',image:'/images/bicycle.jfif'},
          { id:4, name:'Decathlon BTWX 100', price:5000, category:'bicycle',image:'/images/bicycle.jfif'},
          { id:5, name:'Samsung S10e', price:25000, category:'mobile',image:'/images/mobile.jfif'},
          { id:6, name:'Vivo V15', price:14000, category:'mobile',image:'/images/mobile.jfif'},
          { id:7, name:'Kurl On memory foam ', price:2000, category:'matteress',image:'/images/matteress.jfif'},
          { id:8, name:'SleepX', price:1500, category:'matteress',image:'/images/matteress.jfif'},
          { id:9, name:'Order of the phoenix', price:300, category:'book',image:'/images/book.jfif'},
          { id:10, name:'Differential Equation - Kreyzig' , price:200, category:'book',image:'/images/book.jfif'}
        ]
    }

    render(){
        const itemList = this.state.items.map(item => {
            if(this.props.category=='all'){
                return (
                    <IonCol size="6">
                    <ItemCard item={item} />
                    </IonCol>
                )
            }else if(this.props.category==item.category){
                return (
                    <IonCol size="6">
                    <ItemCard item={item} />
                    </IonCol>
                )
            }
        })

        return(
            <IonRow>
                {itemList}
            </IonRow>
            
        );
    }
    
}
export default ItemList;