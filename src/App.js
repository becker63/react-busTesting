import { Provider as BusProvider, useBus, useListener } from "react-bus";
import * as React from "react";
import useKeyPress from "./usekeypress";
const App = () => (
  <BusProvider>
    <ScrollBox />
    <Input />
  </BusProvider>
);

function ScrollBox() {
  const el = React.useRef(null);
  const onscroll = React.useCallback(function (top) {
    console.log("got it");
  }, []);

  useListener("scroll", onscroll);

  return <div ref={el}></div>;
}

// Scroll the ScrollBox when pageup/pagedown are pressed.
function Input() {
  const bus = useBus();

  function rightHandler() {
    console.log("right");
    bus.emit("scroll", -500);
  }

  function leftHandler() {
    console.log("left");
    bus.emit("scroll", -500);
  }

  useKeyPress("ArrowRight", rightHandler);

  useKeyPress("ArrowLeft", leftHandler);
}

export default App;
