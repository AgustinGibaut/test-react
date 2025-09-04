export function MyAwesomeApp () {
    //creo las variables
       const nombre = 'Agustin';
       const apellido = 'Gibaut';

       //arreglos
       const games = ['crash', 'mario', 'pes6']

    return (
        <>
        <h1>  {nombre} </h1>
        <h1>  {apellido}  </h1>
        <p> {games.join(', ')} </p>
        </>
    )
}