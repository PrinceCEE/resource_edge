import { useState } from "react";

const useLocalStorage = () => {
  const [credential, _setCredential] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("credential"));
    } catch (e) {
      return null;
    }
  });

  const setCredential = (credential) => {
    setCredential(credential);
    localStorage.setItem("credential", JSON.stringify(credential));
  };

  return [credential, setCredential];
};

export default useLocalStorage;
