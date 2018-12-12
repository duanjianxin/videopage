<template>

  <div class="fullpage-container">
    <bgaudio></bgaudio>
    <div
      class="fullpage-wp"
      v-fullpage="opts"
    >
      <div
        class="page"
        :class="'page-'+index "
        v-for="(item,index) in mides"
        v-bind:key="index "
        v-bind:style="{backgroundImage:'url(' + item.gifUrl + ')'}"
      >
        <img
          v-for="(itemImg,indexImg) in item.animate"
          v-bind:key="indexImg+'itemImg'"
          v-if="itemImg.imgtext"
          class="gifImgText1"
          :src="itemImg.imgtext"
          alt=""
          srcset=""
          v-animate="{value: itemImg.value, delay: itemImg.delay}"
        >
        <audio
          :src="item.audio"
          ref="audios"
          preload="auto"
        ></audio>
      </div>
    </div>
  </div>
</template>

<script>
import { data } from "../assets/js/data.js";
import bgaudio from "../components/bgaudio.vue";
export default {
  name: "demo",
  data() {
    return {
      isShowPage: true,
      opts: {
        start: 0,
        dir: "v",
        der: 0.05,
        loop: false,
        duration: 500,
        preventWechat: true,
        beforeChange: this.beforeChange,
        afterChange: this.afterChange
      },
      mides: ""
    };
  },
  components: {
    bgaudio: bgaudio
  },
  methods: {
    showMessage() {},

    // 改变之前
    beforeChange(prev, next) {
      // console.log("before", prev, next);
      // if (prev != 0) {
      this.$refs.audios[prev].load();
      // this.$refs.audios[prev].addTextTrack(this.$refs.audios[prev].src);
      console.log(this.$refs.audios[prev].src);

      // }
    },
    // 改变之后
    afterChange(prev, next) {
      // console.log("after", prev, next);
      // if (next != 0) {
      this.$refs.audios[next].play();
      // }
    }
  },
  created() {
    // console.log(data);
    this.mides = data;
    setTimeout(() => {
      this.isShowPage = false;
    }, 2000);
    // console.log($);
  }
};
</script>

<style lang='less' scoped>
.page {
  display: block;
  text-align: center;
  font-size: 26px;
  color: #eee;
  background-color: black;
  width: 100%;
  height: 100%;
  margin: 0;
  background-size: 100%;
  background-repeat: no-repeat;
  position: relative;
  .gifImgText1 {
    position: absolute;
    // top: 32px;
    left: 0;
    right: 0;
    margin: auto;
    width: 100%;
    height: 100%;
  }
  .gifImgText2 {
    position: absolute;
    // top: 293px;
    left: 0;
    right: 0;
    margin: auto;
    width: 100%;
    height: 100%;
  }
  .gifImgText3 {
    position: absolute;
    // top: 343px;
    left: 0;
    right: 0;
    margin: auto;
    width: 100%;
    height: 100%;
  }
  .gifImgText4 {
    position: absolute;
    right: 17px;
    // bottom: 26px;
    margin: auto;
    width: 100%;
    height: 100%;
  }
}
// .page-1 {
//   background: #1bbc9b;
// }
// .page-2 {
//   background: #000000;
// }
// .page-3 {
//   background: #aabbcc;
// }
</style>
