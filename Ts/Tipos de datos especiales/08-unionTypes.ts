(() => {
  let myId: string | number;
  myId = 123;
  myId = "12345";

  function greeting(myText: string | number) {
    if (typeof myText === "string") {
      console.log(`string${myText.toLowerCase()}`);
    } else {
      console.log(`number${myText.toFixed(1)}`);
    }
  }
  greeting(123);
  greeting("asasa");
})();
