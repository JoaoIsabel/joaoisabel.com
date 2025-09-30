<template>
  <div class="about">
    <div class="container">
      <section class="about-hero">
        <h1>Sobre Mim</h1>
        <p class="intro">
          Desenvolvedor Frontend apaixonado por criar experiências digitais excepcionais
        </p>
      </section>

      <section class="about-content">
        <div class="content-grid">
          <div class="about-text">
            <h2>Minha História</h2>
            <p>
              Sou um desenvolvedor frontend com mais de 4 anos de experiência na Worten Portugal,
              onde me especializo em tecnologias web modernas e otimização da experiência do
              usuário.
            </p>
            <p>
              Ao longo da minha carreira, transitei de áreas como operações bancárias e análise de
              dados para o desenvolvimento web, trazendo uma perspectiva única que combina
              conhecimento técnico com experiência empresarial.
            </p>
            <p>
              Acredito na importância da educação e do voluntariado, tendo contribuído com a Junior
              Achievement Portugal para inspirar jovens a desenvolverem competências
              empreendedoriais e de literacia financeira.
            </p>
          </div>

          <div class="skills-section">
            <h2>Competências Técnicas</h2>
            <div class="skills-grid">
              <div class="skill-category">
                <h3>Frontend</h3>
                <ul>
                  <li>JavaScript/TypeScript</li>
                  <li>Vue.js</li>
                  <li>HTML5 & CSS3</li>
                  <li>Responsive Design</li>
                </ul>
              </div>

              <div class="skill-category">
                <h3>Backend & Database</h3>
                <ul>
                  <li>Node.js</li>
                  <li>Database Management</li>
                  <li>API Development</li>
                  <li>Data Analysis</li>
                </ul>
              </div>

              <div class="skill-category">
                <h3>Soft Skills</h3>
                <ul>
                  <li>Team Leadership</li>
                  <li>Project Management</li>
                  <li>Public Speaking</li>
                  <li>Problem Solving</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
/* About page styles - Mobile First & Responsive */
.about {
  background: linear-gradient(135deg, #f8fafc 0%, white 50%, #f0f8ff 100%);
  min-height: calc(100vh - 80px);
  width: 100%;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: clamp(1rem, 4vw, 3rem) clamp(1rem, 3vw, 2rem);
  width: 100%;
}

.about-hero {
  text-align: center;
  margin-bottom: clamp(3rem, 8vw, 6rem);
}

.about-hero h1 {
  font-size: clamp(2.5rem, 7vw, 5rem);
  color: #2d3748;
  margin-bottom: clamp(1rem, 3vw, 2.5rem);
  font-weight: 700;
  line-height: 1.2;
  background: linear-gradient(135deg, #007acc 0%, #38b2ac 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.intro {
  font-size: clamp(1.1rem, 3vw, 1.8rem);
  color: #4a5568;
  line-height: 1.6;
  max-width: 900px;
  margin: 0 auto;
}

.about-content {
  background: white;
  border-radius: clamp(12px, 3vw, 24px);
  padding: clamp(2rem, 5vw, 4rem);
  box-shadow: 0 10px 40px rgba(0, 122, 204, 0.1);
  border: 1px solid rgba(0, 122, 204, 0.1);
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(2rem, 5vw, 4rem);
}

.about-text h2,
.skills-section h2 {
  font-size: clamp(1.8rem, 4vw, 3.2rem);
  color: #007acc;
  margin-bottom: clamp(1rem, 3vw, 2.5rem);
  font-weight: 700;
  line-height: 1.3;
}

.about-text p {
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  line-height: 1.8;
  color: #4a5568;
  margin-bottom: clamp(1rem, 3vw, 2rem);
  text-align: justify;
}

.skills-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1.5rem, 4vw, 2rem);
}

.skill-category {
  background: linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 100%);
  padding: clamp(1.5rem, 4vw, 2rem);
  border-radius: clamp(8px, 2vw, 16px);
  border: 1px solid rgba(0, 122, 204, 0.2);
  transition: all 0.3s ease;
}

.skill-category:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 122, 204, 0.15);
  border-color: rgba(0, 122, 204, 0.3);
}

.skill-category h3 {
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  color: #007acc;
  margin-bottom: clamp(0.75rem, 2vw, 1.3rem);
  font-weight: 600;
  line-height: 1.3;
}

.skill-category ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.skill-category li {
  font-size: clamp(0.95rem, 2.2vw, 1.3rem);
  color: #4a5568;
  padding: clamp(0.4rem, 1vw, 0.8rem) 0;
  border-bottom: 1px solid rgba(0, 122, 204, 0.1);
  transition: all 0.2s ease;
  line-height: 1.5;
}

.skill-category li:last-child {
  border-bottom: none;
}

.skill-category li:hover {
  color: #007acc;
  padding-left: clamp(0.5rem, 1vw, 1rem);
  font-weight: 500;
}

/* Breakpoints específicos */
@media (min-width: 768px) {
  .content-grid {
    grid-template-columns: 1.2fr 1fr;
    gap: 3rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 1024px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 1rem 0.75rem;
  }

  .about-content {
    padding: 1.5rem;
  }
}

/* Melhorias para dispositivos touch */
@media (hover: none) {
  .skill-category:hover {
    transform: none;
    box-shadow: none;
  }

  .skill-category li:hover {
    padding-left: 0;
    color: #4a5568;
    font-weight: normal;
  }
}

/* Melhorias para acessibilidade */
@media (prefers-reduced-motion: reduce) {
  .skill-category,
  .skill-category li {
    transition: none;
  }

  .skill-category:hover {
    transform: none;
  }
}

/* Modo escuro - preparação futura */
@media (prefers-color-scheme: dark) {
  .about {
    background: linear-gradient(135deg, #1a202c 0%, #2d3748 50%, #1a365d 100%);
  }

  .about-hero h1 {
    background: linear-gradient(135deg, #63b3ed 0%, #4fd1c7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .intro {
    color: #e2e8f0;
  }

  .about-content {
    background: #2d3748;
    border-color: #4a5568;
  }

  .about-text p {
    color: #e2e8f0;
  }

  .skill-category {
    background: linear-gradient(135deg, #2d3748 0%, #4a5568 100%);
    border-color: #4a5568;
  }

  .skill-category li {
    color: #e2e8f0;
    border-color: rgba(255, 255, 255, 0.1);
  }
}
</style>
