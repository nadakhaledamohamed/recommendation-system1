<template>
 <section class="course__area pt-120 pb-120">
   <div class="container">
      <div class="row">
         <div class="col-xxl-8 col-xl-8 col-lg-8">
            <div class="course__tab-inner grey-bg-2 mb-50 d-sm-flex justify-content-between align-items-center">
               <div class="course__tab-wrapper d-flex align-items-center">
                  <div class="course__tab-btn">
                     <ul class="nav nav-tabs" id="courseTab" role="tablist">
                        <li class="nav-item" role="presentation">
                           <button class="nav-link active" id="grid-tab" data-bs-toggle="tab" data-bs-target="#grid" type="button" role="tab" aria-controls="grid" aria-selected="true">
                           <svg class="grid" viewBox="0 0 24 24">
                              <rect x="3" y="3" class="st0" width="7" height="7"/>
                              <rect x="14" y="3" class="st0" width="7" height="7"/>
                              <rect x="14" y="14" class="st0" width="7" height="7"/>
                              <rect x="3" y="14" class="st0" width="7" height="7"/>
                              </svg>
                           </button>
                        </li>
                        <li class="nav-item" role="presentation">
                           <button class="nav-link list" id="list-tab" data-bs-toggle="tab" data-bs-target="#list" type="button" role="tab" aria-controls="list" aria-selected="false">
                           <svg class="list" viewBox="0 0 512 512">
                              <g>
                                 <path class="st0" d="M448,69H192c-17.7,0-32,13.9-32,31s14.3,31,32,31h256c17.7,0,32-13.9,32-31S465.7,69,448,69z"/>
                                 <circle class="st0" cx="64" cy="100" r="31"/>
                                 <path class="st0" d="M448,225H192c-17.7,0-32,13.9-32,31s14.3,31,32,31h256c17.7,0,32-13.9,32-31S465.7,225,448,225z"/>
                                 <circle class="st0" cx="64" cy="256" r="31"/>
                                 <path class="st0" d="M448,381H192c-17.7,0-32,13.9-32,31s14.3,31,32,31h256c17.7,0,32-13.9,32-31S465.7,381,448,381z"/>
                                 <circle class="st0" cx="64" cy="412" r="31"/>
                              </g>
                              </svg>
                           </button>
                        </li>
                     </ul>
                  </div>
                  <div class="course__view">
                     <h4>Showing 1 - 9 of 84</h4>
                  </div>
               </div>
               <div class="course__sort d-flex justify-content-sm-end">
                  <div class="course__sort-inner">
                     <select>
                        <option>Default</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                        <option>Option 4</option>
                        <option>Option 5</option>
                        <option>Option 6</option>
                     </select>
                  </div>
               </div>
            </div>
            <div class="course__tab-conent">
               <div class="tab-content" id="courseTabContent">
                  <div class="tab-pane fade show active" id="grid" role="tabpanel" aria-labelledby="grid-tab">
                     <div class="row">

                        <div v-for="course in courseItems.slice(0,6)" :key="course.id" 
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
                                   <router-link :to="`/course-details/${course.id}`">{{course.title}}</router-link>
                                 </h3>
                                 <div class="course__teacher d-flex align-items-center">
                                    <div class="course__teacher-thumb mr-15">
                                       <img :src="course.teacherImg" alt="">
                                    </div>
                                    <h6><router-link to="/instructor-details">{{course.teacherName}}</router-link></h6>
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

                  <div class="tab-pane fade" id="list" role="tabpanel" aria-labelledby="list-tab">
                     <div class="row">

                        <div v-for="course in courseItems.slice(0,6)" :key="course.id" class="col-xxl-12">
                           <div class="course__item white-bg mb-30 fix">
                              <div class="row gx-0">
                                 <div class="col-xxl-4 col-xl-4 col-lg-4">
                                    <div class="course__thumb course__thumb-list w-img p-relative fix">
                                       <router-link :to="`/course-details/${course.id}`">
                                          <img :src="course.listImg" alt="">
                                       </router-link>
                                       <div class="course__tag">
                                          <a href="#" :class="course.color">
                                             {{course.category}}
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col-xxl-8 col-xl-8 col-lg-8">
                                    <div class="course__right">
                                       <div class="course__content course__content-4">
                                          <div class="course__meta d-flex align-items-center">
                                             <div class="course__lesson mr-20">
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
                                               {{course.title}}
                                            </router-link>
                                          </h3>
                                          <div class="course__teacher d-flex align-items-center">
                                             <div class="course__teacher-thumb mr-15">
                                                <img :src="course.teacherImg" alt="">
                                             </div>
                                              <h6>
                                                <router-link to="/instructor-details">{{course.teacherName}}</router-link>
                                             </h6>
                                          </div>
                                       </div>
                                       <div class="course__more course__more-2 course__more-3 d-flex justify-content-between align-items-center">
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

                  <!-- Pagination start-->
                  <Pagination/>
                  <!-- Pagination end-->
            </div>
         </div>

         <!-- CourseRightSide start -->
         <CourseRightSide/>
         <!-- CourseRightSide end -->

      </div>
   </div>
</section>
</template>

<script>
import CourseRightSide from '../CourseSidebar/CourseRightSide.vue';
import Pagination from '../common/Pagination.vue';
import CourseMixin from '../../mixins/courseItemsMixin';

export default {
   name:'CourseSidebarArea',
   mixins:[CourseMixin],
   components:{
      CourseRightSide,
      Pagination,
   }
};
</script>

