<template>
<div>
<!-- Homepage container -->
 <div class="pattern-box">
<div class="home-content">
<div class="container">
  <div class="row">
  <!-- Home image container-->
    <div class="col-md-6">
      <div class="m-b-40">
      <img src="../assets/img/cta.jpg"  alt="temper - call to action"/>
      </div>
    </div>
  <!-- Home page content container-->
    <div class="col-md-6 xs-text-align-center">
      <h4>Ga vandaag nog <span class="secondry">aan de slag</span></h4>
      <h5 class="p-t-30">Take control...be a boss!</h5>
      <p class="p-t-10">
      Bij Temper bepaal je zelf waar je professionaliteit het best tot zjin recht komt - en wanneer. Freelance werken dus, maar dan met nog meer vrijheld.
      </p>
      <h5 class="p-t-30">Ruime keuze en goed betaald</h5>
      <p class="p-t-10">
      Opdrachtgevers plaatsen regelmatig klussen in verschillende categorieen en bettalen en betalen goed voor fantastisch werk.
      </p>
       <h5 class="p-t-30">Temper vrijblijvend proberen</h5>
      <p class="p-t-10">
      Je kunt een keer werken via Temper zonder dat je een btw-nummer nodig hebt. Blijkt Temper na de eerste keer werken inderdaad te bevallen, dan helpen wij jegraag vender richting het ondernemerschap.</p>
    <div class="p-t-80 p-b-60 xs-align-center xs-text-align-center">
<router-link to="/SignupOptions">
<button class="btn btn-primary">Get Started</button>
</router-link>
    </div>
    </div>
  </div>
</div>
</div>
<!-- Background pattern-->
<div class="bg-pattern"></div>
<!-- Angled container-->
<div class="angled-div"></div>
</div>
</div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Ariya Hettiarachchi'
    }
  }
}
</script>

<style>
/* Home page styles can be found inside assets/scss/home-page.scss */
</style>
