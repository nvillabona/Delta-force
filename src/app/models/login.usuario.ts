export class LoginUsuario {
    constructor(
        public email: string,
        public password: string,
        public rol: string,
        public cedula_usuario: number
    ){

    }
}

export class AtencionUsuario {
    constructor(
        public cedula: number,
        public titulo: string,
        public descripcion: string,
        public fecha: string,
        public nombre: string,
        public telefono: number,
    ){

    }
}

export class AtencionUsuarioAdd {
    constructor(
        public cedula: number,
        public titulo: string,
        public descripcion: string,
        public fecha: string,
        public nombre: string,
        public telefono: number,
        public email: string,
        public password: string,
        public rol: string,
    ){

    }
}