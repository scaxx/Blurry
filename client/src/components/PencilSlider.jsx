import { useState } from "react"

const PencilSlider = ({ setPencilWidth }) => {
    const [sliderValue, setSliderValue] = useState(5); //Valor inicial del grosor del lápiz

    const handleSliderChange = (e) => {
        const newValue = e.target.value;
        setSliderValue(newValue);
        setPencilWidth(newValue); //Se actualiza el valor en el componente padre
    }

    return (
        <div className="flex flex-col items-center gap-1 text-xl font-bold">
            <p>
                Pencil:
            </p>
            <input type="range" id="pencil-slider" min='1' max='300' value={sliderValue} onChange={handleSliderChange} className="w-32 text-2xl accent-violet-500 rounded-lg cursor-pointer"/>
        </div>
    )

}

export default PencilSlider