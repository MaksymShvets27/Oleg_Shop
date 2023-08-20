import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "../../firebase/config";
import { authSlice } from "./auth.slice";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
} from "firebase/firestore";

const {
  updateUserProfile,
  authStateChange,
  authSignOut,
  adminRole,
  clearCashList,
  addToFavoriteList,
  setFavoriteList,
  deleteFromFavoriteList,
} = authSlice.actions;

const authSignUpUser =
  ({ email, password, userName }) =>
  async (dispatch, getState) => {
    await createUserWithEmailAndPassword(auth, email, password).catch(
      (error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`${errorCode},${errorMessage}`);
      }
    );
    await updateProfile(auth.currentUser, {
      displayName: `${userName}`,
    });

    const { uid, displayName } = auth.currentUser;
    dispatch(
      updateUserProfile({
        userId: uid,
        userName: displayName,
      })
    );
  };

const authSignInUser =
  ({ email, password }) =>
  async (dispatch, getState) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const { uid, displayName, email } = auth.currentUser;
        dispatch(
          updateUserProfile({
            userId: uid,
            userName: displayName,
            isLogIn: true,
            email,
          })
        );
        if (email === "msshopua@gmail.com") {
          dispatch(adminRole());
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`${errorCode},${errorMessage}`);
      });
  };

const authSignOutUser = () => async (dispatch, getState) => {
  signOut(auth).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(`${errorCode},${errorMessage}`);
  });
  dispatch(authSignOut());
};

const authStateChangeUser = () => async (dispatch, getState) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { uid, displayName } = auth.currentUser;

      dispatch(authStateChange({ stateChange: true }));
      dispatch(updateUserProfile({ userId: uid, userName: displayName }));
    }
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(`${errorCode},${errorMessage}`);
  });
};

const authClearCashList = () => (dispatch, getState) => {
  dispatch(clearCashList());
};

const authAddToFavoriteList = (card) => (dispatch, getState) => {
  dispatch(addToFavoriteList(card));
};

const authSetFavoriteList = (email) => async (dispatch, getState) => {
  const q = await getDoc(doc(db, "users", `${email}`));
  if (q.exists()) {
    const { favoriteList } = q.data();
    dispatch(setFavoriteList(favoriteList));
  } else {
    console.log("No such document!");
  }
};

const authDeleteFavoriteList = (card) => (dispatch, getState) => {
  const state = getState();
  const favoriteList = state.auth.favoriteList;

  const newFavoriteList = favoriteList.filter((item) => {
    if (item.name !== card.name) return item;
  });
  dispatch(deleteFromFavoriteList(newFavoriteList));
};

export {
  authSignInUser,
  authSignOutUser,
  authSignUpUser,
  authStateChangeUser,
  authClearCashList,
  authAddToFavoriteList,
  authSetFavoriteList,
  authDeleteFavoriteList,
};
