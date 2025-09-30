<template>
  <div>
    <header>
      <nav>
        <h1>João Isabel</h1>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/daily-news">Daily Code News</router-link></li>
        </ul>
      </nav>
    </header>

    <main>
      <section class="hero">
        <h2>Welcome to João Isabel's Website</h2>
        <p>Stay updated with the latest in code and technology.</p>
        <router-link to="/daily-news" class="cta-button">View Daily Code News</router-link>
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