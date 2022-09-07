type flavor = "SALTY" | "SWEET";

//Função genérica que pode retornar o nome ou o código da comida
function food<T>(name: T, flavor: flavor) {
  let type = flavor === "SALTY" ? "SALGADA" : "DOCE";
  console.log(`Comida: ${name} Tipo: ${type}`);
}

const newFood = food<string>("Macarrão", "SALTY");
