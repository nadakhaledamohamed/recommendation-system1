<template>
<div v-for="course in courseItems" :key="course.id" class="col-xxl-12">
   <div class="course__item white-bg mb-30 fix">
      <div class="row gx-0">
         <div class="col-xxl-4 col-xl-4 col-lg-4">
            <div class="course__thumb course__thumb-list w-img p-relative fix">
                <router-link :to="`/course-details/${course.id}`">
                     <img :src="course.listImg" alt="">
               </router-link>
               <div class="course__tag">
                  <a href="#" :class="course.color">{{course.category}}</a>
               </div>
            </div>
         </div>
         <div class="col-xxl-8 col-xl-8 col-lg-8">
            <div class="course__right">
               <div class="course__content course__content-3">
                  <div class="course__meta d-flex align-items-center">
                     <div class="course__lesson mr-20">
                        <span><i class="far fa-book-alt"></i>{{course.lesson}} Lesson</span>
                     </div>
                     <div class="course__rating">
                        <span><i class="icon_star"></i>{{course.rating}} (44)</span>
                     </div>
                  </div>
                  <h3 class="course__title course__title-3">
                      <router-link :to="`/course-details/${course.id}`">{{course.title}}</router-link>
                  </h3>
                  <div class="course__summary">
                     <p>Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem</p>
                  </div>
                  <div class="course__teacher d-flex align-items-center">
                     <div class="course__teacher-thumb mr-15">
                        <img :src="course.teacherImg" alt="">
                     </div>
                    <h6><router-link to="/instructor-details">{{course.teacherName}}</router-link></h6>
                  </div>
               </div>
               <div class="course__more course__more-2 d-flex justify-content-between align-items-center">
                    <div class="course__status d-flex align-items-center">
                        <span :class="course.color">${{course.price}}</span>
                        <span class="old-price">${{course.oldPrice}}</span>
                     </div>
                  <div class="course__btn">
                     <router-link :to="`/course-details/${course.id}`" class="link-btn">
                        Know Details
                        <i class="far fa-arrow-right"></i>
                        <i class="far fa-arrow-right"></i>
                     </router-link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
  </div>
</template>

<script>
import CourseMixin from '../../mixins/courseItemsMixin';
export default {
   name:'ListTabItems',
   mixins:[CourseMixin]
};
</script>

