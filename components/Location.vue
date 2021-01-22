<template>
    <div class="location-container">
        <h1>Where would you like to get your vaccination?</h1>
        <div id="input-container">
            <label>
                <gmap-autocomplete
                    class="auto-complete"
                    @place_changed="setPlace">
                </gmap-autocomplete>
            </label>
        </div>
    </div>
</template>

<script>
import * as VueGoogleMaps from 'vue2-google-maps';
import {mapMutations} from 'vuex';
export default {
    data() {
        return {
        }
    },

    methods: {
        ...mapMutations([
            'setPageSelected'
        ]),
        setPlace(place) {
            if (place) {
                this.$store.commit('setPlace', {lat:place.geometry.location.lat(), lng:place.geometry.location.lng()});
            }
        },
    }
}
</script>

<style scoped>

    #input-container {
        margin-bottom: 20px;
    }

    .location-container {
        margin-bottom: 100px;
    }

    .auto-complete {
        width: 1000px;
        height: 50px;
    }

    #location {
        width: 1000px;
        height: 50px;
    }
    h1 {
        padding-bottom: 50px;
    }
</style>>

