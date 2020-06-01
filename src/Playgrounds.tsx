import React from 'react';
import firebase from 'firebase/app';
import { useFirestore, useFirestoreCollectionData, useAuth, useUser, AuthCheck } from 'reactfire';

interface IPlayground {
  id: string;
  name: string;
  url: string;
  image: string;
  votes: number;
}

export default function Playgrounds() {
  const auth = useAuth();
  const user = useUser<null>();
  const collection = useFirestore().collection('playgrounds');
  const playgrounds = useFirestoreCollectionData<IPlayground>(collection.orderBy('votes', 'desc'), {
    idField: 'id',
  });
  const vote = (
    collection: firebase.firestore.CollectionReference,
    id: string,
    newVotes: number
  ) => {
    collection.doc(id).update({ votes: newVotes });
  };
  const signIn = () => auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  const signOut = () => auth.signOut();
  return (
    <div>
      <AuthCheck
        fallback={
          <div>
            <div>Please sign-in to vote!</div>
            <button onClick={signIn}>Yes, I want to vote!</button>
          </div>
        }
      >
        <div>
          Hello, {user?.displayName}! <button onClick={signOut}>Sign out</button>
        </div>
      </AuthCheck>
      {playgrounds.map(({ id, name, url, image, votes }) => (
        <div className="card">
          <img src={image} alt={name} />
          {user && (
            <>
              <button onClick={() => vote(collection, id, votes + 1)}>👍</button>
              <button onClick={() => vote(collection, id, votes - 1)}>👎</button>
            </>
          )}
          <br />
          {name} - {votes}
        </div>
      ))}
    </div>
  );
}
