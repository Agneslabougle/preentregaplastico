import Head from 'next/head';

export default function EnvironmentalImpactPage() {
  return (
    <>
      <Head>
        {/* Importar la fuente Montserrat */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;700;900&display=swap" rel="stylesheet" />
      </Head>

      {/* Página completa con fondo blanco */}
      <div className="bg-white flex flex-col items-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        {/* Primera Sección - Portada */}
        <div className="relative flex flex-col items-center justify-center min-h-screen">
          <div className="text-center">
            {/* Título grande como antes */}
            <h1 className="text-8xl font-semibold" style={{ color: '#003A5C' }}>
              Una Gota, Mil Datos
            </h1>

            {/* Efecto subrayado turquesa */}
            <div className="mt-2 h-1 w-2/4 mx-auto bg-[#003A5C]"></div>

            {/* Subtítulo centrado */}
            <p className="text-xl mt-4 font-light" style={{ color: '#003A5C' }}>
              Visualizando el impacto del plástico en los océanos
            </p>
          </div>
        </div>

        {/* Segunda Sección - Paleta de Colores compacta */}
        <div className="flex flex-col items-center justify-center py-8 mt-20">
          {/* Subtítulo centrado en turquesa, en negrita */}
          <h2 className="text-3xl font-bold mb-4 text-center" style={{ color: '#003A5C' }}>
            Paleta de Colores
          </h2>

          {/* Cuadrados más pequeños y centrados */}
          <div className="grid grid-cols-4 gap-4 mb-20">
            <div className="w-16 h-16 bg-[#8BAFC2]"></div> {/* Azul claro sin borde */}
            <div className="w-16 h-16 bg-[#003A5C]"></div> {/* Turquesa oscuro sin borde */}
            <div className="w-16 h-16 bg-[#2D5594]"></div> {/* Azul medio sin borde */}
            <div className="w-16 h-16 border-2 border-gray-500 bg-white"></div> {/* Blanco con borde gris */}
          </div>
        </div>

        {/* Sección de Visualización de Datos */}
        <div className="flex flex-col items-center w-full max-w-6xl px-4 text-center mt-20">
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#003A5C' }}>
              Cantidad de plástico arrojado al agua por país
            </h3>
            <img src="/DATASS-19.svg" alt="Visualización de datos" className="mx-auto" width={600} height={200} />
          </div>

          <div className="mb-20">
            <h4 className="text-2xl font-bold mb-4" style={{ color: '#003A5C' }}>
              Con acceso al agua y sin acceso
            </h4>
            <img src="/DATASS-20.svg" alt="Visualización de datos" className="mx-auto" width={300} height={200} />
          </div>

          <div className="mb-20">
            <h5 className="text-2xl font-bold mb-4" style={{ color: '#003A5C' }}>
              Cantidad de plástico per capita (kg)
            </h5>
            <img src="/DATASS-21.svg" alt="Visualización de datos" className="mx-auto" width={300} height={200} />
          </div>

          <div className="mb-20">
            <h6 className="text-2xl font-bold mb-4" style={{ color: '#003A5C' }}>
              Cantidad de PBI por país - USD billones
            </h6>
            <img src="/DATASS-22.svg" alt="Visualización de datos" className="mx-auto" width={300} height={200} />
          </div>

          <div className="mb-20">
            <h6 className="text-2xl font-bold mb-4" style={{ color: '#003A5C' }}>
              Impacto de plástico en los océanos por los países
            </h6>
            <img src="/gotas.svg" alt="Visualización de datos" className="mx-auto" width={1000} height={700} />
          </div>
        </div>
      </div>
    </>
  );
}




