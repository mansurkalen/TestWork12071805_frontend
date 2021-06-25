<template>
  <div id="app">
    <header class="app-header app-header-1 boxed">
      <div class="header-nav">
        <div class="container">
          <div class="row">
            Menu
          </div>
        </div>
      </div>
    </header>

    <section class="section section-products section-products-1">
      <router-view />
    </section>
  </div>
</template>

<script>
  export default {
    computed: {

    },
    methods: {
    }
  };
</script>
