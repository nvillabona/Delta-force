export class Consultoria {
    constructor(
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

export class ConsultoriaEF {
    constructor(
        public consecutivo: number,
        public fecha: Date,
        public monitor: number,
        public emprendedor: number,
        public lugar: string,
        public hora: string,
        public titulo: string,
        public descripcion: string,
        public tipo: string,
        public enombres: string,
        public eapellidos: string,
        public fnombres: string,
        public fapel: string,
        public etelefono: number,
        public ftelefono: number,
    ){
   
    }
}

export class ConsultoriaCalendar {
    constructor(
        public title: string,
        public date: string,
/*         public hora: string,
        public consecutivo: number, */
       
        
    ){
   
    }
}
