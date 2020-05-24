import React, { useState } from 'react';
import { IonToolbar, IonSearchbar } from '@ionic/react';
import './SearchBar.css';

const SearchBar: React.FC = () => {
    const [searchText, setSearchText] = useState('');
    return (
        <IonToolbar>
            <IonSearchbar
                class="search"
                value={searchText}
                onIonChange={(e) => setSearchText(e.detail.value!)}
                placeholder="Search for laptops, cycles..."
            />
        </IonToolbar>
    );
};

export default SearchBar;
