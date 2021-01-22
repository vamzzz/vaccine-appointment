<template>
    <div class="location-container">
        <h1>Awesome, let's confirm an appointment</h1>
        <input type="text" class="form-input" v-for="(input_type, index) in questions" :key="index"
            :placeholder="input_type.placeholder"
            :id="input_type.key"
            :name="input_type.key"
            @change="changeFormValue($event.target.value, input_type.key)">
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    data() {
        return {
            questions: [
                {key: 'firstName', placeholder: 'First Name'},
                {key: 'lastName', placeholder: 'Last Name'},
                {key: 'email', placeholder: 'Email Address'},
                {key: 'phoneNo', placeholder: 'Phone Number'},
                {key: 'dob', placeholder: 'Date of Birth'},
                {key: 'insurance', placeholder: 'Insurance'},
                {key: 'occupation', placeholder: 'Occupation'},
                {key: 'vaccineType', placeholder: 'Vaccine Type'},
            ]
        }
    },

    methods: {
        ...mapMutations([
            'setFormAttributes',
            'setPageSelected'
        ]),
        changeFormValue(newValue, input_type) {
            this.setFormAttributes({attribute: input_type, value: newValue});
        }
    },
}
</script>

<style scoped>

    #calendly {
        height: 1000px;
    }

    .location-container {
        margin-bottom: 100px;
        flex-direction: column;
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

