import { Icon } from "ionicons/dist/types/components/icon/icon";
import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonContent,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonPage,
  IonSearchbar,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Page.css";
import React from "react";
import { informationCircleOutline } from "ionicons/icons";

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start" class="pageTitle">
            <IonMenuButton />
          </IonButtons>
          <IonTitle size="large" class="pageTitle">
            WeatherApp
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader></IonHeader>
        <IonCard>
          <IonCardHeader
            style={{
              fontSize: "large",
              fontWeight: "bold",
              display: "flex",
            }}
          >
            About App
          </IonCardHeader>

          <IonCardContent className="about-card">
            <p>
              This is my school project. A simple weather app that allows you to
              fetch the current weather of a selected city. The project is still
              under development, and new features are coming soon.
            </p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default About;
