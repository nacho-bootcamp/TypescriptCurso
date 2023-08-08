let ages: string = "20";
let grado: number = 2;
let isJr: boolean = false;
let person: Object = {};
let fruits: Object[] = [{}];

//el tipo void significa que no retorna nada
//solo ejecuta pero no te da una respuesta

function saludar(): void {

}

let response: null = null // tiene un valor nulo
let response2: undefined = undefined // no tiene un valor definido


//COMNACION DE TIPOS
// ts te permite crear tus propios tipos de datos
type ResponseService = string | undefined;

let response6: ResponseService;
let response7: ResponseService;
let response8: ResponseService;

//Type ASSERTION castear
//para el manejo del DOM sirve bastante el casteo
let message: any = "";
let messageUppercase = (message as string).length;
let messageUppercase1 = <string>message;
messageUppercase1.toLocaleUpperCase()

const canva = document.getElementById("canvas") as HTMLCanvasElement;
