<template>
   <Header header__white="header__white" />
   <Breadcrumb title="Search" subtitle="Search" />
   
   <section class="course__area pt-120 pb-120">
        <div class="container">
            <div class="row">
                <div class="col-xxl-12">
                    <div class="course__tab-conent">
                    <div class="tab-content" id="courseTabContent">
                        <div class="tab-pane fade show active" id="grid" role="tabpanel" aria-labelledby="grid-tab" v-if="coursesList&&coursesList.length">
                            <div class="row">
                                <div v-for="course in coursesList" :key="course.id" 
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
                            </div>
                        </div>

                        <div class="noData" v-else>
                            No results available 
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

   <Footer footerPadding="true"/>
</template>

<script>
import Header from '../components/Home/Header.vue';
import Breadcrumb from '../components/common/Breadcrumb.vue';
import Footer from '../components/Home/Footer.vue';
import CourseMixin from '@/mixins/courseItemsMixin';

export default {
   name:'CoursesPage',
   mixins:[CourseMixin],
   data(){
       return {
           coursesList: []
       }
   },
   watch:{
       '$route'(){
           if(this.$route.query.q){
                this.searchStringInArray(this.$route.query.q, this.courses)
            } else {
                    this.coursesList = this.courses
            }
       }
   },
   created(){
       this.coursesList = this.courses
       if(this.$route.query.q){
           this.searchStringInArray(this.$route.query.q, this.courses)
       }
    },
    methods: {
        searchStringInArray (str, strArray) {
            this.coursesList = [];
            strArray.map(item => {
                let itemString = JSON.stringify({title: item.title})
                if(itemString.includes(str)){
                    this.coursesList.push(item)
                }
            });
        },
    },
   components:{
      Header,
      Breadcrumb,
      Footer
   }
};
</script>


<style>
    .noData{
        min-height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #777;
        font-size: 18px;
    }
</style>