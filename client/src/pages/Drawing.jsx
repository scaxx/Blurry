import { useState } from 'react';
import Toolbar from '../components/Toolbar'
import DrawingCanvas from '../components/DrawingCanvas'

const Drawing = () => {
    const [pencilWidth, setPencilWidth] = useState(5); //Valor inicial del grosor del lápiz
    const [pencilColor, setPencilColor] = useState("#000000"); //Valor inicial del color del lápiz
    const [blur, setBlur] = useState(0); //Valor inicial de desenfoque de la imágen
    const [image, setImage] = useState(null); //Estado para almacenar la imagen cargada

  
    return (
      <>
        <div className='flex items-center gap-5 w-screen bg-zinc-300'>
            <Toolbar setPencilWidth={setPencilWidth} setPencilColor={setPencilColor} setBlur={setBlur} blur={blur} setImage={setImage}/>
            <DrawingCanvas pencilWidth={pencilWidth} pencilColor={pencilColor} blur={blur} image={image}/>
        </div>
      </>
    );
  };

export default Drawing