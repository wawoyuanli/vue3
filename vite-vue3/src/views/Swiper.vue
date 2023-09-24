<template>
  <div>
    <van-swipe style="height: 200px" :vertical="true" :show-indicators="false" :duration="500">
      <van-swipe-item
        v-for="(index, item) in [1, 2, 3, 4, 5, 6, 7]"
        :key="index"
      >
        <van-swipe :vertical="false" :show-indicators="false" :duration="500">
          <van-swipe-item v-for="(index, item) in [10, 11, 12]" :key="index">
            <img src="@/assets/images/slide2.jpg" alt="" style="height:110vh;width:100vw" class="aa"/>
          </van-swipe-item>
        </van-swipe>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import { defineComponent,onMounted} from "vue";
// import {userInfo} from '@/api/login.js'
export default defineComponent({
  name: "Login",
  setup() {
    const getA = function (params) {
      userInfo();
    };
    onMounted(() => {
     window.location.replace('http://192.168.0.102:8089/#/swiper')
    // window.history.replaceState()
    // window.history.go(-1)
    })
    return {
      // getA:getA
    };
  },
});
</script>
<style>
.van-swipe {
  width: 100vw;
  height: 100vh;
  min-height:80vh;
}
  .van-swipe-item {
  height: 100vh;
 min-height: 99vh;
  overflow-y:scroll;
}
.aa{
  position: absolute;
    left:0;
    top:0;
    width: 100vw;
    height:100vh;
}
</style>
