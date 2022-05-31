import { collection, getDocs, query, where, deleteDoc } from "firebase/firestore";
import { db } from "./firebase.js";

const jsonToFirestore = async () => {
  try {
    const q = query(collection(db, "products"), where("brand", "==", "Slazenger"));
    const querySnapshot = await getDocs(q);
    
    querySnapshot.forEach(async (doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      await deleteDoc(doc.ref);
      console.log('Delete Success');
      
    });
  } catch (error) {
    console.log(error);
  }
}

await jsonToFirestore();