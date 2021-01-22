<template>
  <div>
      <div v-if="currentPlace">
          <h3>Nearest Covid Vaccinations</h3>
           <GmapMap
                :center="currentPlace"
                :zoom="14"
                map-type-id="roadmap"
                style="width: 1500px; height: 800px;"
                >
                    <GmapMarker
                        :key="index"
                        v-for="(m, index) in new_markers"
                        :position="m"
                        :label="m.full_name"
                        :clickable="true"
                        @click="setLocation(m)"
                        :icon="{url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'}"
                    ></GmapMarker>
            </GmapMap>
      </div>
  </div>
</template>

<script>
import * as VueGoogleMaps from 'vue2-google-maps';
import {mapGetters, mapMutations} from 'vuex';

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
            vaccineLocations: [],
            selectedLocation: {},
        }
    },

    computed: {
        ...mapGetters([
            'currentPlace'
        ]),
        new_markers() {
            return this.vaccineLocations.map(location => {
                return {
                    full_name: location['Location Name'],
                    lat: location['Latitude'],
                    lng: location['Longitude']
                }
            })
        }
    },
    
    mounted() {
        this.geolocate();
    },

    methods: {
        ...mapMutations([
            'setPageSelected'
        ]),

        setLocation(selectedLocation) {
            this.selectedLocation = selectedLocation;
        },
        // receives a place object via the autocomplete component
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
        },

        getAirtableDataLocations() {
            let locations = [];
            let Airtable = require('airtable');
            let base = new Airtable({apiKey: "keyhqvUJ2Ts3Vcv4j"}).base('appedNK5Mm6LH7rVD');
            base('Locations').select({view: "Grid view"})
                .eachPage(function page(records, fetchNextPage) {
                    records.forEach(function(record) {
                        if (record.fields['Ready'] === 'Ready') {
                            locations.push(record.fields);
                        }
                    });
                    fetchNextPage();
                });
            return locations;
        },
    },
    async created() {
        this.vaccineLocations = await this.getAirtableDataLocations();
    },
}
</script>

<style scoped>
    #input-container {
        margin-bottom: 50px;
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

