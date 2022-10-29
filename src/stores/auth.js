import { defineStore } from "pinia";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";


export const useAuthenticationStore = defineStore("authentication", {
    state: () => ({

    }),
    getters: {

    },
    actions: {
        singIn(email, password) {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log("Usuario loggeado "+ user)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });

        },

    },
});