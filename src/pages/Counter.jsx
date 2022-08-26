import { useState, useEffect } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [showCounter, setShowCounter] = useState(true)
  const incrementCounter = () => {
    setCounter(counter + 1); // ga bisa di redefine. bisa sih pake let
    console.log(counter);
    // alert("Sukses tambah ciek")
  };
  const decrementCounter = () => {
    if (counter <= 0) {
      return alert("Tidak boleh kurang dari 0");
    }
    // alert("Sukses tambah ciek")
    setCounter(counter - 1);
    console.log(counter);
  };
  const resetCounter = () => {
    console.log(counter);
    // alert("Sukses tambah ciek")
    setCounter(counter - counter);
  };
  const toggleCounter = () => {
    setShowCounter(!showCounter);
  };

  useEffect(() => {
    alert("Hello");
  }, []);

  useEffect(() => {
    document.title = " Counter : " + counter;
    if (counter == 0) {
      return;
    } else if (counter % 3 == 0) {
      alert(" FIZZZZZZZZZZZ 3");
    } else if (counter % 5 == 0) {
      alert(" BUzZZzZzzzZZZZZ 5");
    } else {
      alert(" Counter berubah jadi :  " + counter);
    }
  }, [counter]);

  return (
    <div>
      <h1>Counter Page</h1>
      {showCounter ? <h2>{counter}</h2> : null}
      <button onClick={toggleCounter}>Toggle Visibility</button>
      <button onClick={incrementCounter}>Tambah Ciek</button>
      <button onClick={decrementCounter}>Kurang Ciek</button>
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
};

export default Counter;
