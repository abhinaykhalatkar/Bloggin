<template>
 <div class="slider-ctr">
  <figure class="slide"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/111167/img5.jpeg" alt="Sky"/>
    <figcaption> 
      <div class="title">Template 4</div>
      <div class="author"></div>
    </figcaption>
  </figure>
  <figure class="slide"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/111167/img1.jpeg" alt="River"/>
    <figcaption> 
      <div class="title">Template 3</div>
      <div class="author"></div>
    </figcaption>
  </figure>
  <figure class="slide"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/111167/img4.jpeg" alt="Rain"/>
    <figcaption>
      <div class="title">Template 2</div>
      <div class="author"></div>
    </figcaption>
  </figure>
  <figure class="slide text-on"><img src="./../../assets/Screen2Assets/template1.png" alt="Ocean"/>
    <figcaption>
      <div class="title">Template 1</div>
      <div class="author"></div>
    </figcaption>
  </figure>
  <div class="slider-control">
    <div class="control prev disabled">
      <div class="icon ion-chevron-left" > &lt;</div>
   
    </div>
    <div class="control next">
      <div class="icon ion-chevron-right" > > </div>
    </div>
  </div>
</div>
</template>
<script>

export default {
  name: "TemplateSelector",
  mounted(){
    let sliderControl = document.querySelector(".slider-control");
// slides informations
let slides = document.querySelectorAll(".slide"),
    slidesLength = slides.length;

// slides array
let slidesArr = [].slice.call(slides);

// reverse array sorting
slidesArr = slidesArr.reverse();

// slide current
let slideCurrent = 0;

sliderControl.addEventListener("click", function(e){
  let target = e.target;
  
  // get next button
  if(target.classList.contains("next")){

    let next = e.target;
    let prev = next.previousElementSibling;
    let nextSlide = slidesArr[slideCurrent + 1];
    let slide = slidesArr[slideCurrent];
    
    slide.classList.add("slide-on");
    slide.classList.remove("text-on");
    nextSlide.classList.add("text-on");
    
    slideCurrent += 1;
    
    if(slideCurrent > 0) {
      prev.classList.remove("disabled");
    }
    
    if(slideCurrent === slidesLength - 1){
      next.classList.add("disabled");
    }
  }
  
  // get prev button
  if(target.classList.contains("prev")){
    
    slideCurrent -= 1;
    
    let prev = e.target
    let next = prev.nextElementSibling
    let prevSlide = slidesArr[slideCurrent + 1]
    let slide = slidesArr[slideCurrent];
    
    prevSlide.classList.remove("text-on");
    slide.classList.remove("slide-on");
    slide.classList.add("text-on");
    
    if(slideCurrent === slidesLength - 2){
      next.classList.remove("disabled");
    }

    if(slideCurrent === 0){
      prev.classList.add("disabled");
    }
    
  }

});
  }
};
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:400,300);
html,
body {
  height: 100%;
  position: relative;
  font-family: Roboto;
  background: #f8f8f8;
}

.slider-ctr { 
 
  width: 700px;
  height: 440px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -220px;
  margin-left: -350px;
  box-sizing: border-box;

  overflow: hidden;
}
.slider-ctr:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  
  pointer-events: none;
  z-index: 9;
}

.slider-control {
  position: absolute;
  right: 30px;
  bottom: 30px;
  width: 80px;
  overflow: hidden;
  border-radius: 3px;
  box-shadow: 0 3px 3px 3px rgba(0, 0, 0, 0.15);
  
}
.slider-control .control {
  width: 50%;
  height: 40px;
  display: block;
  float: left;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
  transition: 0.3s all ease;
  background: white;
}
.slider-control .control .icon {
  pointer-events: none;
  transition: 0.3s all ease;
}
.slider-control .control.disabled {
  pointer-events: none;
  background: #ddd;
}
.slider-control .control.disabled .icon {
  opacity: 0.5;
}

.slide {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: 0.45s all cubic-bezier(0.65, 0.05, 0.36, 1);
  -webkit-clip-path: inset(0 0 0 0);
  clip-path: inset(0 0 0 0);
}
.slide:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

}
.slide.slide-on {
  -webkit-clip-path: inset(0 100% 0 0);
  clip-path: inset(0 100% 0 0);
}
.slide.text-on .title {
  transition: 0.3s all cubic-bezier(0.65, 0.05, 0.36, 1) 0.45s;
  -webkit-clip-path: inset(0 0 0 0);
  clip-path: inset(0 0 0 0);
}
.slide.text-on .author {
  transition: 0.3s all cubic-bezier(0.65, 0.05, 0.36, 1) 0.6s;
  -webkit-clip-path: inset(0 0 0 0);
  clip-path: inset(0 0 0 0);
}
.slide img {
  display: block;
  border-radius: 18px;
}
.slide figcaption {
  position: absolute;
  top: 30px;
  left: 30px;
}
.slide .title {
  font-size: 50px;
  margin-bottom: 2px;
  color: white;
  transition: 0.3s all cubic-bezier(0.65, 0.05, 0.36, 1) 0.45s;
  -webkit-clip-path: inset(0 0 0 100%);
  clip-path: inset(0 0 0 100%);
  font-weight: 400;
  letter-spacing: 10px;
  text-transform: uppercase;
  position: relative;
}
.slide .author {
  font-size: 16px;
  color: white;
  opacity: 0.8;
  transition: 0.3s all cubic-bezier(0.65, 0.05, 0.36, 1) 0.45s;
  -webkit-clip-path: inset(0 0 0 100%);
  clip-path: inset(0 0 0 100%);
  font-weight: 300;
  letter-spacing: 3px;
  position: relative;
  z-index: 9;
}</style>
