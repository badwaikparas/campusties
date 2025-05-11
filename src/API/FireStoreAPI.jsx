import { firestore } from "../firebaseConfig.js"
import { addDoc, collection, onSnapshot, query, where, getDocs, updateDoc } from "firebase/firestore"

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

export const PostCurrentUserProfileImgUrl = async (url, delete_url) => {
    let currEmail = localStorage.getItem("userEmail")
    const q = query(userRef, where("email", "==", currEmail));
    const querySnapshot = await getDocs(q);
    const docSnapshot = querySnapshot.docs[0];
    await updateDoc(docSnapshot.ref, {
        profilePictureUrl: url,
        profilePictureDeleteUrl: delete_url
    });
    console.log("Profile picture URL updated successfully.");
}
export const PostCurrentUserProfileCoverImgUrl = async (url, delete_url) => {
    let currEmail = localStorage.getItem("userEmail")
    const q = query(userRef, where("email", "==", currEmail));
    const querySnapshot = await getDocs(q);
    const docSnapshot = querySnapshot.docs[0];
    await updateDoc(docSnapshot.ref, {
        profileCoverPictureUrl: url,
        profileCoverPictureDeleteUrl: delete_url
    });
    console.log("Profile picture URL updated successfully.");
}
