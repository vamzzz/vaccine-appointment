<template>
    <div class="location-container">
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
        <div id="calendly"></div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters([
            'formAttributes'
        ])
    },

    mounted() {
        Calendly.initInlineWidget({
            url: 'https://calendly.com/vamshi-adimulam/testing',
            parentElement: document.getElementById('calendly'),
            prefill: {
                firstName: this.formAttributes.firstName,
                lastName: this.formAttributes.lastName,
                email: this.formAttributes.email,
                customAnswers: {
                    a1: '+18452482211',
                    a2: this.formAttributes.dob,
                    a3: this.formAttributes.insurance
                }
            },
            utm: {}
        });
        console.log('hello');
    }
}
</script>

<style scoped>

    #calendly {
        height: 800px;
        width: 1000px;
    }

    .location-container {
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

