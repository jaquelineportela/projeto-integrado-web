<template>
    <div>
    <Nav />
    <Corpo />
    </div>
</template>
<script>
import Nav from './Nav.vue'
import Corpo from './Corpo.vue'

export default {
    name: 'Home',
    components:{
        Nav,
        Corpo
    }
}
</script>

<style>

#app {
  text-align: center;
}

* {
  box-sizing: border-box;
}

body{
  background: #e0c4ff !important;
  min-height: 100vh;
  display: flex;
  font-weight: 400;
  font-family: "Fira Sans", sans-serif;
}

h1, h2, h3, h4, h5, h6, label, span{
  font-weight: 500;
  font-family: 'Fira Sans', sans-serif;
}

body, html, #app, #root, .auth-wrapper{
  width: 100%;
  height: 100%;
}

#app{
  text-align: center;
  margin-top: 300px;
  height: 10px;
}

.navbar-light{
  background-color: whitesmoke;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
}

.navbar-collapse{
  flex-basis: 100%;
  flex-grow: 0;
  align-items: revert;
}

.navbar-expand .navbar-nav .nav-link {
    padding-right: .5rem;
    padding-left: 2rem;
}

.navbar-light .navbar-nav .nav-link {
    color: #a065ff;

}

.auth-wrapper{
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
}


.auth-wrapper .form-control:focus{
  border-color: #167bff;
  box-shadow: none;
}
.auth-wrapper .auth-inner{
  border-radius: 10px;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  margin: auto;
  background: #ffffff;
  transition: all .3s;
  max-width: none;
  width: 88%;
  padding: 30px;
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translate(-50%, -50%);
}
.auth-wrapper, h4{
  text-align: center;
  margin: 0;
  line-height: 1;
  padding-bottom: 20px;
}

.custom-control-label{
  font-weight: 400;
}

.forgot-password,
.forgot-password a{
  text-align: right;
  font-size: 13px;
  padding-top: 10px;
  color: #7f7d7d;
  margin: 0;
}

.forgot-password a{
  color: #167bff;
}
</style>
