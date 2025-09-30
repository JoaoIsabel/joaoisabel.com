<template>
  <div>
    <header>
      <nav>
        <h1>João Isabel</h1>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/experience">Experience</router-link></li>
        </ul>
      </nav>
    </header>

    <main>
      <section class="experience">
        <h2>Experiência Profissional</h2>
        <p class="intro">Minha jornada profissional em tecnologia e desenvolvimento</p>

        <article class="experience-item">
          <h3>Desenvolvedor Full Stack</h3>
          <p class="company">Nome da Empresa</p>
          <p class="period">Janeiro 2023 - Presente</p>
          <p class="description">Desenvolvimento de aplicações web modernas utilizando React, Node.js e PostgreSQL. Responsável pela arquitetura e implementação de APIs RESTful e integração com serviços de terceiros.</p>
          <ul class="skills">
            <li>JavaScript/TypeScript</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>PostgreSQL</li>
          </ul>
        </article>

        <article class="experience-item">
          <h3>Desenvolvedor Frontend</h3>
          <p class="company">Empresa Anterior</p>
          <p class="period">Junho 2021 - Dezembro 2022</p>
          <p class="description">Criação de interfaces de usuário responsivas e acessíveis. Colaboração com designers UX/UI para implementar experiências de usuário excepcionais.</p>
          <ul class="skills">
            <li>Vue.js</li>
            <li>CSS/SASS</li>
            <li>HTML5</li>
            <li>Git</li>
          </ul>
        </article>

        <article class="experience-item">
          <h3>Estagiário de Desenvolvimento</h3>
          <p class="company">Startup Tecnológica</p>
          <p class="period">Janeiro 2021 - Maio 2021</p>
          <p class="description">Primeiro contato profissional com desenvolvimento web. Apoio na manutenção de sites e aplicações simples, aprendendo boas práticas de programação.</p>
          <ul class="skills">
            <li>HTML/CSS</li>
            <li>JavaScript básico</li>
            <li>WordPress</li>
            <li>Photoshop</li>
          </ul>
        </article>
      </section>
    </main>

    <footer>
      <p>&copy; 2024 João Isabel. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
// Add any interactivity here if needed
</script>

<style scoped>
/* Use your styles or import styles.css */
</style>