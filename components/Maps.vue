<template>
  <div>
    <div id="input-container">
        <label>
            <gmap-autocomplete
                class="auto-complete"
                @place_changed="setPlace">
            </gmap-autocomplete>
            <button @click="addMarker">Add</button>
        </label>
    </div>
    <GmapMap
        :center="currentPlace"
        :zoom="14"
        map-type-id="roadmap"
        style="width: 1500px; height: 800px;"
        >
            <GmapMarker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :label="m.position.full_name"
                :clickable="true"
                @click="center=m.position"
                :icon="{url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'}"
            ></GmapMarker>
    </GmapMap>

  </div>
</template>

<script>
import * as VueGoogleMaps from 'vue2-google-maps';

export default {
    name: 'Maps',
    asyncData() {
        return {
        name: (process.server ? 'server' : 'client')
        }
    },
    data() {
        return{
            center: { lat: 45.508, lng: -73.587 },
            markers: [{position:{full_name: "My House",lat:34.067680, lng:-84.235060}}],
            places: [],
            currentPlace: {lat:34.067680, lng:-84.235060}
        }
    },
    mounted() {
        this.geolocate();
    },

    methods: {
        // receives a place object via the autocomplete component
        setPlace(place) {
            if (place) {
                this.currentPlace = {lat:place.geometry.location.lat(), lng:place.geometry.location.lng()};
            }
        },
        addMarker() {
            if (this.currentPlace) {
                const marker = {
                lat: this.currentPlace.geometry.location.lat(),
                lng: this.currentPlace.geometry.location.lng()
                };
                this.markers.push({ position: marker });
                this.places.push(this.currentPlace);
                this.center = marker;
                this.currentPlace = null;
            }
        },
        geolocate: function() {
            navigator.geolocation.getCurrentPosition(position => {
                this.center = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
                };
            });
        }
    }
}
</script>

<style scoped>
    #input-container {
        margin-bottom: 50px;
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
    #map {
        height: 400px;
        width: 100%;
    }
</style>>

