//el simbolo ? significa que esa propiedad es opcional
// esto es la interface tambien llamado contrato , voceto 
//es como un monde 
interface Person {
  name: string;
  code: string | number;
  charge: number;
  description?: string;
  sayHello: () => string;
}

let persona: Person = {
  name: "nacho",
  code: "12",
  charge: 23,
  sayHello: () => "hola"
};