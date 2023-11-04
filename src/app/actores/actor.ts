export interface actorDto {
    nombre: string;
    fechaNacimiento: Date;
    foto: string;
}

export interface actorCreacionDTO {
    nombre: string;
    fechaNacimiento: Date;
    foto: File;
}