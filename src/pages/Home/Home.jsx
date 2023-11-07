
import "./Home.css"

export const Home = () => {

    let nombre = "Toni"
    let peliculas = [
        {
            id: 1,
            titulo: "101 dalmatas"
        },
        {
            id: 2,
            titulo: "insidious"
        },
        {
            id: 3,
            titulo: "minions"
        },
        {
            id: 4,
            titulo: "frozen"
        },
        {
            id: 5,
            titulo: "shrek"
        }
    ]

    const interruptor = true

    const saludame = (comida) => {
        console.log(`hola ${comida}`)
    }

    const elegir = (elemento) => {
        console.log(elemento)
    }

    return (
        <div className="homeDesign">

            {
                //Interpolación condicional

                interruptor &&
                //En caso de pasar argumentos incluimos el callback
                <div onClick={()=>saludame("patata")}>
                    hola mundo tengo hambre {nombre}
                </div>
            }

            {
                peliculas.map(
                    (pelicula, i) => {
                        return (
                            <div key={pelicula.id} onClick={()=>elegir(pelicula)}>
                                {pelicula.titulo}
                            </div>
                        )
                    }
                )
            }
            
        </div>
    )
}