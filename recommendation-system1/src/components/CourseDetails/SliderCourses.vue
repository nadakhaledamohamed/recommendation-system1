<template>
   <div class="row">
      <div class="col-xxl-12">
         <div class="course__slider swiper-container pb-60">

         <swiper
            ref="mySwiper"
            class="pb-50"
            :space-between="25"
            :slides-per-view="items? items : 2"
            :modules="modules"
            :pagination="{clickable: true}"
            :loop="true"
            :breakpoints="breakpoints"
          >
         <swiper-slide v-for="course in courses.slice(0,4)" :key="course.id">
          <div class="course__item course__item-3 swiper-slide white-bg mb-30 fix">
                  <div class="course__thumb w-img p-relative fix">
                     <a :href="`/course-details/${course.id}`">
                        <img :src="course.image" alt="">
                     </a>
                     <div class="course__tag">
                        <a href="#">{{course.category}}</a>
                     </div>
                  </div>
                  <div class="course__content">
                     <div class="course__meta d-flex align-items-center justify-content-between">
                        <!-- <div class="course__lesson">
                           <span><i class="far fa-book-alt"></i>{{course.lesson}} Lesson</span>
                        </div> -->
                        <div class="course__rating">
                           <span><i class="icon_star"></i>{{course.rate}} (44)</span>
                        </div>
                     </div>
                     <h3 class="course__title">
                        <a :href="`/course-details/${course.id}`">{{course.title}}</a>
                     </h3>
                     <!-- <div class="course__teacher d-flex align-items-center">
                        <div class="course__teacher-thumb mr-15">
                           <img :src="course.teacherImg" alt="">
                        </div>
                        <h6><router-link to="/instructor-details">{{course.teacherName}}</router-link></h6>
                     </div> -->
                  </div>
                  <div class="course__more d-flex justify-content-between align-items-center">
                      <div class="course__status d-flex align-items-center">
                        <span>${{course.price}}</span>
                        <!-- <span class="old-price">${{course.oldPrice}}</span> -->
                     </div>
                     <div class="course__btn">
                        <a :href="`/course-details/${course.id}`" class="link-btn">
                           Know Details
                           <i class="far fa-arrow-right"></i>
                           <i class="far fa-arrow-right"></i>
                        </a>
                     </div>
                  </div>
               </div>
            </swiper-slide>
          </swiper>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
         </div>
      </div>
   </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import CoursesMixin from '../../mixins/courseItemsMixin';

export default {
   props: ['items'],
   name:'SliderCourses',
   mixins:[CoursesMixin],
    components: {
      Swiper,
      SwiperSlide,
   },
   data () {
      return {
          // breakpoints
         breakpoints: {
            550: { slidesPerView: 1,},
            768: { slidesPerView: 2,},
            992: { slidesPerView: this.items? this.items : 2},
         },
      }
   },
   setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>
