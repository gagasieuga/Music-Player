<template>
    <div id="slider-container">
        <div class="slideshow">
            <!-- <img class="slides" v-bind:src=a alt=""> -->
            <div class="slides" :style="{'background-image': `url('${a}')`}"></div>
            <div class="slider-text">
                <div id="1" class="opaque">
                    <h2 class="slide-title">{{ heading }}</h2>
                    <div class="slide-description">{{ description }}</div>
                </div>
            </div>
        </div>
        
        <div class="direction">
            <a class="next" @click="nextImg">&gt;</a>
            <a class="prev" @click="prevImg">&lt;</a>
        </div>
        <div class="directing-button" id="btn-list">
            <span class="slide-btn active" @click="getIndex(0)"></span>
            <span class="slide-btn" @click="getIndex(1)"></span>
            <span class="slide-btn" @click="getIndex(2)"></span>
        </div>
    </div>
</template>

<style>
.slideshow .slides{
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    object-fit: cover;
    object-position: 0%;
    position: absolute;
}

.slides{
    max-width: 100%;
    height: auto;
    transition: all 1s ease-in-out;
    transform: translateX(0); 
    background-size: cover;
}

#slider-container {
    background-color: #333;
    /* background: url('/src/assets/Slider/slider1.jpg') top / cover;  */
    margin-top: 0px;
    padding-top: 50%;
    position: relative;
    font-family: Helvetica, Arial, sans-serif;
}

.slider-text{
    position: absolute;
    bottom: 50px;
    left: 0;
    right: 0;
}

.slide-title, .slide-description{
    text-align: center;
    color: #FFFFFF;
    padding: 3px 0px;
    opacity: 1;
}
.prev, .next {
  background-color: rgba(66, 55, 45, 0.24);
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 26px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  z-index: auto;
}
.prev {
    left: 16px;
}
.next {
    right: 16px;
    border-radius: 3px 0 0 3px;
    z-index: auto;
}
.prev:hover, .next:hover{
    background-color: #333;
}
.next:active{
  transform: translateX(-100%);
}
.prev:active {
  transform: translateX(100%);
}
.directing-button{
    display: flex;
    justify-content: center;
    bottom: 20px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}

.slide-btn {
    top: 20%;
    width: 20px;
    height: 20px;
    margin: 0 10px;
    display: inline-block;
    color:white;
    z-index: 3;
    border-radius: 50%;
    border: 2px solid #fff;
}
.slide-btn:hover {
    cursor: pointer;
}
.active{
    background-color: #fff;
}
</style>

<script>
//import { computed } from 'vue'
export default{
    name: 'SlideContainer',
    data() {
        return {
            img: [
                require('@/assets/Slider/slider1.jpg'),
                require('@/assets/Slider/slider2.png'),
                require('@/assets/Slider/slide3.jpg')
            ],
            headings: [
            'Some cute things',
            'Komorebi',
            'Hohoemi'
            ],
            heading:'Some cute things',
            descriptions: [
            'A beautiful day, all you need to do is just to enjoy it',
            'When the sunlight shines through the leaves of trees',
            'A smile may convey understanding, joy, or an appreciation of humor'
            ],
            description:'A beautiful day, all you need to do is just to enjoy it',
            currentIndex: 0,
            a : ""
        }
    },
    computed: {
        currentImg() {
            return this.img[this.currentIndex]
        }
    },
    methods: {
        prevImg(){
            if (this.currentIndex == 0){
                this.currentIndex = this.img.length - 1;
            }
            else{
                this.currentIndex = this.currentIndex - 1;
            }
            this.getIndex(this.currentIndex);
        },
        nextImg(){
            if (this.currentIndex === this.img.length - 1){
                this.currentIndex = 0;
            }
            else{
                this.currentIndex = this.currentIndex + 1
            }
            this.getIndex(this.currentIndex);
        },
        getIndex(index){
            //changing image
            this.currentIndex = index;
            this.a = this.img[this.currentIndex]
            console.log(index);
            //changing button style
            const spans = Array.from(document.querySelectorAll('.slide-btn'));
            spans.forEach((span) => {
                span.classList.remove('active');
            })
            spans[this.currentIndex].classList.add('active');
            //changing text
            this.heading = this.headings[this.currentIndex];
            this.description = this.descriptions[this.currentIndex];
        }
    },
    beforeMount() {
        this.a = require("@/assets/Slider/slider1.jpg")
        console.log(this.a)
    },
}
</script>