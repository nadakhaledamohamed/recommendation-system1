<template>
   <Header header__white="header__white" />
   <Breadcrumb title="My Courses" subtitle="My Courses" />
   <Courses :isEnrolled="true"/>
   <div class="container">
      <div class="course__related">
         <div class="row">
            <div class="col-xxl-12">
               <div class="section__title-wrapper mb-40">
                  <h2 class="section__title">Related <span class="yellow-bg yellow-bg-big">Course<img src="../assets/img/shape/yellow-bg.png" alt=""></span></h2>
                  <!-- <p>You don't have to struggle alone, you've got our assistance and help.</p> -->
               </div>
            </div>
         </div>
            <!-- slider courses start-->
            <SliderCourses :items="3"/>
            <!-- slider courses end-->
      </div>
   </div>
   <Footer footerPadding="true"/>
</template>

<script>
import Header from '../components/Home/Header.vue';
import Breadcrumb from '../components/common/Breadcrumb.vue';
import Courses from '../components/Courses/CoursesArea.vue';
import Footer from '../components/Home/Footer.vue';
import SliderCourses from '../components/CourseDetails/SliderCourses.vue';


export default {
   name:'CoursesPage',
   components:{
      Header,
      Breadcrumb,
      Courses,
      Footer,
      SliderCourses
   }
};
</script>
