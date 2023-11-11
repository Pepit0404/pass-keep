import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonFab,
  IonFabButton,
  IonItem, IonLabel, IonList
} from '@ionic/react';
import {search, heart, heartDislike, ellipsisVertical, add} from 'ionicons/icons';
import './style/Tab1.scss';
import {Encrypt, Decrypt} from '../components/cryptHelp';
import {Machin} from '../components/StorageHelp';

const Bdd = new Machin();
Bdd.SetIn("Test", "toujours test")
console.log(Bdd.GetIn("Test"))
const liste = Bdd.listeAll();

const Tab1: React.FC = () => {
  console.log(Bdd.GetIn("Test"))
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mot de passe</IonTitle>
          <IonIcon slot='end' icon={search} className={'icon-head'}></IonIcon>
          <IonIcon slot='end' icon={heart} className={'icon-head'}></IonIcon>
          <IonIcon slot='end' icon={ellipsisVertical} className={'icon-head'}></IonIcon>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <IonItem>
            <IonLabel>{liste[0]}</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>{liste[1]}</IonLabel>
          </IonItem>
        </IonList>
        <IonFab  slot={"fixed"} vertical={"bottom"} horizontal={"end"}>
          <IonFabButton className={'button-add'}>
            <IonIcon icon={add}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
