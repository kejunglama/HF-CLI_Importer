// Imports
const { backup } = require("firestore-export-import");
const firestoreService = require("firestore-export-import");
const serviceAccount = require("./serviceAccount.json");

// JSON To Firestore
const jsonToFirestore = async () => {
  try {
    console.log("Initialzing Firebase");
    await firestoreService.initializeFirebaseApp(serviceAccount);
    console.log("Firebase Initialized");

    // await firestoreService.restore("./JSONs/naminami.json");
    // console.log("Upload Success");

    // In your index.js


    const options = {
      // docsFromEachCollection: 10, // limit number of documents when exporting
      // refs: ['refKey', 'deep.level.key'], // reference Path
    }

    // Start exporting your data
    backup("products", options).then((data) =>
      console.log(JSON.stringify(data))
    );
  } catch (error) {
    console.log(error);
  }
};

jsonToFirestore();
