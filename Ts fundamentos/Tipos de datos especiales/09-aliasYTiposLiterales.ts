(() => {
  type UserID = string | number; //Crear nuestro propio tipo
  let myId: UserID;

  //Literal types
  type Sizes = "S" | "M" | "L" | "XL";
  let shirtSize: Sizes;
  shirtSize = "S";
  //! Error -> shirtSize = 'hola'

  function greeting(myId: UserID, size: Sizes) {
    if (typeof myId === "string") {
      console.log(`string${myId.toLowerCase()}`);
    }
  }
  greeting(1111, "M");
  greeting("1111", "M");
})();
