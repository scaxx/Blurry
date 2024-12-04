import { useRef, useState, useEffect } from 'react';

const DrawingCanvas = ({ pencilWidth, pencilColor, blur, image }) => {
  const canvasRef = useRef(null); //Referencia el lienzo
  const [isDrawing, setIsDrawing] = useState(false); //Estado para saber si el usuario está dibujando
  const [lastPos, setLastPos] = useState({x: 0, y: 0}); //Última posición del cursor
  const [canvasImage, setCanvasImage] = useState(null); // Imagen cargada en el lienzo

  //Iniciar dibujo
  const startDrawing = (e) => {
    setIsDrawing(true);
    const rect = canvasRef.current.getBoundingClientRect();
    setLastPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  //Dibujar en el lienzo
  const draw = (e) => {
    if(!isDrawing) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const context = canvasRef.current.getContext('2d');

    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.lineWidth = pencilWidth; //Grosor del lápiz según preferencia del usuario
    context.strokeStyle = pencilColor; //Color del lápiz según preferencia del usuario

    context.beginPath();
    context.moveTo(lastPos.x, lastPos.y); //Moverse al último punto
    context.lineTo(e.clientX - rect.left, e.clientY - rect.top); //Dibujar hacia el nuevo punto
    context.stroke();

    setLastPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  //Dejar de dibujar
  const stopDrawing = () => {
    setIsDrawing(false);
  };

  //Dibujar la imagen cargada y luego el dibujo encima
  useEffect(() => {
    if (image) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      const img = new Image();
      img.src = image;

      img.onload = () => {
        context.clearRect(0, 0, canvas.width, canvas.height); //Limpiar el lienzo antes de dibujar
        context.drawImage(img, 0, 0, canvas.width, canvas.height); //Dibujar la imagen cargada en el lienzo
        setCanvasImage(img);
      };
    }
  }, [image]);

  const blurLevels = [
    "blur-none",
    "blur-sm",
    "blur",
    "blur-md",
    "blur-lg",
    "blur-xl",
    "blur-2xl",
    "blur-3xl",
  ];

  return (
      <canvas 
        ref={canvasRef}
        width={1500}
        height={800}
        className={`border border-zinc-400 mx-10 bg-white ${blurLevels[blur]}`}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseOut={stopDrawing}
      />
  )

}

export default DrawingCanvas