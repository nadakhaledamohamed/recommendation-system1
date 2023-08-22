<template>
  <header>
    <div id="header-sticky"
      :class="`${isSticky ? 'header__area header__transparent header__padding sticky'
      :'header__area header__transparent header__padding'} ${header__white && header__white}`">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-2 col-sm-4 col-6">
            <div class="header__left d-flex">
              <div class="logo">
                <router-link to="/">
                  <img 
                  src="../../assets/img/logo/mainsat.png" alt="logo" class="logo-image"/>
                  <!-- <img v-if="header__white && !isSticky" 
                  src="../../assets/img/logo/mainsat.png" alt="logo" />
                  
                  <img v-else src="../../assets/img/logo/logo.png" alt="logo" /> -->
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-xxl-9 col-xl-9 col-lg-8 col-md-10 col-sm-8 col-6">
            <div class=" header__right d-flex justify-content-end align-items-center " >
              <div :class="`main-menu ${header__white && 'main-menu-3'}`">
                <nav id="mobile-menu" class="d-none d-xl-block">
                  <ul>
                    <li> <router-link active-class="is-active" to="/">Home</router-link> </li>
                    <li> <router-link active-class="is-active" to="/courses">Books</router-link> </li>
                    <li> <router-link active-class="is-active" to="/blog">Blog</router-link> </li>
                    <li> <router-link active-class="is-active" to="/about">About</router-link> </li>
                    <li> <router-link active-class="is-active" to="/Instructor">Instructor</router-link> </li>
                    <li><router-link active-class="is-active" to="/contact">Contact</router-link></li>
                  </ul>
                </nav>
              </div>
              <div class="header__search p-relative ml-50 d-none d-md-block">
                <form @submit.prevent="handleSearchQuery">
                  <input type="text" placeholder="Search..." v-model="searchQuery"/>
                  <button type="submit"><i class="fad fa-search"></i></button>
                </form>
                <div class="header__cart">
                  <a @click="handleMiniCart" href="javascript:void(0);" class="cart-toggle-btn">
                    <div class="header__cart-icon">
                      <svg viewBox="0 0 24 24">
                        <circle class="st0" cx="9" cy="21" r="1" />
                        <circle class="st0" cx="20" cy="21" r="1" />
                        <path
                          class="st0"
                          d="M1,1h4l2.7,13.4c0.2,1,1,1.6,2,1.6h9.7c1,0,1.8-0.7,2-1.6L23,6H6"
                        />
                      </svg>
                    </div>
                    <span class="cart-item">2</span>
                  </a>
                </div>
              </div>
              <div class="header__btn header__btn-2 ml-50 d-flex align-items-center">
                <!-- <router-link to="/register" class="e-btn">Sign up</router-link> -->
                <router-link to="/login" class="e-btn" v-if="!account.user">Sign In</router-link>
                <template v-else>
                  <router-link to="/myCourses" class="e-btn d-none d-md-inline-block me-2">My Books</router-link>
                  <div class="userProfile">
                    <span class="userAvatar"><img src="../../assets/img/user/userAvatar.png" :alt="account.user.fullName"></span>
                    <div class="userProfileDropdown">
                      <p>
                        Hi, {{account.user.fullName}}
                      </p>
                      <div class="list-item">Profile</div>
                      <router-link to="/myCourses" class="list-item d-block d-md-none">My Books</router-link>
                      <router-link to="/login" class="list-item">Logout</router-link>
                    </div>
                  </div>
                </template>
              </div>
              <div class="sidebar__menu d-xl-none">
                <div @click="handleSidebar" class="sidebar-toggle-btn ml-30" id="sidebar-toggle">
                  <span class="line"></span>
                  <span class="line"></span>
                  <span class="line"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

<!-- cart mini area start -->
<div class="cartmini__area">
    <div :class="`${showMiniCart ? 'cartmini__wrapper opened' : 'cartmini__wrapper'}`">
      <div class="cartmini__title">
          <h4>Shopping cart</h4>
      </div>
      <div @click="handleCartClose" class="cartmini__close">
          <button type="button" class="cartmini__close-btn">
            <i class="fal fa-times"></i>
          </button>
      </div>
      <div class="cartmini__widget">
          <div class="cartmini__inner">
            <ul>
                <li>
                  <div class="cartmini__thumb">
                      <a href="#">
                        <img src="../../assets/img/course/sm/cart-1.jpg" alt="">
                      </a>
                  </div>
                  <div class="cartmini__content">
                      <h5><a href="#">Strategy law and organization Foundation </a></h5>
                      <div class="product-quantity mt-10 mb-10">
                        <span @click="handleDecreaseValue('valueOne')" class="cart-minus">-</span>
                        <input class="cart-input" type="text" v-model="value"/>
                        <span @click="handleIncreaseValue('valueOne')" 
                        class="cart-plus">+</span>
                      </div>
                      <div class="product__sm-price-wrapper">
                        <span class="product__sm-price">$46.00</span>
                      </div>
                  </div>
                  <a href="#" class="cartmini__del"><i class="fal fa-times"></i></a>
                </li>
                <li>
                  <div class="cartmini__thumb">
                      <a href="#">
                        <img src="../../assets/img/course/sm/cart-2.jpg" alt="">
                      </a>
                  </div>
                  <div class="cartmini__content">
                      <h5><a href="#">Fundamentals of music theory Learn new</a></h5>
                      <div class="product-quantity mt-10 mb-10">
                        <span @click="handleDecreaseValue('valueTwo')" class="cart-minus">-</span>
                        <input class="cart-input" type="text" v-model="valueTwo"/>
                        <span @click="handleIncreaseValue('valueTwo')" 
                        class="cart-plus">+</span>
                      </div>
                      <div class="product__sm-price-wrapper">
                        <span class="product__sm-price">$32.00</span>
                      </div>
                  </div>
                  <a href="#" class="cartmini__del"><i class="fal fa-times"></i></a>
                </li>
                <li>
                  <div class="cartmini__thumb">
                      <a href="#">
                        <img src="../../assets/img/course/sm/cart-3.jpg" alt="">
                      </a>
                  </div>
                  <div class="cartmini__content">
                      <h5><a href="#">Strategy law and organization Foundation </a></h5>
                      <div class="product-quantity mt-10 mb-10">
                        <span @click="handleDecreaseValue('valueThree')" class="cart-minus">-</span>
                        <input class="cart-input" type="text" v-model="valueThree"/>
                        <span @click="handleIncreaseValue('valueThree')" 
                        class="cart-plus">+</span>
                      </div>
                      <div class="product__sm-price-wrapper">
                        <span class="product__sm-price">$62.00</span>
                      </div>
                  </div>
                  <a href="#" class="cartmini__del"><i class="fal fa-times"></i></a>
                </li>
            </ul>
          </div>
          <div class="cartmini__checkout">
            <div class="cartmini__checkout-title mb-30">
                <h4>Subtotal:</h4>
                <span>$113.00</span>
            </div>
            <div class="cartmini__checkout-btn">
                <router-link to="/cart" class="e-btn e-btn-border mb-10 w-100"> <span></span> view cart</router-link>
                <router-link to="/checkout" class="e-btn w-100"> <span></span> checkout</router-link>
            </div>
          </div>
      </div>
    </div>
</div>

<div @click="handleCartClose" :class="[showMiniCart ? 'body-overlay opened' : 'body-overlay']"></div>
<!-- cart mini area end -->

<!-- sidebar area start -->
  <div :class="`${showSidebar ? 'sidebar__area sidebar-opened' : 'sidebar__area'}`">
      <div class="sidebar__wrapper">
        <div @click="handleSidebarClose" class="sidebar__close">
            <button class="sidebar__close-btn" id="sidebar__close-btn">
            <span><i class="fal fa-times"></i></span>
            <span>close</span>
            </button>
        </div>
        <div class="sidebar__content">
            <div class="logo mb-40">
              <router-link to="/">
                <img src="../../assets/img/logo/mainsat.png" alt="logo" class="logo-image">
              </router-link>
            </div>

             <div class="side-info-content sidebar-menu mm-menu">
                <ul>
                    <li> <router-link active-class="is-active" to="/">Home</router-link> </li>
                    <li> <router-link active-class="is-active" to="/courses">Books</router-link> </li>
                    <li> <router-link active-class="is-active" to="/blog">Blog</router-link> </li>
                    <li> <router-link active-class="is-active" to="/about">About</router-link> </li>
                    <li> <router-link active-class="is-active" to="/Instructor">Instructor</router-link> </li>
                    <li> <router-link to="/contact" class="border-0">Contact</router-link> </li>
                </ul>
            </div>

            <div class="sidebar__search p-relative mt-40 ">
              <form action="#" @submit.prevent="handleSearchQuery">
                  <input type="text" placeholder="Search..." v-model="searchQuery">
                  <button type="submit"><i class="fad fa-search"></i></button>
              </form>
            </div>
            <div class="sidebar__cart mt-30">
              <a href="#">
                  <div class="header__cart-icon">
                    <svg viewBox="0 0 24 24">
                        <circle class="st0" cx="9" cy="21" r="1"/>
                        <circle class="st0" cx="20" cy="21" r="1"/>
                        <path class="st0" d="M1,1h4l2.7,13.4c0.2,1,1,1.6,2,1.6h9.7c1,0,1.8-0.7,2-1.6L23,6H6"/>
                    </svg>
                  </div>
                  <span class="cart-item">2</span>
              </a>
            </div>
        </div>
      </div>
  </div> 
  <div @click="handleSidebarClose" :class="[showSidebar ? 'body-overlay opened' : 'body-overlay']"></div>
  <!-- sidebar area end -->

</template>

<script>

import { mapState, mapActions } from 'vuex'


export default {
  name: "HomeHeader",
  props:{
    header__white:String,
  },
  data () {
    return {
      isSticky:false,
      showMiniCart:false,
      showSidebar:false,
      value:1,
      valueTwo:1,
      valueThree:1,
      searchQuery: '',
      menuOption: {
        menuShow: false,
        menuSearch: false,
        homeDropdown: false,
        coursesDropdown: false,
        pagesDropDown: false,
        blogDropdown: false,
        aboutDropdown: false,
      },
    }
  },
  created(){
    this.searchQuery = this.$route.query && this.$route.query.q? this.$route.query.q : ''
    this.getAllUsers();
  }, 

  computed: {
    ...mapState({
        account: state => state.account,
        users: state => state.users.all
    })
  },

  methods:{
      ...mapActions('users', {
          getAllUsers: 'getAll',
          deleteUser: 'delete'
      }),

      handleSticky () {
          if(window.scrollY > 80){
             this.isSticky = true;
          }
          else{
             this.isSticky = false;
          }
       },
       handleMiniCart () {
         this.showMiniCart = true;
       },
       handleCartClose () {
         this.showMiniCart = false;
       },
       handleSidebar () {
         this.showSidebar = true;
       },
       handleSidebarClose () {
         this.showSidebar = false;
       },
       handleSearchQuery(){
         this.$router.push(`/search?q=${this.searchQuery}`)
       },
       handleIncreaseValue (value) {
         if(value === 'valueOne'){
           this.value++
         }
         if(value === 'valueTwo'){
           this.valueTwo++
         }
         if(value === 'valueThree'){
           this.valueThree++
         }
         
       },
       handleDecreaseValue (value) {
         if(value === 'valueOne' && this.value > 0){
           this.value--
         }
         if(value === 'valueTwo' && this.valueTwo > 0){
           this.valueTwo--
         }
         if(value === 'valueThree' && this.valueThree > 0){
           this.valueThree--
         }
       }
  },
  mounted() {
      window.addEventListener('scroll',this.handleSticky)
   },
};
</script>

<style lang="scss">
.main-menu-3 ul li .is-active::before {
    width: 100%;
    left: 0;
    right: auto;
}
.header__btn .e-btn{
  padding-left: 10px;
  padding-right: 10px;
  min-width: 90px;
}
</style>