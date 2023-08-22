<template>
<section class="signup__area po-rel-z1 pt-100 pb-145">
   <div class="sign__shape">
      <img class="man-1" src="../../assets/img/icon/sign/man-1.png" alt="">
      <img class="man-2" src="../../assets/img/icon/sign/man-2.png" alt="">
      <img class="circle" src="../../assets/img/icon/sign/circle.png" alt="">
      <img class="zigzag" src="../../assets/img/icon/sign/zigzag.png" alt="">
      <img class="dot" src="../../assets/img/icon/sign/dot.png" alt="">
      <img class="bg" src="../../assets/img/icon/sign/sign-up.png" alt="">
   </div>
   <div class="container">
      <div class="row">
         <div class="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2">
            <div class="section__title-wrapper text-center mb-55">
               <h2 class="section__title">Sign in to <br>  recharge direct.</h2>
               <p>it you don't have an account you can <a href="#">Register here!</a></p>
            </div>
         </div>
      </div>
      <div class="row">
         <div class="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
            <div class="sign__wrapper white-bg">
               <!-- <div class="sign__header mb-35">
                  <div class="sign__in text-center">
                     <a href="#" class="sign__social text-start mb-15">
                        <i class="fab fa-facebook-f"></i>Sign in with Facebook</a>
                     <p> <span>........</span> Or, 
                     <router-link to="/login">sign in</router-link> 
                     with your email<span> ........</span> </p>
                  </div>
               </div> -->


               <AlertMessage />

               <div class="sign__form">
                  <form @submit.prevent="handleSubmit">
                     <div class="sign__input-wrapper mb-25">
                        <h5>Work email</h5>
                        <div class="sign__input">
                           <input type="text" placeholder="e-mail address"  v-model="userEmail" name="userEmail" class="form-control" :class="{ 'is-invalid': submitted && !userEmail }" >
                           <i class="fal fa-envelope"></i>
                        </div>
                        <div v-show="submitted && !userEmail" class="invalid-feedback">email is required</div>
                     </div>
                     <div class="sign__input-wrapper mb-10">
                        <h5>Password</h5>
                        <div class="sign__input">
                           <input type="password" placeholder="Password" v-model="password" name="password" class="form-control" :class="{ 'is-invalid': submitted && !password }">
                           <i class="fal fa-lock"></i>
                        </div>
                        <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
                     </div>

                     <div class="sign__action d-sm-flex justify-content-between mb-30">
                        <div class="sign__agree d-flex align-items-center">
                           <input class="m-check-input" type="checkbox" id="m-agree">
                           <label class="m-check-label" for="m-agree">Keep me signed in
                              </label>
                        </div>
                        <div class="sign__forgot">
                           <a href="#">Forgot your password?</a>
                        </div>
                     </div>
                     <button class="e-btn  w-100" :disabled="status.loggingIn"> <span></span> Sign In</button>

                     <div class="d-flex justify-content-center my-3">
                        <img v-show="status.loggingIn" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                     </div>
                     <div class="sign__new text-center mt-20">
                        <p>New to Educal? <router-link to="/register">Sign Up</router-link></p>
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
            userEmail: '',
            password: '',
            submitted: false
        }
    },
    computed: {
        ...mapState('account', ['status'])
    },
    created () {
        // reset login status
        this.logout();
    },
    components:{
       AlertMessage
    },
    methods: {
        ...mapActions('account', ['login', 'logout']),

        handleSubmit (e) {
            this.submitted = true;
            const { userEmail, password } = this;
            if (userEmail && password) {
                this.login({ userEmail, password })
            }
        }
    }
};
</script>