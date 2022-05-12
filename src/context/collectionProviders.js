import { db } from "../firebase";
import {
  getDatabase,
  ref,
  child,
  get,
  update,
  set,
  remove,
} from "firebase/database";

function checkDBContainsUser(userId) {
  const dbRef = ref(getDatabase());

  return get(child(dbRef, `users/${userId}`));
}

function fetchMajors() {
  const dbRef = ref(getDatabase());
  return get(child(dbRef, `degreeList`));
}

function updateUserMajorDetails(major, uuid) {
  const db = getDatabase();
  update(ref(db, "users/" + uuid), {
    majorName: major.id,
    majorCode: major.id,
  });
}

function updateFavorites(uuid, course, add) {
  const db = getDatabase();
  if (add) {
    set(ref(db, "users/" + uuid + "/favourites/" + course.id), {
      id: course.id,
      name: course.title,
      units: course.units,
    });
  } else {
    remove(ref(db, "users/" + uuid + "/favourites/" + course.id));
  }
}

const value = {
  checkDBContainsUser,
  fetchMajors,
  updateUserMajorDetails,
  updateFavorites,
};
export function useFirebaseDetails() {
  return value;
}
