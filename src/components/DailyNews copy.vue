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
      <section class="daily-news">
        <h2>Daily Code News</h2>
        <p class="date">Today's curated tech and coding articles - Updated daily</p>

        <article class="news-item">
          <h3><a href="https://github.blog/2024-01-15-new-github-features/" target="_blank">GitHub Introduces New Collaboration Features</a></h3>
          <p class="summary">GitHub announces enhanced code review tools and improved project management features for developers.</p>
          <p class="source">Source: GitHub Blog | <span class="date">Jan 15, 2024</span></p>
        </article>

        <article class="news-item">
          <h3><a href="https://nodejs.org/en/blog/release/v21.0.0" target="_blank">Node.js 21.0.0 Released with Performance Improvements</a></h3>
          <p class="summary">The latest Node.js version brings significant performance enhancements and new experimental features for modern JavaScript development.</p>
          <p class="source">Source: Node.js Official | <span class="date">Jan 14, 2024</span></p>
        </article>

        <article class="news-item">
          <h3><a href="https://web.dev/articles/css-grid-2024" target="_blank">CSS Grid Layout: Advanced Techniques for 2024</a></h3>
          <p class="summary">Explore the latest CSS Grid features and learn advanced layout techniques that are transforming web development.</p>
          <p class="source">Source: Web.dev | <span class="date">Jan 14, 2024</span></p>
        </article>

        <article class="news-item">
          <h3><a href="https://blog.rust-lang.org/2024/01/12/rust-security-advisory.html" target="_blank">Rust Security Advisory: Important Updates</a></h3>
          <p class="summary">The Rust team releases critical security updates and best practices for secure Rust programming.</p>
          <p class="source">Source: Rust Blog | <span class="date">Jan 12, 2024</span></p>
        </article>

        <article class="news-item">
          <h3><a href="https://developer.mozilla.org/en-US/docs/Web/API/WebAssembly" target="_blank">WebAssembly Gets New Browser Support</a></h3>
          <p class="summary">Major browsers announce enhanced WebAssembly support, opening new possibilities for high-performance web applications.</p>
          <p class="source">Source: MDN Web Docs | <span class="date">Jan 11, 2024</span></p>
        </article>

        <article class="news-item">
          <h3><a href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-3.html" target="_blank">TypeScript 5.3: New Features and Improvements</a></h3>
          <p class="summary">TypeScript 5.3 introduces improved type inference and new utility types for better developer experience.</p>
          <p class="source">Source: TypeScript Handbook | <span class="date">Jan 10, 2024</span></p>
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