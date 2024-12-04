import { useRef } from "react"

const UploadButton = ({ setImage }) => {
  const fileInputRef = useRef(null); //Se referencia a la imagen subida por el user

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        //Pasa la URL de la imagen al estado en el lienzo
        setImage(reader.result);
      };

      reader.readAsDataURL(file); //Lee el archivo como una URL de datos
    }

  }

  return (
    <>
      <button onClick={() => fileInputRef.current.click()} className="bg-violet-500 font-bold px-6 py-3 rounded-lg hover:bg-violet-600 hover:scale-125 transition-all duration-500 ease-in-out">Upload</button>
      <input 
          ref={fileInputRef} 
          type="file" 
          accept="image/*" 
          style={{ display: 'none' }} //Oculta el input
          onChange={handleUpload} //Llama a handleUpload cuando se selecciona un archivo
        />
    </>
  )
}

export default UploadButton