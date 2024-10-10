import React from 'react';

export default function BarberShopLanding() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: 'black', backgroundColor: 'white' }}>
      <header style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e5e5e5' }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '64px', height: '64px', overflow: 'hidden', borderRadius: '50%', position: 'relative' }}>
            
          </div>
        </a>
        <nav>
          <a href="#servicios" style={{ marginRight: '1rem' }}>Servicios</a>
          <a href="#barberos" style={{ marginRight: '1rem' }}>Nuestros Barberos</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <main>
        <section style={{ backgroundColor: 'black', color: 'white', padding: '4rem 1rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Bienvenido a Barbiere</h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', color: '#a0aec0' }}>
            Salone di Bellezza - Experimenta el arte del cuidado personal con nuestros expertos barberos.
          </p>
          <button 
            style={{ 
              backgroundColor: 'white', 
              color: 'black', 
              padding: '0.5rem 1rem', 
              border: 'none', 
              borderRadius: '0.25rem', 
              marginTop: '1rem', 
              cursor: 'pointer' 
            }}
          >
            Reservar Cita
          </button>
        </section>

        <section id="servicios" style={{ padding: '4rem 1rem' }}>
          <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '2rem' }}>Nuestros Servicios</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{ backgroundColor: 'black', color: 'white', padding: '2rem', borderRadius: '0.5rem' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Servicios para Caballeros</h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
                <li>Corte para caballeros y niños</li>
                <li>Faciales</li>
                <li>Trabajos de color</li>
                <li>Arreglo de barba</li>
                <li>Entre otros...</li>
              </ul>
            </div>
            <div style={{ backgroundColor: 'black', color: 'white', padding: '2rem', borderRadius: '0.5rem' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Servicios para Damas</h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
                <li>Corte</li>
                <li>Trabajos de color</li>
                <li>Tratamientos de keratina, botox, etc...</li>
                <li>Manicura en gel</li>
                <li>Acrílico</li>
                <li>Entre otros...</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="barberos" style={{ backgroundColor: 'black', color: 'white', padding: '4rem 1rem' }}>
          <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '2rem' }}>Conoce a Nuestros Barberos</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            {[1, 2, 3].map((barbero) => (
              <div key={barbero} style={{ backgroundColor: 'white', color: 'black', padding: '2rem', borderRadius: '0.5rem', textAlign: 'center' }}>
                
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Barbero {barbero}</h3>
                <p style={{ color: '#4a5568' }}>Experto en estilos clásicos y modernos</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding: '4rem 1rem' }}>
          <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '2rem' }}>Lo Que Dicen Nuestros Clientes</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{ backgroundColor: 'black', color: 'white', padding: '2rem', borderRadius: '0.5rem' }}>
              <p style={{ fontStyle: 'italic' }}>El mejor corte de pelo que he tenido. ¡La atención al detalle es increíble!</p>
              <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>- Juan D.</p>
            </div>
            <div style={{ backgroundColor: 'black', color: 'white', padding: '2rem', borderRadius: '0.5rem' }}>
              <p style={{ fontStyle: 'italic' }}>El afeitado con toalla caliente fue increíblemente relajante. ¡Definitivamente volveré!</p>
              <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>- Miguel S.</p>
            </div>
          </div>
        </section>

        <section id="contacto" style={{ backgroundColor: 'black', color: 'white', padding: '4rem 1rem' }}>
          <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '2rem' }}>Contáctanos</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{ backgroundColor: 'white', color: 'black', padding: '2rem', borderRadius: '0.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>Ubicación</h3>
              <p style={{ marginBottom: '1rem' }}>
                <span role="img" aria-label="location">📍</span> Calle Villa, Esquina Distrito 295, Ponce, Puerto Rico
              </p>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginTop: '1.5rem', marginBottom: '1rem' }}>Horario</h3>
              <p><span role="img" aria-label="clock">🕒</span> Lun-Sáb: 9am - 7pm</p>
              <p><span role="img" aria-label="clock">🕒</span> Dom: Cerrado</p>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginTop: '1.5rem', marginBottom: '1rem' }}>Contacto</h3>
              <p><span role="img" aria-label="phone">📞</span> (787) 245-4411</p>
              <p><span role="img" aria-label="email">📧</span> julianie1999@gmail.com</p>
            </div>
            <div style={{ backgroundColor: 'white', color: 'black', padding: '2rem', borderRadius: '0.5rem' }}>
              
            </div>
          </div>
        </section>
      </main>

      <footer style={{ borderTop: '1px solid #e5e5e5', padding: '1rem', textAlign: 'center', fontSize: '0.875rem', color: '#4a5568' }}>
        <p>© 2024 Barbiere - Salone di Bellezza. Todos los derechos reservados.</p>
        <nav style={{ marginTop: '0.5rem' }}>
          <a href="#" style={{ marginRight: '1rem' }}>Términos de Servicio</a>
          <a href="#">Privacidad</a>
        </nav>
      </footer>
    </div>
  );
}