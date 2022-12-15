import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  useIonAlert
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './style/Tab1.css';
import {construct} from "ionicons/icons";
import {render} from "@testing-library/react";
import {useState} from "react";

const Tab1: React.FC = () => {
  const [presentAlert] = useIonAlert();
  const [test, setTest] = useState('');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mot de passe</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Mot de passe page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
