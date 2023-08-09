//ENUMS
// es un tipo de datos que nos permite almacenar lista de valores estaticos.
// sirve cuando yo quiero guardar variables estaticas
enum Users {
  NormalUser = "normal",
  PayedUser = 23,
  AdminUser = "admin",
  MegaUser = 25,
}

const user = Users.AdminUser;
console.log(user);
