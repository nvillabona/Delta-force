export class Facilitador{
    constructor(
        public cedula_facilitador: number,
        public nombres: string,
        public apellidos: string,
        public profesion: string,
        public direccion: string,
        public telefono: number,
        public email: string,
        public password: string,
        public rol: string,
        public area_enfoque: string,
    ){

    }
}

export class FacilitadorList{
    constructor(
        public cedula_facilitador: number,
        public nombres: string,
        public apellidos: string,
        public profesion: string,
        public direccion: string,
        public telefono: number,
        public email: string,
        public password: string,
        public rol: string,
        public area_enfoque: string,
        public consecutivo: number,
        public fecha: string,
        public monitor: number,
        public emprendedor: number,
        public lugar: string,
        public hora: string,
        public titulo: string,
        public descripcion: string,
        public tipo: string

    ){

    }
}
