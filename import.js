// Imports
const firestoreService = require('firestore-export-import');
const serviceAccount = require('./serviceAccount.json');

// JSON To Firestore
const jsonToFirestore = async () => {
  try {
    console.log('Initialzing Firebase');
    await firestoreService.initializeFirebaseApp(serviceAccount);
    console.log('Firebase Initialized');

    const options = {
      // refs: ['refKey'],
    }

    await firestoreService.restore('./JSONs/2022-05-31 - Products Slezenger.json', options);
    console.log('Upload Success');
  }
  catch (error) {
    console.log(error);
  }
};

jsonToFirestore();