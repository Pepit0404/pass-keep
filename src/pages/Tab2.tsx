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
  IonIcon,
  IonToggle,
  IonRange,
  useIonToast
} from '@ionic/react';
import {RangeValue} from '@ionic/core';
import {copyOutline, reloadOutline} from 'ionicons/icons';
import './style/Tab2.scss';
import React, {useState} from "react";
import { Clipboard } from '@awesome-cordova-plugins/clipboard';

var setting = {
    'upper': true,
    'number': true,
    'special': true,
    'length': 12
}

const characters = {
  'simple': 'abcdefghijklmnopqrstuvwxyz',
  'upper': 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  'number': '0123456789',
  'special': '!#$%&?@!*^',
};

function generate() {
  var result = '';
  var chars = characters['simple']
  if (setting.upper) {
    chars += characters['upper']
  }
  if (setting.number) {
    chars += characters['number']
  }
  if (setting.special) {
    chars += characters['special']
  }
  var charsLength = chars.length;
  for (var i = 0; i < setting.length; i++) {
    result += chars.charAt(Math.floor(Math.random() * charsLength))
  }
  return result;
}

const GenPass: React.FC = () => {
  const [password, setPassword] = useState(generate());
  const [presentToast] = useIonToast();
  return (
    <div className={"flexbox pass-div"}>
      <IonItem className={'random-pass'}>
        <IonInput disabled={true} type={'text'} value={password}></IonInput>
      </IonItem>
      <IonIcon icon={copyOutline} className={'icon'} onClick={() => {
        presentToast({
          message: "Mot copié",
          duration: 1500,
          position: 'bottom',
          cssClass: 'copyMessage'
        })
        Clipboard.copy(password);
      }}/>
      <IonIcon icon={reloadOutline} className={'icon'} onClick={(e) => {
        setPassword(generate());
      }}/>
    </div>
  )
}
const SizePass: React.FC = () => {
  function sett (toto: any) {
    setting.length = toto;
  }
  const [value, setValue] = useState<RangeValue>(12);
  return (
    <>
      <IonRange onIonChange={({detail}) => setValue(detail.value)} onIonKnobMoveEnd={({detail}) => {
        sett(detail.value);
      }} min={8} max={64} value={value} pin={true}></IonRange>
    </>
  )
}

function ToggleSett(props: any) {
  return (
    <IonList lines={'none'}>
      <IonItem className={"item-toggle"}>
        <IonLabel className={"toggle-label"}>{props.name}</IonLabel>
        <IonToggle className={props.its} slot={'end'} checked={true} onIonChange={(e) => {
          const is = e.target.classList[0];
          if (is==='upper') {e.detail.checked === true ? setting.upper = true : setting.upper = false}
          if (is==='number') {e.detail.checked === true ? setting.number = true : setting.number = false}
          if (is==='special') {e.detail.checked === true ? setting.special = true : setting.special = false}
        }}></IonToggle>
      </IonItem>
    </IonList>
  )
}

const Tab2: React.FC = () => {
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
        <GenPass/>
        <SizePass/>
        <ToggleSett name="Majuscule" its={"upper"}></ToggleSett>
        <ToggleSett name="Chiffre" its={"number"}></ToggleSett>
        <ToggleSett name="Caractère Spécial" its={'special'}></ToggleSett>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
