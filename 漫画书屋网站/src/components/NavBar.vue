<template>
  <nav class="navbar">
    <div class="container">
      <h1 href="#" class="logo">⭐浮浮の书屋⭐</h1>
      <ul class="nav-links">
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="#domestic" ></router-link></li>
        <li><router-link to="#international">⭐⭐⭐⭐⭐</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isLoggedIn: false,
      username: '用户'
    }
  }
}
</script>

<style scoped>
.navbar {
  background-color: #86a4c2;
  padding: 15px 0;
  color: white;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.logo {
  font-size: 27px;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

.nav-links {
  display: flex;
  list-style: none;
}

.nav-links li {
  margin-left: 20px;
}

.nav-links a {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #42b983;
}
</style>