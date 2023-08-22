<template>
   <div v-for="course in coursesData" :key="course.id" 
   class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
      <div class="course__item white-bg mb-30 fix">
         <div class="course__thumb w-img p-relative fix">
             <router-link :to="`/course-details/${course.id}`">
               <img :src="course.image" alt="">
            </router-link>
            <div class="course__tag">
               <a href="#">{{course.primary_category}}</a>
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
               <router-link :to="`/course-details/${course.id}`">
               {{course.title}}</router-link>
            </h3>
            <!-- <div class="course__teacher d-flex align-items-center">
               <div class="course__teacher-thumb mr-15">
                  <img :src="course.teacherImg" alt="">
               </div>
               <h6>
                  <router-link to="/instructor-details">
                  {{course.teacherName}}</router-link>
               </h6>
            </div> -->
         </div>
         <div class="course__more d-flex justify-content-between align-items-center">
            <div class="course__status d-flex align-items-center">
               <span>${{course.price}}</span>
               <!-- <span class="old-price">${{course.oldPrice}}</span> -->
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
</template>

<script>
import CourseMixin from '../../mixins/courseItemsMixin';

export default {
   name:'GridTab',
   props: ['isEnrolled'],
   mixins:[CourseMixin],
   data(){
      return {
         coursesData: []
      }
   },
   created(){
      if(this.isEnrolled){
          this.coursesData = this.courses.filter(item => {
            return item.is_enrolled == true
          })
      } else {
         this.coursesData = this.courses
      }
   }, 
};
</script>


<style lang="scss">
   .course__thumb {
      height: 250px;
      img{
         object-fit: cover;
         width: 100%;
         height: 100%;
      }
   }
</style>