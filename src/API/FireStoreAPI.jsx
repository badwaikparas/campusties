import { firestore } from "../firebaseConfig.js"
import { addDoc, collection, onSnapshot } from "firebase/firestore"

let postRef = collection(firestore, "posts")
let userRef = collection(firestore, "users")

export const PostStatusFunction = (object) => {

    addDoc(postRef, object)
        .then((res) => {
            // console.log(JSON.stringify(object));
            console.log("Document has been added Successfully")
        })
        .catch((error) => {
            console.log(error);

        })
}

export const GetPostsFunction = (setAllPosts) => {
    onSnapshot(postRef, (response) => {
        setAllPosts(response.docs.map((docs) => {
            return { ...docs.data(), id: docs.id }
        }))
    })
}

export const PostUserData = (object) => {
    addDoc(userRef, object)
        .then(() => { })
        .catch((error) => {
            console.log(error);
        })
}

export const GetCurrentUser = (setCurrentUser) => {
    let currEmail = localStorage.getItem("userEmail")
    onSnapshot(userRef, (response) => {
        setCurrentUser(
            response.docs
                .map((docs) => {
                    return { ...docs.data(), userId: docs.id }
                })
                .filter((item) => {
                    return item.email === currEmail;
                })[0]
        )
    })
}
