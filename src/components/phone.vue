<template>

  <div class="fullpage-container">
    <!-- <div class="audioBox">
      <audio
        :src="bgaudio"
        loop
        ref="audioBg"
      ></audio>
      <img
        :src="[bgaudioPlay ? '/static/images/bgplay.png' : '/static/images/bgstop.png']"
        v-on:click="audioTab"
      >
    </div> -->
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
          class="gifImgText1"
          :src="item.animate[0].imgtext"
          alt=""
          srcset=""
          v-animate="{value: item.animate[0].value, delay: item.animate[0].delay}"
        >
        <img
          class="gifImgText2"
          :src="item.animate[1].imgtext"
          alt=""
          srcset=""
          v-animate="{value: item.animate[1].value, delay: item.animate[1].delay}"
        >
        <img
          class="gifImgText3"
          :src="item.animate[2].imgtext"
          alt=""
          srcset=""
          v-animate="{value: item.animate[2].value, delay: item.animate[2].delay}"
        >
        <img
          class="gifImgText4"
          :src="item.animate[3].imgtext"
          alt=""
          srcset=""
          v-animate="{value: item.animate[3].value, delay: item.animate[3].delay}"
        >
        <audio
          :src="item.audio"
          ref="audios"
        ></audio>
      </div>
    </div>
  </div>
</template>

<script>
import { data } from "../assets/js/data.js";
export default {
  name: "demo",
  data() {
    return {
      isShowPage: true,
      bgaudioPlay: true,
      bgaudio: "/static/audio/bg.mp3",
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
  methods: {
    showMessage() {},
    audioTab() {
      this.bgaudioPlay = !this.bgaudioPlay;
      var audioBg = this.$refs.audioBg;
      if (this.bgaudioPlay) {
        audioBg.play();
      } else {
        audioBg.pause();
      }
    },
    // 改变之前
    beforeChange(prev, next) {
      // console.log("before", prev, next);
      // if (prev != 0) {
      this.$refs.audios[prev].load();
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
  }
};
</script>

<style lang='less' scoped>
.audioBox {
  position: absolute;
  right: 27px;
  top: 27px;
  background-color: transparent;
  width: 27px;
  height: 27px;
  transform-style: preserve-3d;
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  transform-origin: 50% 50% 0px;
  z-index: 9;
  img {
    width: 100%;
    height: 100%;
    position: fixed;
    display: block;
  }
}
.page {
  display: block;
  text-align: center;
  font-size: 26px;
  color: #eee;
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
