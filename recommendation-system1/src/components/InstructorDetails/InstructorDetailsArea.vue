<template>
<section class="teacher__area pt-100 pb-110">
   <div class="page__title-shape">
      <img class="page-title-shape-5 d-none d-sm-block" src="../../assets/img/page-title/page-title-shape-1.png" alt="">
      <img class="page-title-shape-6" src="../../assets/img/page-title/page-title-shape-6.png" alt="">
      <img class="page-title-shape-3" src="../../assets/img/page-title/page-title-shape-3.png" alt="">
      <img class="page-title-shape-7" src="../../assets/img/page-title/page-title-shape-4.png" alt="">
   </div>
   <div class="container">
      <div class="row">
         <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
            <div class="teacher__details-thumb p-relative w-img pr-30">
               <img src="../../assets/img/teacher/details/teacer-details-1.jpg" alt="">
               <div class="teacher__details-shape">
                  <img class="teacher-details-shape-1" src="../../assets/img/teacher/details/shape/shape-1.png" alt="">
                  <img class="teacher-details-shape-2" src="../../assets/img/teacher/details/shape/shape-2.png" alt="">
               </div>
            </div>
         </div>
         <div class="col-xxl-8 col-xl-8 col-lg-8">
            <div class="teacher__wrapper">
               <div class="teacher__top d-md-flex align-items-end justify-content-between">
                  <div class="teacher__info">
                     <h4>Hilary Ouse</h4>
                     <span>Teaches Interior Markater</span>
                  </div>
                  <div class="teacher__rating">
                     <h5>Review:</h5>
                     <div class="teacher__rating-inner d-flex align-items-center">
                        <ul>
                           <li><a href="#"> <i class="fas fa-star"></i> </a></li>
                           <li><a href="#"> <i class="fas fa-star"></i> </a></li>
                           <li><a href="#"> <i class="fas fa-star"></i> </a></li>
                           <li><a href="#"> <i class="fas fa-star"></i> </a></li>
                           <li><a href="#"> <i class="fas fa-star"></i> </a></li>
                        </ul>
                        <p>4.5</p>
                     </div>
                  </div>
                  <div class="teacher__social-2">
                     <h4>Follow Us:</h4>
                     <ul>
                        <li>
                           <a href="#">
                              <i class="fab fa-facebook-f"></i>
                           </a>
                        </li>
                        <li>
                           <a href="#">
                              <i class="fab fa-twitter ms-2"></i>
                           </a>
                        </li>
                        <li>
                           <a href="#">
                              <i class="fab fa-vimeo-v ms-2"></i>
                           </a>
                        </li>
                        <li>
                           <a href="#">
                              <i class="fab fa-linkedin-in ms-2"></i>
                           </a>
                        </li>
                     </ul>
                  </div>
                  <div class="teacher__follow mb-5">
                     <a href="#" class="teacher__follow-btn">follow 
                        <i class="fal fa-plus ms-2"></i>
                     </a>
                  </div>
               </div>
               <div class="teacher__bio">
                  <h3>Short Bio</h3>
                  <p>Only a quid me old mucker squiffy tomfoolery grub cheers ruddy cor blimey guvnor in my flat, up the duff Eaton car boot up the kyver pardon you A bit of how's your father David skive off sloshed, don't get shirty with me chip shop vagabond crikey bugger Queen's English chap. Matie boy nancy boy bite your arm off up the kyver old no biggie fantastic boot, David have it show off show off pick your nose and blow off lost the plot porkies bits and bobs only a quid bugger all mate, absolutely bladdered bamboozled it's your round don't get shirty with me down the pub well.</p>
               </div>
               <div class="teacher__courses pt-55">
                  <div class="section__title-wrapper mb-30">
                     <h2 class="section__title">Teacher <span class="yellow-bg yellow-bg-big">Course<img src="../../assets/img/shape/yellow-bg.png" alt=""></span></h2>
                  </div>
                  <div class="teacher__course-wrapper">
                     <div class="row">
                        
                        <div v-for="course in courseItems.slice(0,4)" :key="course.id" 
                        class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                           <div class="course__item white-bg mb-30 fix">
                              <div class="course__thumb w-img p-relative fix">
                                  <router-link :to="`/course-details/${course.id}`">
                                    <img :src="course.courseImage" alt="">
                                 </router-link>
                                 <div class="course__tag">
                                    <a href="#" :class="course.color">{{course.category}}</a>
                                 </div>
                              </div>
                              <div class="course__content">
                                 <div class="course__meta d-flex align-items-center justify-content-between">
                                    <div class="course__lesson">
                                       <span><i class="far fa-book-alt"></i>
                                       {{course.lesson}} Lesson</span>
                                    </div>
                                    <div class="course__rating">
                                       <span><i class="icon_star"></i>
                                       {{course.rating}} (44)</span>
                                    </div>
                                 </div>
                                 <h3 class="course__title">
                                    <router-link :to="`/course-details/${course.id}`">
                                     {{course.title}}</router-link>
                                 </h3>
                                 <div class="course__teacher d-flex align-items-center">
                                    <div class="course__teacher-thumb mr-15">
                                       <img :src="course.teacherImg" alt="">
                                    </div>
                                    <h6><a href="#">{{course.teacherName}}</a></h6>
                                 </div>
                              </div>
                              <div class="course__more d-flex justify-content-between align-items-center">
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
            </div>
         </div>
      </div>
   </div>
</section>
</template>

<script>
import CourseMixin from '../../mixins/courseItemsMixin';

export default {
   name:'InstructorDetailsArea',
   mixins:[CourseMixin],
};
</script>

