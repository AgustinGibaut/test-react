export function MyAwesomeApp () {
    //creo las variables
       const nombre = 'Agustin';
       const apellido = 'Gibaut';

       //arreglos
       const games = ['crash', 'mario', 'pes6']
       const activo = 'true';

       //objetos literales
       const direccion = {
        codigo: 'abc-123',
        Country: 'new york',
       }

    return (
        <>
        <h1>  {nombre} </h1>
        <h1>  {apellido}  </h1>
        <p> {games.join(', ')} </p>
        <h1> {activo ? 'activo': 'no activo'}  </h1>
        <p> { JSON.stringify(direccion)} </p>
        </>
    )
}