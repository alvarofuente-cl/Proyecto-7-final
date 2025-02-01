// Definimos el componente funcional AboutPage, que representa la página "Sobre Nosotros" de la aplicación.
export const AboutPage = () => {
    return (
        <>
           <header className="about-header">
        <div className="about-content">
            <div className="about-text">
                <h1 className="about-title">Sobre SurByTech...</h1>
                <p className="about-paragraph">
                ¿Tienes recuerdos familiares en formatos antiguos que se están deteriorando?

En SurByTech, nos apasiona rescatar tus tesoros más preciados del pasado. Nos especializamos en la restauración de cintas de video antiguas, fotografías, cintas de audio y discos de vinilo, para que puedas revivir esos momentos especiales una y otra vez.

Con nuestras técnicas de vanguardia y años de experiencia, podemos reparar daños, mejorar la calidad de imagen y sonido, y convertir tus formatos antiguos a digital para que puedas compartirlos fácilmente con tus seres queridos.

Confía en nosotros para preservar tus recuerdos

Entendemos el valor sentimental de tus recuerdos, por eso tratamos cada artículo con el máximo cuidado y respeto. Nuestro objetivo es brindarte un servicio personalizado y de alta calidad que supere tus expectativas.

¡No dejes que tus recuerdos se pierdan en el tiempo!

Contáctanos hoy mismo para obtener una cotización gratuita y descubre cómo podemos ayudarte a preservar tus recuerdos para las generaciones venideras.
                </p>
            </div>
            <div className="about-image">
                <img 
                    src="/Vhs.jpg" 
                    alt="Cinta VHS" 
                    className="about-img"
                />
            </div>
        </div>
    </header>
        </>
    );
};

/* Descripción del código:

1. Componente AboutPage:
   - Es un componente funcional que renderiza contenido estático para la página "Sobre Nosotros".

2. Estructura HTML:
   - Se utiliza un Fragment (`<> </>`) para encapsular los elementos retornados sin añadir nodos extra al DOM.
   - Contiene un `header` con un título principal (`h1`) que indica el propósito de la página.

3. Uso:
   - Este componente es ideal para presentar información sobre la aplicación, su misión, equipo o cualquier detalle relevante.
   - Es modular y puede expandirse fácilmente para incluir más contenido si es necesario.

Este archivo define una página sencilla pero clara, que puede ser reutilizada o adaptada en diferentes contextos dentro de la aplicación.*/
