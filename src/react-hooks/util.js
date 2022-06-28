import React from "react";

//Refactor do customHook criado no exercicio 2
function useLocalStorageState(
  key,
  value = "",
  { serialize = JSON.stringify, deserialize = JSON.parse } = {}
) {
  const [state, setState] = React.useState(() => {
    const valueInStorage = window.localStorage.getItem(key);
    if (valueInStorage) {
      return deserialize(valueInStorage);
    }

    return typeof value === "function" ? value() : value;
  });

  const prevKeyRef = React.useRef(key);

  React.useEffect(() => {
    const prevKey = prevKeyRef.current;
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey);
    }
    prevKeyRef.current = key;
    window.localStorage.setItem(key, serialize(state));
  }, [key, state, serialize]);

  return [state, setState];
}

export { useLocalStorageState };
