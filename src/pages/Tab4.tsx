import {
  IonContent,
  IonHeader, IonInput, IonItem, IonLabel, IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon
} from '@ionic/react';
import {person} from 'ionicons/icons'
import ExploreContainer from '../components/ExploreContainer';
import './style/Tab4.scss';

// SQLITE IMPORTS
import {SQLite, SQLiteObject} from "@awesome-cordova-plugins/sqlite"
import {construct} from "ionicons/icons";


const Tab4: React.FC = () => {
  /*
    SQLite.create({
      name: 'data.db',
      location : 'default'
    }).then((db : SQLiteObject) => {
      db.executeSql('creat table Test(id int)', [])
        .then(() =>console.log('Executed SQL'))
        .catch(e => console.log(e))
    })
  */
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Test</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <div className={'flex-box'}>
            <IonItem lines={'none'}>
              <IonIcon icon={person} slot={'start'} className={'icon'}/>
              <IonLabel position={'stacked'} className={'label-input'}>Nom d'utilisateur</IonLabel>
              <IonInput className={'input'}></IonInput>
            </IonItem>
          </div>
        </IonList>
      </IonContent>
    </IonPage>
  )
}

export default Tab4;