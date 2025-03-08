import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "quiz-app-20b27", appId: "1:947663296951:web:286dcd421570a9098d3032", storageBucket: "quiz-app-20b27.firebasestorage.app", apiKey: "AIzaSyCT6Wn7BvFXbHMcTSP6xyVGexqI54Y0I0Q", authDomain: "quiz-app-20b27.firebaseapp.com", messagingSenderId: "947663296951" })), provideFirestore(() => getFirestore())]
};
