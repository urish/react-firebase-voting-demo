import React, { Suspense } from 'react';
import './App.css';
import Playgrounds from './Playgrounds';
import { FirebaseAppProvider } from 'reactfire';
import { firebaseConfig } from './firebaseConfig';

function App() {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Playgrounds />
        </Suspense>
      </div>
    </FirebaseAppProvider>
  );
}

export default App;
