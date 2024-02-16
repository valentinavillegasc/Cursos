(() => {
  let myNull = null; //queda de tipo any
  let myUndefined = undefined; //queda de tipo any

  let myNull2: null = null;
  let myUndefined2: undefined = undefined;

  let myNumber: number | null = null;
  myNumber = 123;

  let myString: string | undefined = undefined;
  myString = "asasa";

  function hi(name: string | null) {
    let hello = "hola ";
    if (name) {
      hello += name;
    } else {
      hello += "nobody";
    }
  }

  function hi2(name: string | null) {
    let hello = "hola ";
    hello += name?.toLowerCase() || "nobody";
    console.log(hello);
  }
})();
