import React, { useState } from "react";
import "./Login.css";

export const Login = () => {
  let alumnos = [
    {
      id: 1,
      nombre: "Toni",
      edad: 37,
      hobbies: {
        hobbie1: "viciar",
        hobbie2: "ciberseguridad",
      },
    },
    {
      id: 2,
      nombre: "Vincenzo",
      edad: 28,
      hobbies: {
        hobbie1: "comer",
        hobbie2: "estudiar",
      },
    },
    {
      id: 3,
      nombre: "David",
      edad: 37,
      hobbies: {
        hobbie1: "musica",
        hobbie2: "boxeo",
      },
    },
    {
      id: 4,
      nombre: "Toni",
      edad: 37,
      hobbies: {
        hobbie1: "viciar",
        hobbie2: "ciberseguridad",
      },
    },
    {
      id: 5,
      nombre: "Vincenzo",
      edad: 28,
      hobbies: {
        hobbie1: "comer",
        hobbie2: "estudiar",
      },
    },
    {
      id: 6,
      nombre: "David",
      edad: 37,
      hobbies: {
        hobbie1: "musica",
        hobbie2: "boxeo",
      },
    },
    {
        id: 7,
        nombre: "Toni",
        edad: 37,
        hobbies: {
          hobbie1: "viciar",
          hobbie2: "ciberseguridad",
        },
      },
      {
        id: 8,
        nombre: "Vincenzo",
        edad: 28,
        hobbies: {
          hobbie1: "comer",
          hobbie2: "estudiar",
        },
      },
      {
        id: 9,
        nombre: "David",
        edad: 37,
        hobbies: {
          hobbie1: "musica",
          hobbie2: "boxeo",
        },
      },
  ];

  //   const elegido = (el) => {
  //     console.log(el);

  //   };

  const [nombreClickeado, setNombreClickeado] = useState(null);

  const cerrarnombre = () => {
     setNombreClickeado();
     
  };

  const mostrarSaludo2 = (alumno) => {
    return (
        <div className="nombre2-container"><div className="nombre2">
        <div className="botoncerrar" onClick={() => cerrarnombre()}>
          X
        </div>
        {`${alumno.nombre} `}
      </div></div>
      
    );
  };

  return (
    <div className="contenedor">
      {alumnos.map((alumno) => {
        return (
          <div className="alumno" key={alumno.id}>
            <div
              className="nombre"
              onClick={() => {
                setNombreClickeado(alumno);
              }}
            >
              {`${alumno.nombre} `}
            </div>
            {nombreClickeado &&
              nombreClickeado.id === alumno.id &&
              mostrarSaludo2(alumno)}
            <div className="edad">{`${alumno.edad} `}</div>
            <div className="hobbies">
              <div>{`${alumno.hobbies.hobbie1} `}</div>
              <div>{`${alumno.hobbies.hobbie2} `}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
