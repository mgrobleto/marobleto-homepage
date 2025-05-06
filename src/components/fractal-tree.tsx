"use client";

import React from "react";
import dynamic from "next/dynamic";

const ReactP5Wrapper = dynamic(
    () => import("react-p5-wrapper").then(mod => mod.ReactP5Wrapper),
    { ssr: false } // no renderizar en servidor
)

let angle : number; // angulo de rotacion de las ramas

const Sketch = (p5:any) => {
    p5.setup = () => {
        p5.createCanvas(400, 400, 'transparent'); // crea el canvas
        angle = p5.PI / 4; // inicializa el angulo a 45 grados en radianos
        p5.stroke('#14324D'); // dibuja las lineas de el color asignado
    }

    p5.draw = () => {
        p5.clear(); // limpia el dibujo anterior lo cual es util para las animaciones
        p5.translate(200, p5.height); // mueve el origen al centro inferior
        angle = p5.map(p5.sin(p5.frameCount * 0.01), -1, 1, p5.PI / 2, p5.PI /16); //anima el angulo para que varie de forma suave
        branch(100); // dibuja el arbol
    }

    // genera el arbol fractal bufurcandose en cada nodo
    const branch = (len: number) => {
        p5.line(0,0,0, -len); // dibuja la linea desde el origen hasta arriba
        p5.translate(0, -len); // mueve el origen al final de esa linea
        if (len > 4) { // se detiene cuando la longitud es menor que 4
            p5.push(); // guarda el estado
            p5.rotate(angle); // rota a la derecha 
            branch(len * 0.67); // rama derecha mas corta
            p5.pop(); // restaura el estado

            p5.push(); 
            p5.rotate(-angle); // rota hacia la izquierda
            branch(len * 0.67); // rama izquierda
            p5.pop(); 
        }
    }

    p5.windowResized = () => {
        p5.resizeCanvas(400, 400);
    }
}

const FractalTree = () => {
    return (
        <div className="">
            <ReactP5Wrapper sketch={Sketch} />
        </div>
    )
}

export default FractalTree;