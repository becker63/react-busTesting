import { useEffect } from "react";

function useKeyPress(targetKey, pressHandler) {
  // If pressed key is our target key then set to true
  function downHandler({ key }) {
    if (key !== targetKey) {
      return;
    }

    pressHandler();
  }
  // // If released key is our target key then set to false
  // const upHandler = ({ key }): void => {
  //   if (key === targetKey) {
  //     setKeyPressed(false);
  //   }
  // };
  // Add event listeners
  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    // window.addEventListener('keyup', upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler);
      // window.removeEventListener('keyup', upHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
}

export default useKeyPress;
