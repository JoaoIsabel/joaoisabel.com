<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <header>
      <nav>
        <h1>João Isabel</h1>
        <div class="nav-links">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/experience">Experience</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </div>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style>
/* Global styles for responsive layout */
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Container utility class for consistent centering */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 576px) {
  .container {
    padding: 0 1.5rem;
  }
}

@media (min-width: 768px) {
  .container {
    padding: 0 2rem;
  }
}

@media (min-width: 992px) {
  .container {
    padding: 0 2.5rem;
  }
}

@media (min-width: 1200px) {
  .container {
    padding: 0 3rem;
  }
}
</style>

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

header {
  background: #007acc;
  color: white;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

nav {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav h1 {
  font-size: clamp(1.3rem, 4vw, 1.8rem);
  margin: 0;
  font-weight: 700;
}

.nav-links {
  display: flex;
  gap: clamp(1rem, 3vw, 2rem);
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: clamp(0.9rem, 2.5vw, 1rem);
  transition: all 0.3s ease;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: #cce7ff;
  background-color: rgba(255, 255, 255, 0.1);
}

main {
  flex: 1;
  background: #f8fafc;
  width: 100%;
}

/* Mobile and tablet responsive design */
@media (max-width: 480px) {
  nav {
    padding: 0 0.75rem;
  }

  .nav-links {
    gap: 0.75rem;
  }

  .nav-links a {
    padding: 0.4rem 0.6rem;
    font-size: 0.85rem;
  }
}

@media (max-width: 640px) {
  nav {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    padding: 1rem;
  }

  header {
    padding: 0.75rem 0;
  }
}

@media (min-width: 576px) {
  nav {
    padding: 0 1.5rem;
  }
}

@media (min-width: 768px) {
  nav {
    padding: 0 2rem;
  }
}

@media (min-width: 992px) {
  nav {
    padding: 0 2.5rem;
  }
}

@media (min-width: 1200px) {
  nav {
    padding: 0 3rem;
  }
}
</style>
