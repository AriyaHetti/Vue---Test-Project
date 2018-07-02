<template>
  <div id="app">
    <header>
      <div class="navbar navbar-light white-bg">
        <div class="container d-flex justify-content-between">
          <a href="" class="navbar-brand d-flex align-items-center xs-align-center">
        <strong><router-link to="/">  <img src="./assets/img/temper_logo.png" alt="temper Logo"/></router-link></strong>
          </a>
          <!-- Top navigation if wanted
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          -->
        </div>
      </div>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
