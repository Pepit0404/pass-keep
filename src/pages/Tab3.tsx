import {IonContent, IonHeader, IonInput, IonLabel, IonList, IonPage, IonTitle, IonToolbar, IonIcon} from '@ionic/react';
import {eyeOutline, eyeOffOutline} from "ionicons/icons";
import ExploreContainer from '../components/ExploreContainer';
import './style/Tab3.css';
import {useState} from "react";
//import anything = jasmine.anything;

const Tab3: React.FC = () => {
  const [passwordType, setPasswordType] = useState<any>("password");
  const [eye, setEye] = useState(eyeOutline)
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className={'test'}>Parametre</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList >
          <IonLabel className={'label-password'} position={"fixed"}>Mot de passe Principal</IonLabel>
          <div className={"div-input"}>
            <IonInput className={"input-password"} type={passwordType} placeholder={'Password'}></IonInput>
            <IonIcon className={"eye-icon"} icon={eye} onClick={() => {
              passwordType === "password" ? setPasswordType("text") : setPasswordType("password");
              passwordType === "text" ? setEye(eyeOutline) : setEye(eyeOffOutline);
            }}/>
          </div>
        </IonList>
        <ExploreContainer name="Parametre page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
