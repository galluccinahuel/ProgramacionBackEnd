
class Usuario{

    constructor(nombre, apellido, libros, mascotas){

        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName(){

        return `${this.nombre} ${this.apellido}`;
    }

    addMascota(mascotaAAgregar){

        this.mascotas.push(mascotaAAgregar);
    }

    countMascotas(){

        return this.mascotas.length;
    }

    addBook(nombre, autor){

        const libro = {
            nombreLibro: nombre,
            autorLibro: autor
        }
        this.libros.push(libro);
    }

    getBooksNames(){

        const nombreLibros = libros.map(({nombreLibro})=> nombreLibro)
        return nombreLibros;
    }
}


const libros=[];

const mascotas = [];

const usuario1 = new Usuario("elon", "musk", libros, mascotas);

