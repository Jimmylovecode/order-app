<template>
  <div id="app">
    <div class="container"> 
      <app-header></app-header>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
    <br>
    <div class="container">
      <div class="col-sm-12 col-md-4">
        <router-view name="orderingGuide"></router-view>
      </div>
      <div class="col-sm-12 col-md-4">
        <router-view name="delivery"></router-view>
      </div>
      <div class="col-sm-12 col-md-4">
        <router-view name="history"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    AppHeader:Header
  }
}
</script>

<style>

</style>
