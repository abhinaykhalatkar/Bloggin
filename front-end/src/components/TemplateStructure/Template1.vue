<template>
  <div class="columns-bg">
    <section id="logo" class="tm-section-logo">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12 offset-sm-0 col-md-6 offset-md-6">
            <div class="tm-site-name-container">
              <div class="tm-site-name-container-inner">
                <h1 class="text-uppercase tm-text-primary tm-site-name">
                  Sided
                </h1>
                <p class="tm-text-primary tm-site-description">
                  new theme just for you
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>


</template>
<script>
export default {
  name: "template1",
  components: {}
}

</script>
<style scoped>
.tm-section-logo {
  padding-top: 170px;
  padding-bottom: 0;
}

.columns-bg {
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(to right, #99ccff, #99ccff 50%, #ffffff 50%);
}

.container-fluid {
  max-width: 1310px;

}

.tm-site-name-container {
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  border-bottom: 1px solid #99ccff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tm-site-name-container-inner {
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
}

.tm-site-name {
  font-size: 3.5rem;
  font-weight: 600;
}

.tm-text-primary {
  color: #99ccff;
}

.tm-site-description {
  font-size: 1.3rem;
  margin-bottom: 50px;
}

p {
  line-height: 1.7;
}
</style>