import { firestore } from "../firebaseConfig.js"
import { addDoc, collection, onSnapshot } from "firebase/firestore"


let dbRef = collection(firestore, "posts")

export const PostStatusFunction = (status) => {
    let object = {
        status: status
    }
    addDoc(dbRef, object)
        .then((res) => {
            console.log("Document has been added Successfully")
        })
        .catch((error) => {
            console.log(error);

        })
}

export const GetPostsFunction = (setAllPosts) => {
    onSnapshot(dbRef, (response) => {
        setAllPosts(response.docs.map((docs) => {
            return { ...docs.data(), id: docs.id }
        }))
    })
} 
