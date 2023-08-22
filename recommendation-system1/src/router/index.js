import { createWebHistory,createRouter } from "vue-router";
import Home from '../pages/Home.vue';
import Courses from '../pages/Courses.vue';
import MyCourses from '../pages/MyCourses.vue';
import Search from '../pages/Search.vue';
import CourseSidebar from '../pages/CourseSidebar.vue';
import CourseDetails from '../pages/CourseDetails.vue';
import Blog from '../pages/Blog.vue';
import BlogDetails from '../pages/BlogDetails.vue';
import About from '../pages/About.vue';
import Instructor from '../pages/Instructor.vue';
import InstructorDetails from '../pages/InstructorDetails.vue';
import EventDetails from '../pages/EventDetails.vue';
import Cart from '../pages/Cart.vue';
import Checkout from '../pages/Checkout.vue';
import SignIn from '../pages/SignIn.vue';
import SignUp from '../pages/SignUp.vue';
import ErrorPage from '../pages/ErrorPage.vue';
import Contact from '../pages/Contact.vue';
import CourseDetailsPage from '../pages/DynamicCourseDetails.vue';
import DynamicBlogDetails from '../pages/DynamicBlogDetails.vue';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/',
            component:Home,
        },
        {
            path:'/home',
            component:Home,
        },
        {
            path:'/courses',
            component:Courses,
        },
        {
            path:'/myCourses',
            component:MyCourses,
        },
        {
            path:'/search',
            component:Search,
        },
        
        {
            path:'/courses-sidebar',
            component:CourseSidebar,
        },
        {
            path:'/course-details',
            component:CourseDetails,
        },
        {
            path:'/blog',
            component:Blog,
        },
        {
            path:'/blog-details',
            component:BlogDetails,
        },
        {
            path:'/about',
            component:About,
        },
        {
            path:'/instructor',
            component:Instructor,
        },
        {
            path:'/instructor-details',
            component:InstructorDetails,
        },
        {
            path:'/event-details',
            component:EventDetails,
        },
        {
            path:'/cart',
            component:Cart,
        },
        {
            path:'/checkout',
            component:Checkout,
        },
        {
            path:'/login',
            component:SignIn,
        },
        {
            path:'/register',
            component:SignUp,
        },
        {
            path:'/errorPage',
            component:ErrorPage,
        },
        {
            path:'/contact',
            component:Contact,
        },
        {
            path:'/course-details/:id',
            component:CourseDetailsPage,
        },
        {
            path:'/blog-details/:id',
            component:DynamicBlogDetails,
        },
    ]
})

router.beforeEach((to, from, next) => {
    next();
    window.scrollTo(0, 0)
});

export default router

