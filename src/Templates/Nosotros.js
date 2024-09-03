import React from "react";

const teamMembers = [
  {
    name: "Jose Gonzales",
    instagram: "https://x.com/usuariO1298677",
    role: "Desarollador Web",
    image:
      "https://pbs.twimg.com/profile_images/1800770087898525697/2uRQDqnQ_400x400.png",
  },
  {
    name: "Mario Eduardo Terrazas",
    instagram: "https://x.com/usuariO1298677",
    role: "Desarollador Web",
    image: "https://tailone.tailwindtemplate.net/src/img/dummy/avatar2.png",
  },
  {
    name: "Alejandro Leaños",
    instagram: "https://x.com/usuariO1298677",
    role: "Desarollador Web",
    image: "https://tailone.tailwindtemplate.net/src/img/dummy/avatar4.png",
  },
  {
    name: "Cristrina Aguirre",
    instagram: "https://x.com/usuariO1298677",
    role: "Designer",
    image: "https://tailone.tailwindtemplate.net/src/img/dummy/avatar3.png",
  },
  {
    name: "Jose Gonzales",
    instagram: "https://x.com/usuariO1298677",
    role: "Founder CEO",
    image: "https://tailone.tailwindtemplate.net/src/img/dummy/avatar1.png",
  },
  {
    name: "Mario Eduardo Terrazas",
    instagram: "https://x.com/usuariO1298677",
    role: "CTO",
    image: "https://tailone.tailwindtemplate.net/src/img/dummy/avatar2.png",
  },
  {
    name: "Alejandro Leaños",
    instagram: "https://x.com/usuariO1298677",
    role: "Designer",
    image: "https://tailone.tailwindtemplate.net/src/img/dummy/avatar4.png",
  },
  {
    name: "Cristrina Aguirre",
    instagram: "https://x.com/usuariO1298677",
    role: "Designer",
    image: "https://tailone.tailwindtemplate.net/src/img/dummy/avatar3.png",
  },
  {
    name: "Alejandro Leaños",
    instagram: "https://x.com/usuariO1298677",
    role: "Designer",
    image: "https://tailone.tailwindtemplate.net/src/img/dummy/avatar4.png",
  },
  {
    name: "Cristrina Aguirre",
    instagram: "https://x.com/usuariO1298677",
    role: "Designer",
    image: "https://tailone.tailwindtemplate.net/src/img/dummy/avatar3.png",
  },

  // Añade aquí más miembros del equipo...
];

export default function Nosotros() {
  return (
    <div
      id="team"
      className="pt-20 pb-8 lg:pt-16 bg-white dark:bg-gray-800 w-full overflow-auto"
    >
      {/* Section header */}
      <header className="text-center mx-auto mb-12">
        <h2 className="text-2xl leading-normal mb-2 font-bold text-gray-800 dark:text-pink-300">
          <span className="font-light">Nuestro </span>
          Equipo
        </h2>
      </header>
      {/* End section header */}

      {/* Team members grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 ">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex-shrink max-w-full px-4">
            <div className="relative overflow-hidden bg-white dark:bg-gray-800 mb-12 hover-grayscale-0 wow fadeInUp">
              {/* Team block */}
              <div className="relative overflow-hidden px-6  flex items-center justify-center">
                <img
                  src={member.image}
                  className="h-[200px] w-[200px] rounded-full bg-gray-50 "
                  alt={member.name}
                />
              </div>
              <div className="pt-8 text-center">
                <h1 className="text-white text-2xl">{member.name}</h1>
                <p className="text-gray-500 leading-relaxed font-light">
                  {member.role}
                </p>
                {/* Social icons */}
                <div className="mt-2 mb-5 space-x-2 flex items-center justify-center">
                  <img
                    src="https://cdn.icon-icons.com/icons2/836/PNG/512/Instagram_icon-icons.com_66804.png"
                    className="h-[30px] w-[30px] dark:bg-gray-800 hover:text-blue-700"
                    aria-label="Instagram link"
                    href={member.instagram}
                  ></img>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* End team members grid */}
      <div class="bg-gray-100 dark:bg-gray-900 flex items-center justify-center min-h-screen">
        <div class="w-full max-w-4xl p-6 bg-gray-800 text-white rounded-lg shadow-md">
          <h2 class="text-2xl font-bold mb-4">Descripción del Proyecto</h2>
          <p class="mb-4">
            Nuestro proyecto es una ambiciosa iniciativa para modelar en 3D la
            <strong>Universidad Privada Domingo Savio</strong> y sus distintos
            objetos e instalaciones utilizando tecnologías avanzadas como React,
            Three.js y Blender. Este proyecto no solo representa un gran desafío
            técnico, sino también una importante inversión de tiempo y esfuerzo
            por parte de nuestro equipo.
          </p>

          <h3 class="text-xl font-semibold mb-2">
            ¿En Qué Consiste el Proyecto?
          </h3>

          <ul class="list-disc list-inside mb-4">
            <li>
              <strong>Modelado en 3D de la Universidad:</strong> Hemos creado
              una representación tridimensional detallada de la{" "}
              <strong>Universidad Privada Domingo Savio</strong>. Esto incluye
              la modelación precisa de edificios, espacios comunes, aulas, y
              otras instalaciones relevantes. La modelación se realizó
              utilizando Blender, una potente herramienta de diseño 3D, lo que
              nos permitió capturar cada detalle arquitectónico y funcional de
              manera fiel.
            </li>
            <li>
              <strong>Visualización Interactiva:</strong> La universidad y sus
              objetos están integrados en una aplicación web interactiva.
              Utilizando React y Three.js, hemos desarrollado una interfaz que
              permite a los usuarios explorar el entorno virtual de manera
              intuitiva y dinámica. Los usuarios pueden navegar por los
              diferentes espacios de la universidad, visualizar detalles de los
              objetos y experimentar la arquitectura en un entorno virtual.
            </li>
            <li>
              <strong>Desarrollo y Optimización:</strong> Durante el desarrollo
              del proyecto, nuestro equipo enfrentó el reto de combinar la
              creación de modelos detallados con la necesidad de mantener un
              rendimiento óptimo en la web. Implementamos técnicas de
              optimización para asegurar que la experiencia visual sea fluida y
              agradable, sin sacrificar la calidad del modelado.
            </li>
            <li>
              <strong>Alojamiento en la Web:</strong> La aplicación está
              completamente alojada en la web, lo que permite el acceso remoto y
              la interacción en tiempo real desde cualquier dispositivo con
              conexión a Internet. Esto facilita la accesibilidad para
              estudiantes, profesores y cualquier persona interesada en explorar
              la representación virtual de nuestra universidad.
            </li>
          </ul>

          <p>
            Este proyecto ha sido una valiosa experiencia de aprendizaje para
            todos los miembros del equipo. A pesar de que partimos desde un
            conocimiento limitado en estas tecnologías, hemos logrado superar
            numerosos desafíos técnicos y colaborativos. El esfuerzo y la
            dedicación invertidos han resultado en una herramienta innovadora
            que muestra el potencial de las tecnologías 3D y la visualización en
            la web.
          </p>

          <p>
            Estamos orgullosos de compartir los frutos de nuestro trabajo y
            esperamos que esta representación virtual de la{" "}
            <strong>Universidad Privada Domingo Savio</strong> sea de gran
            utilidad para la comunidad universitaria y más allá.
          </p>
        </div>
      </div>
      {/* Proyect description */}
      <div class="flex flex-col items-center gap-6 mb-8">
        <div class="grid grid-cols-2 flex-wrap items-center justify-center gap-5 lg:gap-12 gap-y-3 lg:flex-nowrap text-dark-grey-900">
          <div class="grid-cols-1 m-10 items-center space-x-2">
            <img
              src="https://www.upds.edu.bo/wp-content/uploads/2020/06/logo_trans.png"
              class="h-20 w-auto"
            ></img>
          </div>

          <div class="grid mt-10 items-center space-x-1">
            <a
              href="https://www.upds.edu.bo/contacto/sede-santa-cruz/"
              class="text-gray-600 hover:text-gray-900"
            >
              Santa Cruz
            </a>
            <div class="flex mt-5 items-center space-x-2">
              <img
                src="https://cdn.icon-icons.com/icons2/317/PNG/512/map-marker-icon_34392.png"
                alt="Location Icon"
                class="h-5 w-auto mt-3"
              />
              <a
                href="https://www.google.com/maps?daddr=-17.7582043,-63.1764404"
                class="text-gray-600 hover:text-gray-900"
              >
                Av. Beni y Tercer Anillo Externo.
              </a>
            </div>
            <div class="flex mt-5 items-center space-x-2">
              <img
                src="https://cdn.icon-icons.com/icons2/294/PNG/256/Phone_31105.png"
                alt="Location Icon"
                class="h-5 w-auto"
              />
              <a
                href="https://www.google.com/maps?daddr=-17.7582043,-63.1764404"
                class="text-gray-600 hover:text-gray-900"
              >
                (591) 3 342 - 6600
              </a>
            </div>
            <div class="flex mt-5 items-center space-x-2">
              <img
                src="https://cdn.icon-icons.com/icons2/373/PNG/256/Whatsapp_37229.png"
                alt="Location Icon"
                class="h-5 w-auto"
              />
              <a
                href="https://wa.me/59172129166"
                class="text-gray-600 hover:text-gray-900"
              >
                (591) 721-29166
              </a>
            </div>
            <div class="flex mt-5 items-center space-x-2">
              <img
                src="https://cdn.icon-icons.com/icons2/1826/PNG/512/4202011emailgmaillogomailsocialsocialmedia-115677_115624.png"
                alt="Location Icon"
                class="h-5 w-auto"
              />
              <a
                href="https://www.google.com/maps?daddr=-17.7582043,-63.1764404"
                class="text-gray-600 hover:text-gray-900"
              >
                infoupds.santacruz@upds.edu.bo
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer class="bg-gray-800 text-white py-4 mt-8">
        <div class="container mx-auto text-center">
          <p class="text-sm">
            &copy; <span id="year"></span> UPDS - Universidad Privada Domingo
            Savio. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
