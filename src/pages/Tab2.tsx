import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon
} from '@ionic/react';
import {copyOutline, reloadOutline} from 'ionicons/icons'
import ExploreContainer from '../components/ExploreContainer';
import './style/Tab2.scss';
import React, {useState} from "react";

const Tab2: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [vue, setVue] = useState(true)
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Generateur</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Generateur page"/>
        <div className={"flexbox test"}>
          <IonItem className={'random-pass'}>
            <IonInput disabled={true} type={'text'} value={"LJ7t8haq4VQ8"} ></IonInput>
          </IonItem>
          <IonIcon icon={copyOutline} className={'icon'} />
          <IonIcon icon={reloadOutline} className={'icon'} />
        </div>
        <div className={'test'}>
          <p className={'un'}>Coucou 1</p>
          <p className={'deux'}>coucou 2</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
