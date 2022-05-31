export class persona {
  id?: number;
  nombre: String;
  apellido: String;
  sobremi: String;
  img: String;


  constructor(nombre: String, apellido: String, sobremi: String, img: String){
      this.nombre = nombre;
      this.apellido = apellido;
      this.sobremi = sobremi;
      this.img = img;
  }
}
