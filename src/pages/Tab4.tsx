import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './style/Tab4.css';
import ButtonFab from '../components/Tab4/buttonFab';

// SQLITE IMPORTS
import {SQLite, SQLiteObject} from "@awesome-cordova-plugins/sqlite"
import {construct} from "ionicons/icons";


const Tab4: React.FC = () => {

  SQLite.create({
    name: 'data.db',
    location : 'default'
  }).then((db : SQLiteObject) => {
    db.executeSql('creat table Test(id int)', [])
      .then(() =>console.log('Executed SQL'))
      .catch(e => console.log(e))
  })

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
        <ExploreContainer name="Test page"/>
        <ButtonFab/>
      </IonContent>
    </IonPage>
  )
}

export default Tab4;