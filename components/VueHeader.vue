<template>
    <div class="location-container">
        <h1>Big Vaccine Energy</h1>
        <div class="button-container">
        </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    data() {
        return {
            questions: [
                'firstName',
                'lastName',
                'email',
                'phoneNo',
                'dob',
                'insurance',
                'occupation',
                'vaccineType'
            ]
        }
    },

    computed: {
        ...mapGetters([
            'pageSelected'
        ])
    },

    methods: {
        ...mapMutations([
            'setFormAttributes',
            'setPageSelected',
            'decreasePage',
            'increasePage'
        ]),
        changeFormValue(newValue, input_type) {
            this.setFormAttributes({attribute: input_type, value: newValue});
        }
    },
}
</script>

<style scoped>
    
    .button-container {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }

    #calendly {
        height: 1000px;
    }

    .location-container {
        width: 100%;
        padding: 30px;
    }

    .form-input {
        width: 1000px;
        height: 50px;
        margin: 30px;
    }
    h1 {
        padding-bottom: 50px;
    }
</style>>

