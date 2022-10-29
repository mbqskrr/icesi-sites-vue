import { defineStore } from "pinia";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut  } from "firebase/auth";
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
        newUser(email, password) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
            
                    const user = userCredential.user;
                    console.log('usuario creado', user)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage);
                });
        },
        async newUserAwait(email, password) {
            try{
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            console.log('usuario creado', userCredential.user)
        } catch(error) {
            alert(errorMessage);
        }
        },
        logOut(){
            signOut(auth).then(() => {
                console.log('usuario fuera')
              }).catch((error) => {
                alert(error);
              });
        }

    },
});