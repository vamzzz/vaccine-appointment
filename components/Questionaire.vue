<template>
  <div class="location-container">
      <h1>Awesome, let's confirm an appointment</h1>
      <input type="text" class="form-input" placeholder="First Name" id="first_name" name="first_name">
      <input type="text" class="form-input" placeholder="Last Name" id="last_name" name="last_name">
      <input type="text" class="form-input" placeholder="Date of Birth" id="dob" name="dob">
      <input type="text" class="form-input" placeholder="Occupation" id="occupation" name="occupation">
      <input type="text" class="form-input" placeholder="Insurance" id="insurance" name="insurance">
      <input type="text" class="form-input" placeholder="Phone Number" id="phone_no" name="phone_no">
      <input type="text" class="form-input" placeholder="Email Address" id="email" name="email">

    <!-- Calendly inline widget begin -->
    <div class="calendly-inline-widget" data-url="https://calendly.com/vamshi-adimulam/testing?hide_event_type_details=1&hide_gdpr_banner=1" style="min-width:320px;height:630px;"></div>
    <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
    <!-- Calendly inline widget end -->
  </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style scoped>
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

