import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import ColorPalette from './Templates/ColorPalette.js'; // Importar la paleta de colores
import PartSelector from './Templates/PartSelector.js'; // Importar el selector de partes
import MenuInspector from './Templates/MenuInspector.js';
// Menu de arriba 
import Navbar from './Navbar.js';
// Menu desplegable
import DropdownMenu from './Materiales/DropdownMenu.js';
import DropdownAuditorio from './Materiales/Dropdown/DropdownAuditorio.js';
import DropdownBaño from './Materiales/Dropdown/DropdownBaño.js';
import DropdownBiblioteca from './Materiales/Dropdown/DropdownBiblioteca.js';
import DropdownColiseo from './Materiales/Dropdown/DropdownColiseo.js';
import DropdownMedicina from './Materiales/Dropdown/DropdownMedicina.js';
import DropdownCafeteria from './Materiales/Dropdown/DropdownCafeteria.js';
import DropdownEstructuras from './Materiales/Dropdown/DropdownEstructuras.js';
import DropdownPasillo from './Materiales/Dropdown/DropdownPasillo.js';
import Dropdownlaboratorioq from './Materiales/Dropdown/Dropdownlaboratorioq.js';
import DropdownLaboratorio from './Materiales/Dropdown/DropdownLaboratorio.js';
// import DropdownMedicina from './Materiales/DropdownMedicina.js';

// Inicio  
import { Logo } from './Portada/Logo.js';
// Materiales
import { Pin } from './Materiales/pin.js';
// Auditorio
import { Atril } from './Materiales/Auditorio/Atril.js';
import { SillaAuditorio } from './Materiales/Auditorio/SillaAuditorio.js';
// Baños
import { Baño } from './Materiales/Baños/Baño.js';
import { Urinario } from './Materiales/Baños/Urinario.js';

// Cafeteria
import { Cafetera } from './Materiales/Cafeteria/Cafetera.js';
import { Mesaping } from './Materiales/Cafeteria/Mesaping.js';
import { BarraBebidasLB } from './Materiales/Cafeteria/BarraBebidasLB.js';
import { Dispensador } from './Materiales/Cafeteria/Dispensador.js';
import { Enfriador } from './Materiales/Cafeteria/Enfriador.js';
import { ExpendedoraCafe } from './Materiales/Cafeteria/ExpendedoraCafe.js';
import { MesaC } from './Materiales/Cafeteria/MesaC.js';
import { MesaCC } from './Materiales/Cafeteria/MesaCC.js';
import { MesaCP } from './Materiales/Cafeteria/MesaCP.js';
import { MesaP } from './Materiales/Cafeteria/MesaP.js';
import { MesaR } from './Materiales/Cafeteria/MesaR.js';
import { MesonC } from './Materiales/Cafeteria/MesonC.js';
import { PizarraM } from './Materiales/Cafeteria/PizarraM.js';
import { PostesUnifilas } from './Materiales/Cafeteria/PostesUnifilas.js';
import { SofaSillon } from './Materiales/Cafeteria/SofaSillon.js';
import { Televisor } from './Materiales/Cafeteria/Televisor.js';
import { VasoBlastico } from './Materiales/Cafeteria/VasoBlastico.js';
import { VentiladorC } from './Materiales/Cafeteria/VentiladorC.js';

// Biblioteca
import { ArchiveroB } from './Materiales/Biblioteca/ArchiveroB.js';
import { EstanteriaB } from './Materiales/Biblioteca/EstanteriaB.js';
import { LibroRegistro } from './Materiales/Biblioteca/LibroRegistro.js';
import { MesaB } from './Materiales/Biblioteca/MesaB.js';
import { MesitaB } from './Materiales/Biblioteca/MesitaB.js';
import { PuertaVidrioB } from './Materiales/Biblioteca/PuertaVidrioB.js';
import { ReposaManoB } from './Materiales/Biblioteca/ReposaManoB.js';

// Coliseo
import { Arco } from './Materiales/Coliseo/Arco.js';
import { Objetos } from './Materiales/Coliseo/Objetos.js';

// Estructuras
import { SillaGuardia } from './Materiales/Estructuras/SillaGuardia.js';
import { SillaEntrada } from './Materiales/Estructuras/SillaEntrada.js';
import { SillaEsperas } from './Materiales/Estructuras/SillaEsperas.js';
import { SectorIndustria } from './Materiales/Estructuras/SectorIndustria.js';
import { Mesita } from './Materiales/Estructuras/Mesita.js';
import { LaboratorioArea } from './Materiales/Estructuras/LaboratorioArea.js';

// Laboratorio Química
import { FocosL } from './Materiales/LaboratorioQuimica/FocosL.js';
import { GrifosL } from './Materiales/LaboratorioQuimica/GrifosL.js';
import { MesaL } from './Materiales/LaboratorioQuimica/MesaL.js';
import { MesaQ } from './Materiales/LaboratorioQuimica/MesaQ.js';
import { PuertaQAula } from './Materiales/LaboratorioQuimica/PuertaQAula.js';
import { SillaQ } from './Materiales/LaboratorioQuimica/SillaQ.js';
import { VasosQ } from './Materiales/LaboratorioQuimica/VasosQ.js';
import { VentiladoQ } from './Materiales/LaboratorioQuimica/VentiladoQ.js';
import { VitrinaQ } from './Materiales/LaboratorioQuimica/VitrinaQ.js';
import { Vitrina2Q } from './Materiales/LaboratorioQuimica/Vitrina2Q.js';

// Pasillos
import { CarritoSomo } from './Materiales/Pasillos/CarritoSomo.js';
import { Letras } from './Materiales/Pasillos/Letras.js';
import { Maseta } from './Materiales/Pasillos/Maseta.js';
import { Minidispensador } from './Materiales/Pasillos/Minidispensador.js';
import { AtencionCliente } from './Materiales/Pasillos/AtencionCliente.js';
import { Pasillos2 } from './Materiales/Pasillos/Pasillos2.js';
import { RegisaEntrada } from './Materiales/Pasillos/RegisaEntrada.js';
import { Timbre } from './Materiales/Pasillos/Timbre.js';

// Laboratorio
import { Aire } from './Materiales/Laboratorio/Aire.js';
import { Extintor } from './Materiales/Laboratorio/Extintor.js';
import { Monitor } from './Materiales/Laboratorio/Monitor.js';
import { Mouse } from './Materiales/Laboratorio/Mouse.js';
import { Panel } from './Materiales/Laboratorio/Panel.js';
import { PasilloL } from './Materiales/Laboratorio/PasilloL.js';
import { Teclado } from './Materiales/Laboratorio/Teclado.js';

// Medicina
import { Ecografo } from './Materiales/Medicina/Ecografo.js';
import { Mesasilla } from './Materiales/Medicina/Mesasilla.js';
import { Pizarra } from './Materiales/Medicina/Pizarra.js';
import { Pizarraproyectora } from './Materiales/Medicina/Pizarraproyectora.js';
import { Pizarraproyectora2 } from './Materiales/Medicina/Pizarraproyectora2.js';
import { Proyector } from './Materiales/Medicina/Proyector.js';
import { Pupitre } from './Materiales/Medicina/Pupitre.js';
import { CamaMedicina } from './Materiales/Medicina/CamaMedicina.js';
import { Electrocardiografo } from './Materiales/Medicina/Electrocardiografo.js';
import { Esqueleto } from './Materiales/Medicina/Esqueleto.js';
import { Estettoscopio } from './Materiales/Medicina/Estettoscopio.js';
import { Maquinaanestesia } from './Materiales/Medicina/Maquinaanestesia.js';
import { Mesaanatomia } from './Materiales/Medicina/Mesaanatomia.js';
import { Mesaforente } from './Materiales/Medicina/Mesaforente.js';
import { Microcospio } from './Materiales/Medicina/Microcospio.js';
import { Molinete } from './Materiales/Medicina/Molinete.js';
import { MuesculoEsqueleto } from './Materiales/Medicina/MuesculoEsqueleto.js';
import { ProyectoraEpson } from './Materiales/Medicina/ProyectoraEpson.js';
import { Puerta } from './Materiales/Medicina/Puerta.js';
import { UrinalGrifo } from './Materiales/Medicina/UrinalGrifo.js';

export default function Materiales() {
  const [autoRotate, setAutoRotate] = useState(true);
  const [cameraType, setCameraType] = useState('perspective');
  // const [activeModel, setActiveModel] = useState('Pin');
  const [activeModel, setActiveModel] = useState('Logo');
  const [activeDropdown, setActiveDropdown] = useState('main'); // Estado para el dropdown activo
  const [color, setColor] = useState('#000000');
  const [selectedPart, setSelectedPart] = useState('');
  const [modelParts, setModelParts] = useState([]); // Partes del modelo actual
  const ref = useRef();
  const cameraRef = useRef();
  const canvasRef = useRef();

  // const handleScene1Click = () => setAutoRotate((prev) => !prev);
  const handleColorChange = (selectedColor) => {
    setColor(selectedColor);
  };

  const handlePartChange = (part) => {
    setSelectedPart(part);
  };


  const handlePartsUpdate = (parts) => {
    setModelParts(parts);
  };
  // Auditorio
  const handleAtrilClick = () => setActiveModel('Atril');
  const handleSillaAuditorioClick = () => setActiveModel('SillaAuditorio');
  // Baños
  const handleBañoClick = () => setActiveModel('Baño');
  const handleUrinarioClick = () => setActiveModel('Urinario');
  // Biblioteca
  const handleArchiveroBClick = () => setActiveModel('ArchiveroB');
  const handleEstanteriaBClick = () => setActiveModel('EstanteriaB');
  const handleLibroRegistroClick = () => setActiveModel('LibroRegistro');
  const handleMesaBClick = () => setActiveModel('MesaB');
  const handleMesitaBClick = () => setActiveModel('MesitaB');
  const handlePuertaVidrioBClick = () => setActiveModel('PuertaVidrioB');
  const handleReposaManoBClick = () => setActiveModel('ReposaManoB');

  // Cafeteria
  const handleCafeteraClick = () => setActiveModel('Cafetera');
  const handleMesapingClick = () => setActiveModel('Mesaping');
  const handleBarraBebidasLBClick = () => setActiveModel('BarraBebidasLB');
  const handleDispensadorClick = () => setActiveModel('Dispensador');
  // const handleDispensadorClick = () => setActiveModel('Dispensador');
  const handleEnfriadorClick = () => setActiveModel('Enfriador');
  const handleExpendedoraCafeClick = () => setActiveModel('ExpendedoraCafe');
  const handleMesaCClick = () => setActiveModel('MesaC');
  const handleMesaCCClick = () => setActiveModel('MesaCC');
  const handleMesaCPClick = () => setActiveModel('MesaCP');
  const handleMesaPClick = () => setActiveModel('MesaP');
  const handleMesaRClick = () => setActiveModel('MesaR');
  const handleMesonCClick = () => setActiveModel('MesonC');
  const handlePizarraMClick = () => setActiveModel('PizarraM');
  const handlePostesUnifilasClick = () => setActiveModel('PostesUnifilas');
  const handleSofaSillonClick = () => setActiveModel('SofaSillon');
  const handleTelevisorClick = () => setActiveModel('Televisor');
  const handleVasoBlasticoClick = () => setActiveModel('VasoBlastico');
  const handleVentiladorCClick = () => setActiveModel('VentiladorC');
  // Labotaratorio
  const handleAireClick = () => setActiveModel('Aire');
  const handleExtintorClick = () => setActiveModel('Extintor');
  const handleMonitorClick = () => setActiveModel('Monitor');
  const handleMouseClick = () => setActiveModel('Mouse');
  const handlePasilloClick = () => setActiveModel('PasilloL');
  const handlePanelClick = () => setActiveModel('Panel');
  const handleTecladoClick = () => setActiveModel('Teclado');
  // Coliseo
  const handleArcoClick = () => setActiveModel('Arco');
  const handleObjetosClick = () => setActiveModel('Objetos');

  // Estructuras
  const handleSillaGuardiaClick = () => setActiveModel('SillaGuardia');
  const handleSillaEntradaClick = () => setActiveModel('SillaEntrada');
  const handleSillaEsperasClick = () => setActiveModel('SillaEsperas');
  const handleSectorIndustriaClick = () => setActiveModel('SectorIndustria');
  const handleMesitaClick = () => setActiveModel('Mesita');
  const handleLaboratorioAreaClick = () => setActiveModel('LaboratorioArea');

  // Laboratorio Quimica
  const handleFocosLClick = () => setActiveModel('FocosL');
  const handleGrifosLClick = () => setActiveModel('GrifosL');
  const handleMesaLClick = () => setActiveModel('MesaL');
  const handleMesaQClick = () => setActiveModel('MesaQ');
  const handlePuertaQAulaClick = () => setActiveModel('PuertaQAula');
  const handleSillaQClick = () => setActiveModel('SillaQ');
  const handleVasosQClick = () => setActiveModel('VasosQ');
  const handleVentiladoQClick = () => setActiveModel('VentiladoQ');
  const handleVitrinaQClick = () => setActiveModel('VitrinaQ');
  const handleVitrina2QClick = () => setActiveModel('Vitrina2Q');

  // Pasillo
  const handleCarritoSomoClick = () => setActiveModel('CarritoSomo');
  const handleLetrasClick = () => setActiveModel('Letras');
  const handleMasetaClick = () => setActiveModel('Maseta');
  const handleMinidispensadorClick = () => setActiveModel('Minidispensador');
  const handleAtencionClienteClick = () => setActiveModel('AtencionCliente');
  const handlePasillos2Click = () => setActiveModel('Pasillos2');
  const handleRegisaEntradaClick = () => setActiveModel('RegisaEntrada');
  const handleTimbreClick = () => setActiveModel('Timbre');

  // Medicina
  const handleEcografoClick = () => setActiveModel('Ecografo');
  const handlePupitre1Click = () => setActiveModel('Mesasilla');
  const handlePizarraClick = () => setActiveModel('Pizarra');
  const handlePizarraProyectoraClick = () => setActiveModel('Pizarraproyectora');
  const handlePizarraProyectora2Click = () => setActiveModel('Pizarraproyectora2');
  const handleProyectorClick = () => setActiveModel('Proyector');
  const handlePupitreClick = () => setActiveModel('Pupitre');
  const handleCamaMedicinaClick = () => setActiveModel('CamaMedicina');
  const handleElectrocardiografoClick = () => setActiveModel('Electrocardiografo');
  const handleEsqueletoClick = () => setActiveModel('Esqueleto');
  const handleEstettoscopioClick = () => setActiveModel('Estettoscopio');
  const handleMaquinaanestesiaClick = () => setActiveModel('Maquinaanestesia');
  const handleMesaanatomiaClick = () => setActiveModel('Mesaanatomia');
  const handleMesaforenteClick = () => setActiveModel('Mesaforente');
  const handleMicrocospioClick = () => setActiveModel('Microcospio');
  const handleMolineteClick = () => setActiveModel('Molinete');
  const handleMuesculoEsqueletoClick = () => setActiveModel('MuesculoEsqueleto');
  const handleProyectoraEpsonClick = () => setActiveModel('ProyectoraEpson');
  const handlePuertaClick = () => setActiveModel('Puerta');
  const handleUrinalGrifoClick = () => setActiveModel('UrinalGrifo');


  const handleBackClick = () => setActiveDropdown('main'); // Función para volver al menú principal


  const toggleAutoRotate = () => {
    setAutoRotate((prev) => !prev);
  };
  
  return (
    <>
      <Navbar />
      <MenuInspector onChangeColor={handleColorChange} />
      <button
        onClick={toggleAutoRotate}
        className="fixed bottom-4 left-4 z-30 p-2 bg-gray-800 text-white rounded-full shadow-lg cursor-pointer hover:bg-gray-700 transition"
      >
        {autoRotate ? 'Detener Rotación' : 'Iniciar Rotación'}
      </button>
      {/* <div className="relative"> */}
      {activeDropdown === 'main' && (
        <DropdownMenu
          onDropAuditorio={() => setActiveDropdown('auditorio')}
          onDropBaño={() => setActiveDropdown('baño')}
          onDropBiblioteca={() => setActiveDropdown('biblioteca')}
          onDropPasillo={() => setActiveDropdown('pasillo')}
          onDropEstructura={() => setActiveDropdown('estructura')}
          onDropColiseo={() => setActiveDropdown('coliseo')}
          onDropLaboratorioQ={() => setActiveDropdown('laboratorioq')}
          onDropCafeteria={() => setActiveDropdown('cafeteria')}
          onDropLaboratorio={() => setActiveDropdown('laboratorio')}
          onDropMedicina={() => setActiveDropdown('medicina')}
        // onBañoClick={handleBañoClick}
        // onCafeteraClick={handleCafeteraClick}
        // onMesapingClick={handleMesapingClick}
        />
      )}
      {activeDropdown === 'auditorio' && <DropdownAuditorio
        onAtrilClick={handleAtrilClick}
        onSillaAuditorioClick={handleSillaAuditorioClick}
        onBackClick={handleBackClick} />}

      {activeDropdown === 'baño' && <DropdownBaño onBañoClick={handleBañoClick}
        onUrinarioClick={handleUrinarioClick}
        onBackClick={handleBackClick} />}

      {activeDropdown === 'biblioteca' && <DropdownBiblioteca
        onArchiveroBClick={handleArchiveroBClick}
        onEstanteriaBClick={handleEstanteriaBClick}
        onLibroRegistroClick={handleLibroRegistroClick}
        onMesaBClick={handleMesaBClick}
        onMesitaClick={handleMesitaBClick}
        onPuertaVidrioBClick={handlePuertaVidrioBClick}
        onReposaManoBClick={handleReposaManoBClick}
        onBackClick={handleBackClick} />}

      {activeDropdown === 'pasillo' &&
        <DropdownPasillo
          onCarritoSomoClick={handleCarritoSomoClick}
          onLetrasClick={handleLetrasClick}
          onMasetaClick={handleMasetaClick}
          onMinidispensadorClick={handleMinidispensadorClick}
          onAtencionClienteClick={handleAtencionClienteClick}
          onPasillos2Click={handlePasillos2Click}
          onRegisaEntradaClick={handleRegisaEntradaClick}
          onTimbreClick={handleTimbreClick}
          onBackClick={handleBackClick}
        />}

      {activeDropdown === 'estructura' && <DropdownEstructuras
        onSillaGuardiaClick={handleSillaGuardiaClick}
        onSillaEntradaClick={handleSillaEntradaClick}
        onSillaEsperasClick={handleSillaEsperasClick}
        onSectorIndustriaClick={handleSectorIndustriaClick}
        onMesitaClick={handleMesitaClick}
        onLaboratorioAreaClick={handleLaboratorioAreaClick}
        onBackClick={handleBackClick} />}

      {activeDropdown === 'coliseo' && <DropdownColiseo onArcoClick={handleArcoClick}
        onObjetosClick={handleObjetosClick}
        onBackClick={handleBackClick} />}


      {activeDropdown === 'laboratorioq' &&
        <Dropdownlaboratorioq
          onFocosLClick={handleFocosLClick}
          onGrifosLClick={handleGrifosLClick}
          onMesaLClick={handleMesaLClick}
          onMesaQClick={handleMesaQClick}
          onMesitaClick={handleMesitaClick}
          onPuertaQAulaClick={handlePuertaQAulaClick}
          onSillaQClick={handleSillaQClick}
          onVasosQClick={handleVasosQClick}
          onVentiladoQClick={handleVentiladoQClick}
          onVitrinaQClick={handleVitrinaQClick}
          onVitrina2QClick={handleVitrina2QClick}
          onBackClick={handleBackClick}
        />}


      {activeDropdown === 'cafeteria' &&
        <DropdownCafeteria
          onCafeteraClick={handleCafeteraClick}
          onMesapingClick={handleMesapingClick}
          onBarraBebidasLBClick={handleBarraBebidasLBClick}
          onDispensadorClick={handleDispensadorClick}
          onEnfriadorClick={handleEnfriadorClick}
          onExpendedoraCafeClick={handleExpendedoraCafeClick}
          onMesaCClick={handleMesaCClick}
          onMesaCCClick={handleMesaCCClick}
          onMesaCPClick={handleMesaCPClick}
          onMesaPClick={handleMesaPClick}
          onMesaRClick={handleMesaRClick}
          onMesonCClick={handleMesonCClick}
          onPizarraMClick={handlePizarraMClick}
          onPostesUnifilasClick={handlePostesUnifilasClick}
          onSofaSillonClick={handleSofaSillonClick}
          onTelevisorClick={handleTelevisorClick}
          onVasoBlasticoClick={handleVasoBlasticoClick}
          onVentiladorCClick={handleVentiladorCClick}
          onBackClick={handleBackClick}
        />
      }


      {activeDropdown === 'laboratorio' && <DropdownLaboratorio
        onAireClick={handleAireClick}
        onExtintorClick={handleExtintorClick}
        onMonitorClick={handleMonitorClick}
        onMouseClick={handleMouseClick}
        onPasilloClick={handlePasilloClick}
        onPanelClick={handlePanelClick}
        onTecladoClick={handleTecladoClick}
        onBackClick={handleBackClick} />}

      {activeDropdown === 'medicina' &&
        <DropdownMedicina
          onEcografoClick={handleEcografoClick}
          onPupitre1Click={handlePupitre1Click}
          onPizarraClick={handlePizarraClick}
          onPizarraProyectoraClick={handlePizarraProyectoraClick}
          onPizarraProyectora2Click={handlePizarraProyectora2Click}
          onProyectorClick={handleProyectorClick}
          onPupitreClick={handlePupitreClick}
          onCamaMedicinaClick={handleCamaMedicinaClick}
          onElectrocardiografoClick={handleElectrocardiografoClick}
          onEsqueletoClick={handleEsqueletoClick}
          onEstettoscopioClick={handleEstettoscopioClick}
          onMaquinaanestesiaClick={handleMaquinaanestesiaClick}
          onMesaanatomiaClick={handleMesaanatomiaClick}
          onMesaforenteClick={handleMesaforenteClick}
          onMicrocospioClick={handleMicrocospioClick}
          onMolineteClick={handleMolineteClick}
          onMuesculoEsqueletoClick={handleMuesculoEsqueletoClick}
          onProyectoraEpsonClick={handleProyectoraEpsonClick}
          onPuertaClick={handlePuertaClick}
          onUrinalGrifoClick={handleUrinalGrifoClick}
          onBackClick={handleBackClick}
        />
      }
      {(activeModel === 'Dispensador' || activeModel === 'ExpendedoraCafe' || activeModel === 'Mesaping' || activeModel === 'Esqueleto' || activeModel === 'Logo') && (
          <div className="flex flex-col items-end md:items-start">
            <PartSelector
              selectedPart={selectedPart}
              onSelectPart={handlePartChange}
              parts={modelParts.map((part) => part.display)}
            />
            <ColorPalette onChangeColor={handleColorChange} />
          </div>
        )}


      <Canvas ref={canvasRef} shadows dpr={[1, 2]} camera={{ fov: 50, type: cameraType }}>
        <Suspense fallback={null}>
          <Stage controls={ref} preset="rembrandt" intensity={1} environment={null}>
            {/* {activeModel === 'Pin' && <Pin color={color} />} */}
            {activeModel === 'Logo' && (
              <Logo color={color} selectedPart={selectedPart} onPartsUpdate={handlePartsUpdate} />
            )}
            {/* {activeModel === 'Logo' && <Logo color={color} />} */}
            
            {/* Auditorio */}
            {activeModel === 'Atril' && <Atril color={color} />}
            {activeModel === 'SillaAuditorio' && <SillaAuditorio color={color} />}
            {/* Baño */}
            {activeModel === 'Baño' && <Baño color={color} />}
            {activeModel === 'Urinario' && <Urinario color={color} />}
            {/* Cafereria */}
            {activeModel === 'Cafetera' && <Cafetera color={color} />}
            {activeModel === 'Mesaping' && (
              <Mesaping color={color} selectedPart={selectedPart} onPartsUpdate={handlePartsUpdate} />
            )}
            {/* {activeModel === 'Mesaping' && <Mesaping color={color} />} */}
            {activeModel === 'BarraBebidasLB' && <BarraBebidasLB color={color} />}
            {activeModel === 'Dispensador' && (
              <Dispensador color={color} selectedPart={selectedPart} onPartsUpdate={handlePartsUpdate} />
            )}
            {/* {activeModel === 'Dispensador' && <Dispensador color={color} />} */}
            {activeModel === 'Enfriador' && <Enfriador color={color} />}
            {activeModel === 'ExpendedoraCafe' && (
              <ExpendedoraCafe color={color} selectedPart={selectedPart} onPartsUpdate={handlePartsUpdate} />
            )}
            {/* {activeModel === 'ExpendedoraCafe' && <ExpendedoraCafe color={color} />} */}
            {activeModel === 'MesaC' && <MesaC color={color} />}
            {activeModel === 'MesaCC' && <MesaCC color={color} />}
            {activeModel === 'MesaCP' && <MesaCP color={color} />}
            {activeModel === 'MesaP' && <MesaP color={color} />}
            {activeModel === 'MesaR' && <MesaR color={color} />}
            {activeModel === 'MesonC' && <MesonC color={color} />}
            {activeModel === 'PizarraM' && <PizarraM color={color} />}
            {activeModel === 'PostesUnifilas' && <PostesUnifilas color={color} />}
            {activeModel === 'SofaSillon' && <SofaSillon color={color} />}
            {activeModel === 'Televisor' && <Televisor color={color} />}
            {activeModel === 'VasoBlastico' && <VasoBlastico color={color} />}
            {activeModel === 'VentiladorC' && <VentiladorC color={color} />}

            {/* Laboratorio */}
            {activeModel === 'Aire' && <Aire color={color} />}
            {activeModel === 'Extintor' && <Extintor color={color} />}
            {activeModel === 'Monitor' && <Monitor color={color} />}
            {activeModel === 'Mouse' && <Mouse color={color} />}
            {activeModel === 'Panel' && <Panel color={color} />}
            {activeModel === 'PasilloL' && <PasilloL color={color} />}
            {activeModel === 'Teclado' && <Teclado color={color} />}
            {/* Medicina */}
            {activeModel === 'Ecografo' && <Ecografo color={color} />}
            {activeModel === 'Mesasilla' && <Mesasilla color={color} />}
            {activeModel === 'Pizarra' && <Pizarra color={color} />}
            {activeModel === 'Pizarraproyectora' && <Pizarraproyectora color={color} />}
            {activeModel === 'Pizarraproyectora2' && <Pizarraproyectora2 color={color} />}
            {activeModel === 'Proyector' && <Proyector color={color} />}
            {activeModel === 'Pupitre' && <Pupitre color={color} />}

            {activeModel === 'Ecografo' && <Ecografo color={color} />}
            {activeModel === 'Mesasilla' && <Mesasilla color={color} />}
            {activeModel === 'Pizarra' && <Pizarra color={color} />}
            {activeModel === 'Pizarraproyectora' && <Pizarraproyectora color={color} />}
            {activeModel === 'Pizarraproyectora2' && <Pizarraproyectora2 color={color} />}
            {activeModel === 'Proyector' && <Proyector color={color} />}
            {activeModel === 'Pupitre' && <Pupitre color={color} />}
            {activeModel === 'CamaMedicina' && <CamaMedicina color={color} />}
            {activeModel === 'Electrocardiografo' && <Electrocardiografo color={color} />}
            {activeModel === 'Esqueleto' && (
              <Esqueleto color={color} selectedPart={selectedPart} onPartsUpdate={handlePartsUpdate} />
            )}
            {/* {activeModel === 'Esqueleto' && <Esqueleto color={color} />} */}
            {activeModel === 'Estettoscopio' && <Estettoscopio color={color} />}
            {activeModel === 'Maquinaanestesia' && <Maquinaanestesia color={color} />}
            {activeModel === 'Mesaanatomia' && <Mesaanatomia color={color} />}
            {activeModel === 'Mesaforente' && <Mesaforente color={color} />}
            {activeModel === 'Microcospio' && <Microcospio color={color} />}
            {activeModel === 'Molinete' && <Molinete color={color} />}
            {activeModel === 'MuesculoEsqueleto' && <MuesculoEsqueleto color={color} />}
            {activeModel === 'ProyectoraEpson' && <ProyectoraEpson color={color} />}
            {activeModel === 'Puerta' && <Puerta color={color} />}
            {activeModel === 'UrinalGrifo' && <UrinalGrifo color={color} />}


            {/* Biblioteca */}
            {activeModel === 'ArchiveroB' && <ArchiveroB color={color} />}
            {activeModel === 'EstanteriaB' && <EstanteriaB color={color} />}
            {activeModel === 'LibroRegistro' && <LibroRegistro color={color} />}
            {activeModel === 'MesaB' && <MesaB color={color} />}
            {activeModel === 'MesitaB' && <MesitaB color={color} />}
            {activeModel === 'PuertaVidrioB' && <PuertaVidrioB color={color} />}
            {activeModel === 'ReposaManoB' && <ReposaManoB color={color} />}

            {/* Coliseo */}
            {activeModel === 'Arco' && <Arco color={color} />}
            {activeModel === 'Objetos' && <Objetos color={color} />}

            {/* Estructuras */}
            {activeModel === 'SillaGuardia' && <SillaGuardia color={color} />}
            {activeModel === 'SillaEntrada' && <SillaEntrada color={color} />}
            {activeModel === 'SillaEsperas' && <SillaEsperas color={color} />}
            {activeModel === 'SectorIndustria' && <SectorIndustria color={color} />}
            {activeModel === 'Mesita' && <Mesita color={color} />}
            {activeModel === 'LaboratorioArea' && <LaboratorioArea color={color} />}

            {/* Pasillos */}
            {activeModel === 'CarritoSomo' && <CarritoSomo color={color} />}
            {activeModel === 'Letras' && <Letras color={color} />}
            {activeModel === 'Maseta' && <Maseta color={color} />}
            {activeModel === 'Minidispensador' && <Minidispensador color={color} />}
            {activeModel === 'AtencionCliente' && <AtencionCliente color={color} />}
            {activeModel === 'Pasillos2' && <Pasillos2 color={color} />}
            {activeModel === 'RegisaEntrada' && <RegisaEntrada color={color} />}
            {activeModel === 'Timbre' && <Timbre color={color} />}

            {/* Laboratorio de Química */}
            {activeModel === 'FocosL' && <FocosL color={color} />}
            {activeModel === 'GrifosL' && <GrifosL color={color} />}
            {activeModel === 'MesaL' && <MesaL color={color} />}
            {activeModel === 'MesaQ' && <MesaQ color={color} />}
            {activeModel === 'PuertaQAula' && <PuertaQAula color={color} />}
            {activeModel === 'SillaQ' && <SillaQ color={color} />}
            {activeModel === 'VasosQ' && <VasosQ color={color} />}
            {activeModel === 'VentiladoQ' && <VentiladoQ color={color} />}
            {activeModel === 'VitrinaQ' && <VitrinaQ color={color} />}
            {activeModel === 'Vitrina2Q' && <Vitrina2Q color={color} />}



          </Stage>
        </Suspense>
        <OrbitControls ref={ref} autoRotate={autoRotate} />
      </Canvas>
      {/* </div> */}
    </>
  );
}
