import { ProductList } from "../components/products/ProductList"
import './HomePage.css'
export const HomePage = () => {
    return (
        <>  
      <header className="header">
        <h1 className="header-title">SurByTech. Reviviendo Tiempos Pasados, Preservando Memorias</h1>
      </header>
      <section className="story-section">
        <h2 className="section-title">Rescatando Recuerdos en Cintas de Video</h2>
        <p className="section-paragraph">
          En los años dorados del VHS y las cintas de video, guardábamos nuestras películas caseras y momentos especiales en estos mágicos formatos. Digitalizar estas cintas no solo preserva su contenido, sino que también nos permite revivir aquellas risas y lágrimas con la claridad del presente. Transformar viejas cintas en archivos digitales es como abrir una cápsula del tiempo y redescubrir tesoros olvidados.
        </p>

        <h2 className="section-title">El Encanto de las Fotografías Antiguas</h2>
        <p className="section-paragraph">
          Las fotografías de antaño, con sus bordes desgastados y tonos sepia, nos transportan a épocas pasadas y nos conectan con nuestras raíces. Digitalizar estas imágenes les da nueva vida, asegurando que cada sonrisa, cada paisaje y cada recuerdo queden inmortalizados para las generaciones venideras. Conservar fotos antiguas en formato digital es una forma de honrar nuestro pasado mientras lo llevamos al futuro.
        </p>

        <h2 className="section-title">Reviviendo las Cintas de Audio y Vinilos</h2>
        <p className="section-paragraph">
          Hay algo mágico en el sonido cálido y auténtico de las cintas de audio y los vinilos. Al digitalizar estas reliquias, no solo preservamos sus melodías y voces, sino también las emociones y recuerdos que evocan. Escuchar una vieja cinta o vinilo en formato digital nos permite redescubrir esa música que tocó nuestras almas y compartirla con nuevas generaciones.
        </p>

        <h2 className="section-title">El Valor de la Preservación Digital</h2>
        <p className="section-paragraph">
          La tecnología nos ofrece la oportunidad de proteger nuestros recuerdos de los estragos del tiempo. Digitalizar cintas y fotos antiguas es una inversión en nuestra historia personal y colectiva. Cada archivo digital creado es una garantía de que nuestros momentos más preciados estarán a salvo para siempre, disponibles con solo un clic.
        </p>

        <h2 className="section-title">Conservando la Nostalgia del Pasado</h2>
        <p className="section-paragraph">
          Cada cinta, fotografía y vinilo guarda fragmentos de nuestras vidas, capturando emociones y momentos únicos. Al digitalizar estos tesoros, no solo preservamos su contenido, sino que también mantenemos viva la esencia del pasado. En SurByTech, creemos en la importancia de conservar estas piezas de nostalgia, asegurando que los ecos de ayer resuenen en el mañana.
        </p>
      </section>

            {/* <ProductList /> */} 
        </>// comentado para que no aparezca en la pagina de inicio
    )
}