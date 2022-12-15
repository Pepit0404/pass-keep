import {IonFab, IonFabButton, IonIcon} from '@ionic/react';
import {add} from "ionicons/icons";

import './style/buttonFab.css';

function ButtonFab() {
  return (
    <IonFab  slot={"fixed"} vertical={"bottom"} horizontal={"end"}>
      <IonFabButton>
        <IonIcon icon={add}></IonIcon>
      </IonFabButton>
    </IonFab>
  )
}

export default ButtonFab;