const DownloadButton = ({ blur }) => {
  //Desenfoque de Tailwind
  const blurArray = [0, 4, 8, 12, 16, 24, 40, 80];

  const downloadImage = () => {
    const canvas = document.querySelector('canvas');
    const image = new Image();
    image.src = canvas.toDataURL();

    //La imagen se carga
    image.onload = () => {
      const downloadCanvas = document.createElement('canvas');
      const downloadContext = downloadCanvas.getContext('2d');
      downloadCanvas.width = canvas.width;
      downloadCanvas.height = canvas.height;

      //Se establece un fondo blanco
      downloadContext.fillStyle = 'white';
      downloadContext.fillRect(0, 0, downloadCanvas.width, downloadCanvas.height); //Rellena todo el lienzo con blanco

      //Aplica el mismo desenfoque a la imagen descargada
      downloadContext.filter = `blur(${blurArray[blur]}px)`;  //Usa el nivel de desenfoque especificado anteriormente
      downloadContext.drawImage(image, 0, 0);

      //Se descarga la imagen
      const link = document.createElement('a');
      link.href = downloadCanvas.toDataURL();
      link.download = 'drawing.png';
      link.click();
    };
  }

  return (
    <button onClick={downloadImage} className="bg-violet-500 font-bold px-6 py-3 rounded-lg hover:bg-violet-600 hover:scale-125 transition-all duration-500 ease-in-out">Download</button>
  )
}

export default DownloadButton