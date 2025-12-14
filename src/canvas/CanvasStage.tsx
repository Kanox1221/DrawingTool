import { useRef } from "react";

function CreateSVGCanvas(){
    // Need for 
    const svgRef = useRef<SVGSVGElement | null>(null);

    return (
        <div className='fixed inset-0'>
            <svg ref={svgRef} className='w-full h-full' onPointerDown={handlePointerDown}>
                <rect width='100%' height='100%' fill="lightblue" />
            </svg>
        </div>
        
    );
}

function handlePointerDown(e: React.PointerEvent<SVGSVGElement>){
    const coordX = e.clientX;
    const coordY = e.clientY;

    console.log(`Current coordinate is : (${coordX}, ${coordY})`);
}

export default CreateSVGCanvas