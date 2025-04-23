import { firestore } from "../firebaseConfig.js"
import { addDoc, collection } from "firebase/firestore"

async function addUserNetwork(object) {
    try {
      const docRef = await addDoc(collection(firestore, "userNetworks"),object);
    //   console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  export {addUserNetwork}
  