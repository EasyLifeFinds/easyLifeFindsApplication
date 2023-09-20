import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const Data = [
    { id: 1, name: "knife", frameLink: "", description: "best quality knifes", department: 1 },
    { id: 2, name: "Table", frameLink: "", description: "best quality table", department: 2 },
    { id: 3, name: "Spoon", frameLink: "", description: "best quality Spoon", department: 3 },
    { id: 4, name: "Shoe", frameLink: "", description: "best quality Shoe", department: 4 },
    { id: 5, name: "Water bottle", frameLink: "", description: "best quality Water", department: 5 },
    { id: 6, name: "Soap", frameLink: "", description: "best quality soap", department: 6 },
]

const fireBaseConfiguration = {
        apiKey: "AIzaSyB5WWDj2bHY-IK8TKbpTOZpxRwn1AY8Bvs",
        authDomain: "amazinfinds-4a0c0.firebaseapp.com",
        projectId: "amazinfinds-4a0c0",
        storageBucket: "amazinfinds-4a0c0.appspot.com",
        messagingSenderId: "1078843691576",
        appId: "1:1078843691576:web:b0d1fd9d9cba8e71f68ccd"
    
}

const app = initializeApp(fireBaseConfiguration)
const db = getFirestore(app)

export {Data,db}




