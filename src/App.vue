<template>
  <!-- <signUp /> -->
  <router-view />
  <!-- <login /> -->
</template>

<script>
// import SignUp from './components/SignUp.vue';
export default {
  name: 'App',
  // components: {
  //   SignUp
  // }
}

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

body {
  float: center;
  padding: 0;
  margin: 0;

}

.logo {
  width: 300px;
  margin-top: 0px;
  margin-bottom: 20px;
}

.sub-title {
  text-align: center;
  font-size: 15px;
  padding-top: 7px;
  letter-spacing: 9px;
  text-transform: uppercase;
  /* font-weight: bold; */
  color: #ffffff;
}

.register,
.login {
  color: #027074;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 430px;
  height: 520px;
  color: #027074;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 0;
  margin-bottom: 60px;
  padding: 60px 0px 20px 0px;
  border-radius: 10px;
  /* background: radial-gradient(circle, #505050, #505050, #505050, #4e4e4e, #4c4c4c); */
  background: linear-gradient(90deg, rgba(4, 81, 83, 1) 0%, rgba(9, 121, 82, 1) 59%, rgba(0, 175, 126, 1) 100%);
  filter: blur(0.4px);
  box-shadow:
    /*bottom shadow*/
    0px 20px 20px rgba(0, 0, 0, 0.2),
    0px 5px 10px rgba(0, 0, 0, 0.2),
    /*long bottom shadow*/
    0px 70px 50px rgba(0, 0, 0, 0.4),
    /*right shadow*/
    30px 50px 50px rgba(0, 0, 0, 0.2),
    /*left shadow*/
    -30px 50px 50px rgba(0, 0, 0, 0.2),
    /*right inset*/
    inset 20px 0px 60px rgba(0, 0, 0, 0.1),
    /*left inset*/
    inset -20px 0px 60px rgba(0, 0, 0, 0.1);
}

.add {
  padding: 10px 5px 30px 5px;
}

/* .register input,
.login input,*/
.add input {
  width: 200px;
  height: 35px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 25px;
  margin-top: 25px;
  padding-left: 20px;
  border: dashed #045153 2px;
  color: #027074;

}

.register input:hover,
.login input:hover,
.add input:hover {
  box-shadow: rgba(10, 107, 54, 0.411) 0 -25px 18px -14px inset, rgba(12, 14, 15, 0.05) 0 1px 2px, rgba(44, 187, 99, .15) 0 2px 4px, rgba(44, 187, 99, .15) 0 4px 8px, rgba(44, 187, 99, .15) 0 8px 16px, rgba(44, 187, 99, .15) 0 16px 32px;
}

.register button,
.login button,
.add button {
  width: 225px;
  height: 35px;
  background-color: rgb(86, 131, 107);
  border-radius: 1px;
  /* box-shadow: rgba(47, 75, 57, 0.527) 0 -25px 18px -14px inset, rgba(44, 187, 99, .15) 0 1px 2px, rgba(44, 187, 99, .15) 0 2px 4px, rgba(44, 187, 99, .15) 0 4px 8px, rgba(44, 187, 99, .15) 0 8px 16px, rgba(44, 187, 99, .15) 0 16px 32px; */
  color: rgb(255, 255, 255);
  cursor: pointer;
  display: inline-block;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin-bottom: 20px;
}

.register button:hover,
.login button:hover,
.add button:hover {
  box-shadow: rgba(3, 94, 59, 0.568) 0 -25px 18px -14px inset, rgba(16, 88, 44, 0.25) 0 1px 2px, rgba(44, 187, 99, .25) 0 2px 4px, rgba(44, 187, 99, .25) 0 4px 8px, rgba(22, 117, 59, 0.25) 0 8px 16px, rgba(8, 100, 43, 0.25) 0 16px 32px;
  /* transform: scale(1.05); */

}

.username,
.password {
  display: block;
  margin-bottom: 20px;
  width: 200px;
  height: 35px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 35px;
  margin-top: 25px;
  padding-left: 20px;
  background: none;
  border: none;
  border-bottom: 1px solid antiquewhite;
  color: antiquewhite;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 18px;
}

::placeholder {
  opacity: 1;
  color: antiquewhite;
  font-size: 20px;
  font-weight: 300;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

::-ms-input-placeholder {
  color: antiquewhite;
  font-size: 20px;
  font-weight: 300;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.login a,
.register a {
  text-align: center;
  padding-top: 10px;
  color: white;
  font-size: 15px;
  margin-bottom: 20px;
}

.login svg {
  height: 30px;
  width: 30px;
  color: aliceblue;
}

label {
  position: relative;
}

.holding-cell {
  height: 100vh;
  background: linear-gradient(-90deg, rgba(102, 112, 112, 1) 0%, rgba(9, 121, 82, 1) 59%, rgba(0, 175, 126, 1) 100%);
  ;
}
</style>
