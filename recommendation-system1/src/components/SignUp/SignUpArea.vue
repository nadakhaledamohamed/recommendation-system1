<template>
<section class="signup__area po-rel-z1 pt-100 pb-145">
   <div class="sign__shape">
      <img class="man-1" src="../../assets/img/icon/sign/man-3.png" alt="">
      <img class="man-2 man-22" src="../../assets/img/icon/sign/man-2.png" alt="">
      <img class="circle" src="../../assets/img/icon/sign/circle.png" alt="">
      <img class="zigzag" src="../../assets/img/icon/sign/zigzag.png" alt="">
      <img class="dot" src="../../assets/img/icon/sign/dot.png" alt="">
      <img class="bg" src="../../assets/img/icon/sign/sign-up.png" alt="">
      <img class="flower" src="../../assets/img/icon/sign/flower.png" alt="">
   </div>
   <div class="container">
      <div class="row">
         <div class="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2">
            <div class="section__title-wrapper text-center mb-55">
               <h2 class="section__title">Create a free <br>  Account</h2>
               <p>I'm a subhead that goes with a story.</p>
            </div>
         </div>
      </div>
      <div class="row">
         <div class="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
            <div class="sign__wrapper white-bg">
               <!-- <div class="sign__header mb-35">
                  <div class="sign__in text-center">
                     <a href="#" class="sign__social g-plus text-start mb-15"><i class="fab fa-google-plus-g"></i>Sign Up with Google</a>
                     <p> <span>........</span> Or, 
                     <router-link to="/register">sign up</router-link> 
                     with your email<span> ........</span> </p>
                  </div>
               </div> -->

               <AlertMessage />


               <div class="sign__form">
                  <form @submit.prevent="handleSubmit">
                     <div class="sign__input-wrapper mb-25">
                        <h5>Full Name</h5>
                        <div class="sign__input">
                           <input type="text" placeholder="Full name" v-model="user.fullName" required name="fullName">
                           <i class="fal fa-user"></i>
                        </div>
                     </div>
                     <div class="sign__input-wrapper mb-25">
                        <h5>Work email</h5>
                        <div class="sign__input">
                           <input type="text" placeholder="e-mail address" v-model="user.userEmail" required name="userEmail">
                           <i class="fal fa-envelope"></i>
                        </div>
                     </div>
                     <div class="sign__input-wrapper mb-25">
                        <h5>Password</h5>
                        <div class="sign__input">
                           <input type="text" placeholder="Password" v-model="user.password" required name="password">
                           <i class="fal fa-lock"></i>
                        </div>
                     </div>
                     <div class="sign__action d-flex justify-content-between mb-30">
                        <div class="sign__agree d-flex align-items-center">
                           <input class="m-check-input" type="checkbox" id="m-agree">
                           <label class="m-check-label" for="m-agree">I agree to the <a href="#">Terms & Conditions</a>
                              </label>
                        </div>
                     </div>
                     <button class="e-btn w-100"> <span></span> Sign Up</button>
                     <div class="sign__new text-center mt-20">
                        <p>Already in Educal ? <router-link to="/login"> Sign In</router-link></p>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
</template>


<script>
import { mapState, mapActions } from 'vuex'
import AlertMessage from './AlertMessage.vue'

export default {
    data () {
        return {
            user: {
                fullName: '',
                userEmail: '',
                password: '',
            },
            submitted: false
        }
    },
    computed: {
        ...mapState('account', ['status'])
    },
    components:{
       AlertMessage
    },
    methods: {
        ...mapActions('account', ['register']),
        handleSubmit(e) {
            this.submitted = true;
            this.register(this.user);
        }
    }
};
</script>