import { useState } from "react"

const Blur = ({ setBlur }) => {
  const [selectedBlur, setSelectedBlur] = useState(0); //Nivel de desenfoque inicial

  const handleClick = (level) => {
    setSelectedBlur(level); //Actualiza el estado al nivel seleccionado
    setBlur(level); //Actualiza el estado de manera global
  };

  return (

    <div className="flex flex-col items-center gap-1 font-bold rounded-xl bg-zinc-300 opacity-80 px-2 py-2 border-transparent">
      <p className="text-xl">
          Blur:
      </p>
      <ul className="grid grid-cols-2 items-center">
        {[...Array(8)].map((_, index) => (
          <li key={index}>
            {index}
            <input
              type="radio"
              name="blur"
              checked={selectedBlur === index} // Marca la casilla seleccionada
              onChange={() => handleClick(index)} // Cambia el nivel de desenfoque
              className="mx-2 w-6 accent-violet-400 size-4"
            />
          </li>
        ))}
      </ul>
    </div>

  )
}

export default Blur