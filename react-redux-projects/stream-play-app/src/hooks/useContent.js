import { useEffect, useState } from "react";
import db from "../lib/firebase.prod";

export default function useContent(type) {
  const [content, setContent] = useState([]);
  //   console.log(db);
  useEffect(() => {
    // target will be either films or series
    db.collection(type)
      .get()
      .then((snapshot) => {
        const allContent = snapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }));
        // console.log(allContent);
        setContent(allContent);
      })
      .catch((error) => {
        console.log(error.message);
      });

    // eslint-disable-next-line
  }, []);

  return { [type]: content };
}
