<template>
  <h1>Bloggen</h1>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/blogWriting">Write</router-link> |
    <router-link to="/aboutUs">About</router-link> |
    <router-link to="/login">Login</router-link>

  </nav>
  <router-view />
</template>

<style lang="scss">
h1 {
  margin-left: 8rem;

}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

button {
  padding: 8px;
  margin-left: 20px;
}

nav {
  margin-top: -46px;
  text-align: right;
  margin-right: 10rem;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
