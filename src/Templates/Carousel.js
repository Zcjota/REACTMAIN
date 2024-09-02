import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import Button from "@mui/material/Button";
import { Baño } from "../Materiales/Baños/Baño";
import Vista_Auditorio from "../Templates/vistas/Vista_Auditorio";
import Vista_Baño from "../Templates/vistas/Vista_Baño";
import Vista_Biblioteca from "../Templates/vistas/Vista_Biblioteca";
import Vista_Cafeteria from "../Templates/vistas/Vista_Cafeteria";
import Vista_Coliseo from "../Templates/vistas/Vista_Coliseo";
import Vista_Laboratorio_Quimica from "../Templates//vistas/Vista_Laboratorio_Quimica";
import Vista_Laboratorio from "../Templates/vistas/Vista_Laboratorio";
import Vista_Medicina from "../Templates/vistas/Vista_Medicina";
import Vista_Modelo3D_Universidad from "../Templates/vistas/Vista_Modelo3D_Universidad.js";
function CarouselItem({ title, backgroundColor, link }) {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(link);
  };

  return (
    <div
      className={`relative w-full sm:w-11/12 h-64 ${backgroundColor} transform transition-transform duration-500 hover:scale-x-125 hover:scale-y-125 hover:z-10`}
      style={{
        transformOrigin: "center",
      }}
    >
      <header className="absolute text-center mx-2 mb-12 sm:text-sm xl:text-lg">
        <h2 className="text-1xl leading-normal mb-2 font-bold text-gray-800 dark:text-pink-300">
          <span className="font-light">
            {title.split(" ")[0] + " " + title.split(" ")[1] + " "}
          </span>
          {title.split(" ")[2]}
        </h2>
      </header>
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
        <Suspense fallback={null}>
          <Stage preset="rembrandt" intensity={1} environment={null}>
            <Baño color="#000000" />
          </Stage>
        </Suspense>
        <OrbitControls autoRotate autoRotateSpeed={1} />
      </Canvas>
      <div className="absolute bottom-0 right-0">
        <Button
          variant="text"
          className="flex items-center gap-3"
          onClick={handleRedirect}
        >
          <img
            src="https://cdn.icon-icons.com/icons2/3908/PNG/512/cube_viewport_icon_246706.png"
            className="h-[30px] w-[30px] bg-blue-300"
            alt="icon"
          />
        </Button>
      </div>
    </div>
  );
}

export default function Carousel({ links }) {
  const items = [
    {
      title: "Salom de Auditorio",
      backgroundColor: "bg-pink-950",
      link: links[0],
    },
    { title: "Cuarto de Baño", backgroundColor: "bg-pink-800", link: links[1] },
    {
      title: "Sala de Blibioteca",
      backgroundColor: "bg-pink-600",
      link: links[2],
    },
  ];

  return (
    <section>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 max-w-full mx-auto py-12 px-4">
        {items.map((item, index) => (
          <CarouselItem
            key={index}
            title={item.title}
            backgroundColor={item.backgroundColor}
            link={item.link}
          />
        ))}
      </div>
    </section>
  );
}
