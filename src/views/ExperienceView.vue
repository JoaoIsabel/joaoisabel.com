<template>
  <div class="experience-page">
    <section class="experience">
      <h2>Experiência Profissional</h2>
      <p class="intro">Minha jornada profissional em tecnologia e desenvolvimento</p>

      <article class="experience-item">
        <h3>Frontend Developer</h3>
        <p class="company">Worten Portugal</p>
        <p class="period">Mar 2021 - Present · 4 yrs 7 mos</p>
        <p class="description">
          Full-time Frontend Developer focusing on modern web technologies and user experience
          optimization.
        </p>
        <ul class="skills">
          <li>Frontend Development</li>
          <li>JavaScript</li>
          <li>Web Technologies</li>
          <li>User Experience</li>
        </ul>
      </article>

      <article class="experience-item">
        <h3>Education Volunteer</h3>
        <p class="company">Junior Achievement Portugal</p>
        <p class="period">Jan 2023 - Apr 2023 · 4 mos</p>
        <p class="description">
          Seasonal volunteer inspiring and preparing children and young people to succeed in a
          global economy through transformative experiences based on three fundamental pillars:
          Citizenship and Financial Literacy, Education for Entrepreneurship and Skills for
          employability.
        </p>
        <ul class="skills">
          <li>Teaching</li>
          <li>Public Speaking</li>
          <li>Financial Literacy</li>
          <li>Entrepreneurship Education</li>
        </ul>
      </article>

      <article class="experience-item">
        <h3>Freelance Web Developer</h3>
        <p class="company">SheerME</p>
        <p class="period">Nov 2020 - Feb 2021 · 4 mos</p>
        <p class="description">
          Implementation of a front & back-end Digital Schedule to be used by customers and help
          them to manage their bookings.
        </p>
        <ul class="skills">
          <li>Frontend Development</li>
          <li>Backend Development</li>
          <li>Database Management</li>
          <li>Customer Solutions</li>
        </ul>
      </article>

      <article class="experience-item">
        <h3>Manager</h3>
        <p class="company">Portugal Roots</p>
        <p class="period">Dec 2016 - Aug 2020 · 3 yrs 9 mos</p>
        <p class="description">
          Seasonal management role overseeing operations and team coordination.
        </p>
        <ul class="skills">
          <li>Team Management</li>
          <li>Operations</li>
          <li>Leadership</li>
          <li>Project Coordination</li>
        </ul>
      </article>

      <article class="experience-item">
        <h3>Operations Department</h3>
        <p class="company">Banco Finantia</p>
        <p class="period">Aug 2014 - Dec 2016 · 2 yrs 5 mos</p>
        <p class="description">
          Working in the operations department managing banking processes and procedures.
        </p>
        <ul class="skills">
          <li>Banking Operations</li>
          <li>Financial Processes</li>
          <li>Risk Management</li>
          <li>Compliance</li>
        </ul>
      </article>

      <article class="experience-item">
        <h3>Controller/Database Analyst</h3>
        <p class="company">Neodent</p>
        <p class="period">Mar 2012 - Aug 2014 · 2 yrs 6 mos</p>
        <p class="description">
          Responsible for database analysis and control processes, ensuring data integrity and
          reporting accuracy.
        </p>
        <ul class="skills">
          <li>Database Analysis</li>
          <li>Data Control</li>
          <li>Reporting</li>
          <li>Quality Assurance</li>
        </ul>
      </article>

      <article class="experience-item">
        <h3>Controller</h3>
        <p class="company">Segurihigiene - Medicina no Trabalho, SA</p>
        <p class="period">Sep 2010 - Mar 2012 · 1 yr 7 mos</p>
        <p class="description">
          Financial and operational control in occupational health and safety company.
        </p>
        <ul class="skills">
          <li>Financial Control</li>
          <li>Operational Management</li>
          <li>Health & Safety</li>
          <li>Compliance</li>
        </ul>
      </article>

      <article class="experience-item">
        <h3>Member of Performance Reporting Team</h3>
        <p class="company">The Phone House</p>
        <p class="period">Sep 2009 - Sep 2010 · 1 yr 1 mo</p>
        <p class="description">
          Part of the performance reporting team analyzing and reporting on business metrics and
          KPIs.
        </p>
        <ul class="skills">
          <li>Performance Analysis</li>
          <li>Reporting</li>
          <li>Data Analysis</li>
          <li>KPI Management</li>
        </ul>
      </article>

      <article class="experience-item">
        <h3>Commercial Back Office Support</h3>
        <p class="company">The Nielsen Company (ACNielsen)</p>
        <p class="period">Aug 2007 - Sep 2009 · 2 yrs 2 mos</p>
        <p class="description">
          Providing back office support for commercial operations at ACNielsen, supporting market
          research activities.
        </p>
        <ul class="skills">
          <li>Back Office Operations</li>
          <li>Commercial Support</li>
          <li>Market Research</li>
          <li>Data Management</li>
        </ul>
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
// Add any interactivity here if needed
</script>

<style scoped>
/* Experience page styles - Mobile First & Responsive */
.experience-page {
  background: linear-gradient(to bottom, #f8fafc 0%, white 100%);
  min-height: calc(100vh - 80px);
  width: 100%;
}

.experience {
  max-width: 1200px;
  margin: 0 auto;
  padding: clamp(1rem, 4vw, 5rem) clamp(1rem, 3vw, 3rem);
  width: 100%;
}

.experience h2 {
  font-size: clamp(2rem, 6vw, 4rem);
  color: #2d3748;
  margin-bottom: clamp(0.75rem, 2vw, 2rem);
  text-align: center;
  font-weight: 700;
  line-height: 1.2;
}

.intro {
  font-size: clamp(1rem, 3vw, 1.8rem);
  color: #4a5568;
  text-align: center;
  margin-bottom: clamp(2rem, 5vw, 5rem);
  line-height: 1.6;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.experience-item {
  background: white;
  border-radius: clamp(8px, 2vw, 20px);
  padding: clamp(1.25rem, 4vw, 3.5rem);
  margin-bottom: clamp(1.5rem, 3vw, 3rem);
  box-shadow: 0 4px 20px rgba(0, 122, 204, 0.08);
  border-left: clamp(3px, 1vw, 6px) solid #007acc;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 122, 204, 0.1);
  position: relative;
  overflow: hidden;
}

.experience-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, #007acc, #38b2ac);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.experience-item:hover::before {
  transform: scaleX(1);
}

.experience-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0, 122, 204, 0.15);
  border-color: rgba(0, 122, 204, 0.2);
}

.experience-item h3 {
  font-size: clamp(1.2rem, 3.5vw, 2rem);
  color: #007acc;
  margin-bottom: clamp(0.5rem, 1.5vw, 1rem);
  font-weight: 700;
  line-height: 1.3;
}

.company {
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  font-weight: 600;
  color: #2d3748;
  margin-bottom: clamp(0.4rem, 1vw, 0.8rem);
  line-height: 1.4;
}

.period {
  font-size: clamp(0.85rem, 2vw, 1.2rem);
  color: #718096;
  margin-bottom: clamp(1rem, 2.5vw, 1.8rem);
  font-style: italic;
  font-weight: 500;
}

.description {
  font-size: clamp(0.95rem, 2.2vw, 1.4rem);
  line-height: 1.7;
  color: #4a5568;
  margin-bottom: clamp(1.25rem, 3vw, 2.5rem);
  text-align: justify;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: clamp(0.4rem, 1vw, 0.8rem);
  list-style: none;
  padding: 0;
  margin: 0;
}

.skills li {
  background: linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 100%);
  color: #007acc;
  padding: clamp(0.4rem, 1vw, 0.8rem) clamp(0.8rem, 2vw, 1.6rem);
  border-radius: clamp(15px, 3vw, 25px);
  font-size: clamp(0.8rem, 2vw, 1.1rem);
  border: 1px solid rgba(0, 122, 204, 0.3);
  font-weight: 500;
  transition: all 0.2s ease;
  cursor: default;
}

.skills li:hover {
  background: linear-gradient(135deg, #007acc 0%, #0056b3 100%);
  color: white;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 122, 204, 0.3);
}

/* Breakpoints específicos para melhor controle */
@media (max-width: 480px) {
  .experience {
    padding: 1rem 0.75rem;
  }

  .experience-item {
    margin-bottom: 1.25rem;
  }

  .skills li {
    flex: 1;
    min-width: calc(50% - 0.2rem);
    text-align: center;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  .experience {
    padding: 1.5rem 1rem;
  }

  .skills li {
    min-width: auto;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .experience {
    padding: 2rem 1.5rem;
  }
}

@media (min-width: 1025px) {
  .experience {
    padding: 3rem 2rem;
  }
}

/* Melhorias para dispositivos touch */
@media (hover: none) {
  .experience-item:hover {
    transform: none;
    box-shadow: 0 4px 20px rgba(0, 122, 204, 0.08);
  }

  .skills li:hover {
    background: linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 100%);
    color: #007acc;
    transform: none;
    box-shadow: none;
  }
}

/* Melhorias para acessibilidade */
@media (prefers-reduced-motion: reduce) {
  .experience-item,
  .skills li,
  .experience-item::before {
    transition: none;
  }

  .experience-item:hover {
    transform: none;
  }

  .skills li:hover {
    transform: none;
  }
}

/* Modo escuro - preparação futura */
@media (prefers-color-scheme: dark) {
  .experience-page {
    background: linear-gradient(to bottom, #1a202c 0%, #2d3748 100%);
  }

  .experience h2 {
    color: #f7fafc;
  }

  .intro {
    color: #e2e8f0;
  }

  .experience-item {
    background: #2d3748;
    border-color: #4a5568;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }

  .company {
    color: #f7fafc;
  }

  .description {
    color: #e2e8f0;
  }
}
</style>
