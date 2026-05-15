import React from "react";
import { useNavigate } from "react-router-dom";
import { Piano } from "lucide-react";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 bg-gradient-to-b from-white/40 to-transparent">
      {/* Title & Subtitle */}
      <div className="text-center mb-16 max-w-2xl">
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
            <Piano size={20} className="text-black" />
          </div>
        </div>
        <h1 className="text-5xl font-bold tracking-tight text-black mb-6">
          PianoTrainer
        </h1>
        <p className="text-lg text-piano-muted font-light leading-relaxed">
          Tu espacio para perfeccionar cada nota. Usa las teclas de tu teclado
          para tocar el piano virtual.Desde el ShiftIzquierdo hasta la tecla 3 para tocar las notas blancas, 
          y las notas negras estan salteadas en orden como si fuera un piano real. 
        </p>
      </div>

      {/* Keyboard Controls Preview */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-12">
        <div className="flex gap-2 mb-6 justify-center">
          {["Z", "X", "C", "V", "B", "N", "M", ",", "."].map((key) => (
            <div
              key={key}
              className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-md text-sm text-black font-medium"
            >
              {key}
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-piano-muted font-medium tracking-[0.2em] uppercase">
          CONTROLES TÁCTILES ACTIVOS
        </p>
      </div>

      {/* Action Button */}
      <button
        onClick={() => navigate("/practice")}
        className="bg-black hover:bg-black/90 text-white px-8 py-4 rounded-full text-sm tracking-widest font-medium uppercase transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-4 mb-16"
      >
        EMPEZAR A PRACTICAR <span>→</span>
      </button>
    </div>
  );
};

export default Home;
