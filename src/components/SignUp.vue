<template>
  <div class="grey-bg">
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3 white-bg text-center p-a-30">
      <!-- heading -->
       <h4 class="p-b-20">Sign up</h4>
       <div class="clearfix"></div>
       <div class="row full-width">
        <div class="col">
          <router-link to="/DesktopOne">
            <button class="btn btn-white btn-block">lk will werken</button>
          </router-link>
        </div>
        <div class="col">
          <router-link to="/DesktopOne">
            <button class="btn btn-block btn-primary">lk zeok personeel</button>
          </router-link>
        </div>
      </div>
      <div class="row full-width">
           <div class="col">
      <!-- inputs starts here -->
<div class="form-row">
<div class="col">
<!-- form starts here -->
<form @submit.prevent="checkForm($event)">
  <fieldset>
  <!-- First Name-->
    <div class="form-group">
      <label for="FirstName" class="sr-only">First Name</label>
      <span class="icon-icon-cross"  v-if="isDirty && errors['firstName'] != undefined"></span>
      <span class="icon-icon-ok"  v-if="isDirty && errors['firstName'] == undefined"></span>
      <span class="icon-icon-cross"  v-if="isDirty && errors['firstName'] != undefined"></span>
      <input type="text" class="form-control" id="FirstName" placeholder="First Name" aria-describedby="FirstName"  v-model="firstName" v-bind:class="{ 'is-invalid': isDirty && errors['firstName']}">
      <div style="color:red" v-if="errors['firstName'] != undefined">First Name required</div>
    </div>
      <!-- Last Name-->
    <div class="form-group">
      <label for="LasttName" class="sr-only">Last Name</label>
      <span class="icon-icon-cross"  v-if="isDirty && errors['lastName'] != undefined"></span>
      <span class="icon-icon-ok"  v-if="isDirty && errors['lastName'] == undefined"></span>
      <input type="text" class="form-control" id="LasttName" placeholder="Last Name" aria-describedby="LasttName" v-model="lastName" v-bind:class="{ 'is-invalid': isDirty && errors['lastName']}">
      <div style="color:red" v-if="errors['lastName'] != undefined">Last Name required</div>
    </div>
    <!-- Company Name-->
    <div class="form-group">
      <label for="Company" class="sr-only">Company</label>
      <span class="icon-icon-cross"  v-if="isDirty && errors['company'] != undefined"></span>
      <span class="icon-icon-ok"  v-if="isDirty && errors['company'] == undefined"></span>
      <input type="text" class="form-control" id="Company" placeholder="Company" aria-describedby="CompanyName" v-model="company" v-bind:class="{ 'is-invalid': isDirty && errors['company']}">
      <div style="color:red" v-if="errors['company'] != undefined">Company name required</div>
    </div>
    <!-- Telephone Number-->
      <div class="form-group">
      <label class="sr-only" for="Telephone">Telephone</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <div class="input-group-text">+31</div>
        </div>
        <span class="icon-icon-cross"  v-if="isDirty && errors['telephone'] != undefined"></span>
      <span class="icon-icon-ok"  v-if="isDirty && errors['telephone'] == undefined"></span>
        <input type="text" class="form-control" id="Telephone" placeholder="Telephone Number" aria-describedby="TelephoneNumber" v-model="telephone" v-bind:class="{ 'is-invalid': isDirty && errors['telephone']}">
      <div style="color:red" v-if="errors['telephone'] != undefined"> </div>
      </div>
    </div>
    <!-- -->
    <button type="submit" class="btn btn-block disabled">Sign up</button>
  </fieldset>
</form>
</div>
  </div>
        </div>
      </div>
      </div>
    </div>
</div>

</div>
</template>

<script>
export default {
  name: 'SignUp',
  data: function () {
    return {
      errors: {},
      firstName: undefined,
      lastName: undefined,
      company: undefined,
      telephone: undefined,
      isDirty: false
    }
  },
  methods: {
    checkForm: function (e) {
      this.isDirty = true
      this.errors = {}
      if (this.firstName && this.lastName && this.company && this.telephone) {
        return true
      }
      if (!this.lastName) {
        this.errors['lastName'] = 'lastName required.'
      }
      if (!this.company) {
        this.errors['company'] = 'company required.'
      }
      if (!this.telephone) {
        this.errors['telephone'] = ''
      }
      if (!this.firstName) {
        this.errors['firstName'] = 'firstName required.'
      }
      e.preventDefault()
    }
  }
}
</script>

<style>
/* Inneer pages styles can be found inside assets/scss/custom.scss */
</style>
