<template>
  <div id="app">
    <dog-header />
    <router-view v-if="loaded" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Header from './components/Header.vue'
export default {
  name: 'app',
  components: {
    'dog-header': Header
  },
  directives: {
    scroll
  },
  data () {
    return {
      loaded: false
    }
  },
  methods: {
    ...mapActions('global', {
      loadBreeds: 'loadBreeds',
      loadImgs: 'loadImgs'
    })
  },
  computed: {
    ...mapGetters('global', {
      breedsNames: 'getBreedsNames',
      breed: 'getSpecialBreedName'
    })
  },
  async mounted () {
    await this.loadBreeds()
    await this.loadImgs()
    this.loaded = true
    console.log(this.breed('akita'))
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #000;
}

body {
  margin: 0;
}
</style>
