<template>
  <div id="app">
    <body>
      <header>
        <p>counter<span>App</span></p>
        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/counter">Counter</router-link>
        </nav>
      </header>
      <router-view></router-view>
    </body>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
body{
  margin: 0;
  padding: 4px;
  background-color: #fefefe;
  font-family: 'Poppins', sans-serif;
}
header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px;
  background-color: #fff;
 box-shadow:  0 2px 4px 4px rgba(0,0,0,0.10);
}
header p{
  color: #666;
  font-style: oblique;
  font-size: 20px;
  font-weight: 900;
  margin-left: 12px;
}
header span{
  color: #6351c6;
}
header a{
  text-decoration: none;
  color: #6351c6;
  font-size: 18px;
  font-weight: 700;
  margin-right: 12px;
}
header a:hover{
  color: #555baf;
  text-decoration: underline;
}
</style>
