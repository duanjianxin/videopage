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
          v-if="itemImg.imgtext&&index==0||index==mides.length-1"
          class="gifImgText1"
          v-bind:style="{animationDuration:itemImg.animateDuration}"
          :src="itemImg.imgtext"
          alt=""
          srcset=""
          v-animate="{value: itemImg.value, delay: itemImg.delay}"
        >
        <!-- <div
          class="textBox"
          v-if="item.texts"
        > -->
        <!-- <p>{{mides.length}}----{{index}}----{{mides.length-1}}</p> -->
        <p
          class="title"
          v-if="item.texts&&item.texts!=''"
          v-animate="{value: item.texts[0].value, delay: item.texts[0].delay}"
          v-bind:style="{color: item.texts[0].color,animationDuration:item.texts[0].animateDuration}"
        >{{item.texts[0].text}}
        </p>
        <p
          class="title-sub"
          v-if="item.texts&&item.texts!=''"
          v-animate="{value: item.texts[1].value, delay: item.texts[1].delay}"
          v-bind:style="{color: item.texts[1].color,animationDuration:item.texts[1].animateDuration}"
        >{{item.texts[1].text}}</p>
        <!-- <div
          class="textb"
          v-if="item.texts"
          v-animate="{value: item.texts[2].value, delay: item.texts[2].delay}"
          v-bind:style="{color: item.texts[2].color,animationDuration:item.texts[2].animateDuration}"
        > -->

        <!-- (index==2?'rgba(67, 67, 67, 0.5)':item.texts[2].animateDuration) -->
        <p
          class="text"
          v-if="item.texts&&item.texts[2].text&&item.texts!=''"
          v-animate="{value: item.texts[2].value, delay: item.texts[2].delay}"
          v-bind:style="{color: item.texts[2].color,border: '1px solid '+(index==2||index==8||index==9||index==11||index==13||index==15||index==16?'rgba(67, 67, 67, 0.5)':item.texts[2].color),animationDuration:item.texts[2].animateDuration}"
        >{{item.texts[2].text}}</p>

        <!-- </div> -->
        <p
          class="textEnd"
          v-if="item.texts&&item.texts!=''"
          v-animate="{value: item.texts[3].value, delay: item.texts[3].delay}"
          v-bind:style="{color: item.texts[3].color,animationDuration:item.texts[3].animateDuration}"
        >{{item.texts[3].text}}</p>
        <p
          class="bottomText"
          v-if="item.texts&&item.texts!=''"
          v-animate="{value: item.texts[4].value, delay: item.texts[4].delay}"
          v-bind:style="{color: item.texts[4].color,animationDuration:item.texts[4].animateDuration}"
        >{{item.texts[4].text}}</p>
        <!-- </div> -->
        <!-- <p
          class="imgWarp"
          v-if="index==0||index==mides.length-1"
        > -->

        <!-- </p> -->
        <!-- <audio
          :src="item.audio"
          ref="audios"
          preload="auto"
        ></audio> -->
      </div>
    </div>
    <audio
      id="itemAudio"
      ref="audios"
      preload="auto"
      v-show="false"
    ></audio>
  </div>
</template>

<script>
import { data, src } from "../assets/js/data.js";
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
      console.log("改变之前", prev, next);
    },
    // 改变之后
    afterChange(prev, next) {
      // ok
      if (prev == next) {
        if (prev == 0) {
          itemAudio.src = this.mides[0].audio;
          itemAudio.play();
        }
      } else {
        itemAudio.src = this.mides[next].audio;
        itemAudio.play();
      }
    }
  },
  created() {
    var itemAudio = document.getElementById("itemAudio");
    this.mides = data;
    setTimeout(() => {
      this.isShowPage = false;
    }, 2000);
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
  height: 100vh;
  margin: 0;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
  position: relative;
  text-align: center;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "PingFangSC-Regular",
    SimHei, STHeiti;
  .title {
    font-size: 64px;
    letter-spacing: 0;
    line-height: 64px;
    text-align: center;
    margin: 0 auto;
    margin-top: 60px;
    overflow: hidden;
    position: relative;
    display: inline-block;
    text-align: center;
    // text-shadow: 1px 1px 0px rgba(204, 202, 202, 0.558);
  }
  .title-sub {
    opacity: 0.8;
    font-size: 28px;
    letter-spacing: 0;
    line-height: 28px;
    margin: 0 auto;
    margin-top: 15px;
    display: block;
    // text-shadow: 1px 1px 0px rgba(204, 202, 202, 0.558);
    // position: absolute;
    // top: 133px;
    // left: 0;
    // right: 0;
    // margin: auto;
  }
  .text {
    font-size: 16px;
    letter-spacing: 0;
    text-align: center;
    line-height: 15px;
    display: inline-block;
    padding: 6px 13px;
    margin: 0 auto;
    margin-top: 35px;
    // text-shadow: 1px 1px 0px rgba(204, 202, 202, 0.558);
  }

  .textEnd {
    font-size: 14px;
    letter-spacing: 0;
    text-align: center;
    line-height: 16px;
    margin: 0 auto;
    margin-top: 6px;
    // position: absolute;
    // top: 245px;
    // left: 0;
    // right: 0;
    // margin: auto;
    // text-shadow: 1px 1px 0px rgba(204, 202, 202, 0.558);
  }
  .bottomText {
    opacity: 0.8;
    font-size: 14px;
    letter-spacing: 0;
    text-align: center;
    line-height: 16px;
    position: absolute;
    bottom: 32px;
    left: 0;
    right: 0;
    margin: auto;
    // text-shadow: 1px 1px 0px rgba(204, 202, 202, 0.558);
  }
  .imgWarp {
    width: 100%;
    height: 100%;
  }
  .gifImgText1 {
    position: absolute;
    // top: 32px;
    left: 0;
    right: 0;
    margin: auto;
    width: 100%;
    height: 100%;
    max-height: 736px;
  }
  .gifImgText2 {
    position: absolute;
    // top: 293px;
    left: 0;
    right: 0;
    margin: auto;
    width: 100%;
    height: 100%;
    max-height: 736px;
  }
  .gifImgText3 {
    position: absolute;
    // top: 343px;
    left: 0;
    right: 0;
    margin: auto;
    width: 100%;
    height: 100%;
    max-height: 736px;
  }
  .gifImgText4 {
    position: absolute;
    right: 17px;
    // bottom: 26px;
    margin: auto;
    width: 100%;
    height: 100%;
    max-height: 736px;
  }
}
</style>
