export class Emprendimiento{
    constructor(
        public consecutivo: number,
        public titulo: string,
        public c_emprendedor: number,
        public programa_academico: string,
        public facultad: string,
        public egresado: string,
        public sector: string,
        public etapa: string,
        public NIT: number,
        public fecha_creacion: string,
        public num_empleados: number,
        public num_contacto: number,
        public propuesta_valor: string,
        public segmento_clientes:string,
        public canales: string,
        public fuente_ingresos: string,
        public recursos_clave: string,
        public actividades_clave:string,
        public socios_clave: string,
        public estructura_costos: string,

    ){

    }
}

export class EmprendimientoList{
    constructor(
        public consecutivo: number,
        public titulo: string,
        public c_emprendedor: number,
        public programa_academico: string,
        public facultad: string,
        public egresado: string,
        public sector: string,
        public etapa: string,
        public NIT: number,
        public fecha_creacion: string,
        public num_empleados: number,
        public num_contacto: number,
        public propuesta_valor: string,
        public segmento_clientes:string,
        public canales: string,
        public fuente_ingresos: string,
        public recursos_clave: string,
        public actividades_clave:string,
        public socios_clave: string,
        public estructura_costos: string,
        public cedula_emprendedor: string,
        public nombres:string,
        public apellidos:string,
        public telefono: number,

    ){

    }
}
