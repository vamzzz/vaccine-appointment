import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAk1FjdZAOYSuOBLGqejtMjmg1nuaHfFro",
    libraries: "places"
  }
});