import { useEffect, useRef } from "react";

function useKey(key, cb) {
  const callbackRef = useRef(cb);

  useEffect(() => {
    callbackRef.current = cb;
  });
  useEffect(() => {
    function handle(event) {
      if (event.keyCode === key) {
        callbackRef.current(event);
      }
    }
    document.addEventListener("keydown", handle);
    document.addEventListener("keyup", handle);

    return function () {
      document.removeEventListener("keydown", handle);
      document.removeEventListener("keyup", handle);
    };
  }, [key]);
}

export default useKey;
