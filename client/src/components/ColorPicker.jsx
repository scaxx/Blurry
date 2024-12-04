import { useState } from 'react';
import { SketchPicker } from 'react-color';

import colorPickerIcon from '../assets/colorpickericon.png';

const ColorPicker = ({ setPencilColor }) => {
  const [showPicker, setShowPicker] = useState(false);
  const [hex, setHex] = useState('#000000');

  const handleColorChange = (color) => {
    setHex(color.hex);
    setPencilColor(color.hex); //Actualiza el color del lápiz
  };
  

  const togglePicker = () => {
    setShowPicker(!showPicker);
  };

  return (
    <div className='flex flex-col gap-3 items-center'>
      <img src={colorPickerIcon} alt="Color Picker Logo" className='border rounded-full w-12 cursor-pointer hover:scale-125 transition-all duration-500 ease-in-out' onClick={togglePicker}/>
      <div
        className={`${
          showPicker ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        } transition-all duration-700 ease-in-out`} 
        style={{ transitionProperty: 'opacity, transform' }} //Transición suave
      >
        {showPicker && (
          <SketchPicker color={hex} onChange={handleColorChange} />
        )}
      </div>
    </div>
  )
}

export default ColorPicker