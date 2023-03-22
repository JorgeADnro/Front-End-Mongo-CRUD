export class Product {
    id!: number;
    nombre: string;
    edad: number;
    rol: string;
    telefono: number;
    sueldo: number;
    turno: string;
    correo: string;
    passwd: string;

    constructor(nombre: string, edad: number,rol: string,telefono: number,sueldo: number,turno: string,correo: string,passwd: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.rol = rol;
        this.telefono = telefono;
        this.sueldo = sueldo;
        this.turno = turno;
        this.correo = correo;
        this.passwd = passwd;
    }
}
