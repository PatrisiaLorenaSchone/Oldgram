import React from 'react'

function CanvaPage() {
    const [color, setColor] = React.useState("#000000");
    const [size, setSize] = React.useState(10);
    const [isDrawing, setIsDrawing] = React.useState(false)
    const [canvas, setCanvas] = React.useState(true)
    const canvasRef = React.useRef(null);
    const contextRef = React.useRef(null);
  
    React.useEffect(()=>{
      const canvas = canvasRef.current;
      canvas.width = 310;
      canvas.height = 310;
      const context = canvas.getContext("2d");
      context.lineCap = "round";
      context.strokeStyle = color;
      context.lineWidth = size;
      contextRef.current = context;
    }, [canvas]);
  
    const startDrawing =({nativeEvent})=>{
      const {offsetX, offsetY} = nativeEvent;
      contextRef.current.beginPath();
      contextRef.current.moveTo(offsetX, offsetY);
      contextRef.current.lineTo(offsetX, offsetY);
      contextRef.current.stroke();
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      context.strokeStyle = color;
      context.lineWidth = size;
      setIsDrawing(true)
      // nativeEvent.preventDefault()
    };
    const draw =({nativeEvent})=>{
      if(!isDrawing){
        return;
      }
      const {offsetX, offsetY} = nativeEvent;
      contextRef.current.lineTo(offsetX, offsetY);
      contextRef.current.stroke();
      // nativeEvent.preventDefault()
    };
    const stopDrawing =()=>{
      contextRef.current.closePath();
      setIsDrawing(false)
    };

  return (
    <div className='canva-page'>
      <h3>Let your imagination run wild</h3>
      <canvas ref={canvasRef} 
      onPointerDown={startDrawing}
      onPointerMove={draw}
      onPointerUp={stopDrawing}
      onMouseLeave={stopDrawing}
      id="can"></canvas>
      <div className='col'> 
        <input value={size} onChange={(e)=>setSize(e.target.value)} type="range" />
        <input value={color} onChange={(e)=>setColor(e.target.value)} type="color" />
      </div>
      <button className='btn-primary' onClick={()=> setCanvas(!canvas)}>Reset</button>
    </div>
  )
}

export default CanvaPage
