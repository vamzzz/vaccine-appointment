<template>
  <div class="page">
      <vue-header></vue-header>
      <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
      <div class="container">
            <location v-if="pageSelected === 1"></location>
            <maps v-if="pageSelected === 2"></maps>
            <questionaire v-if="pageSelected === 3"></questionaire>
            <calendly-vue v-if="pageSelected === 4"></calendly-vue>
      </div>
      <button class="form-button" @click="increasePage()">Next</button>
      <button v-if="pageSelected > 1" class="back-button" @click="decreasePage()">Back</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import Location from '~/components/Location.vue';
import Maps from '~/components/Maps.vue';
import Questionaire from '~/components/Questionaire.vue';
import CalendlyVue from '../components/Calendly.vue';
import VueHeader from '../components/VueHeader.vue';

export default {

    data() {
        return {

        }
    },
    components: {
        Location, Maps, Questionaire, CalendlyVue, VueHeader
    },

    computed: {
        ...mapGetters([
            'pageSelected',
        ])
    },
    methods: {
        ...mapMutations([
            'increasePage'
        ])
    }
}
</script>

<style scoped>

.form-button {
    text-transform: uppercase;
    font-size: 13px;
    line-height: 15px;
    width: 200px;
    height: 48px;
    background: #0384FB;
    border-radius: 3px;
    border: none;
    color: white;
}

.page {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
}

.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
