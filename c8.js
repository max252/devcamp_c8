let miLista = ["velma", "exploradora", "jane", "john", "harry"];

for (let i = 0; i < miLista.length; i += 1) {
  console.log(miLista[i]);
}

let i = 0;
while (i < miLista.length) {
  console.log(miLista[i]);
  i = i + 1;
}

let printHola = () => console.log("Hola mundo");
printHola();
