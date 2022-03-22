<template>
  <div>
    <div class="d-flex align-items-center justify-content-between header">
      <div class="ms-sm-5 ms-2 logo">
        <img src="@/assets/logo.png" alt="logo">
      </div>
      <nav>
        <router-link to="/">Форма</router-link> 
        <router-link to="/PreviewView">Превью</router-link>
      </nav>
    </div>
    
    <router-view/>
  
  </div>
</template>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header{
  border-bottom: 2px solid #cecece;
}
.logo{
  position:absolute
}
nav {
  padding: 30px;
  width: 100%;
  a {
    text-decoration: none;
    font-weight: bold;
    color: rgba(17, 17, 17, 0.48);
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    padding: 0 12px;

    &.router-link-exact-active {
      color: rgba(17, 17, 17, 0.55);
    }
  }
  a:hover {
    text-decoration: none;
    color: rgba(17, 17, 17, 0.48);
  }
}
</style>
