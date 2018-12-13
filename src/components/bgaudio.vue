<!--  -->
<template>
  <div class="audioBox">
    <audio
      :src="bgaudio"
      loop
      ref="audioBg"
      preload="auto"
      autoplay="autoplay"
    ></audio>
    <img
      :src="[bgaudioPlay ? '/static/images/bgplay.png' : '/static/images/bgstop.png']"
      v-on:click="audioTab"
    >
  </div>
</template>

<script>
export default {
  name: "bgaudio",
  data() {
    return {
      bgaudioPlay: true,
      bgaudio: "/static/audio/bg.mp3"
    };
  },

  created() {
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    audioTab() {
      this.bgaudioPlay = !this.bgaudioPlay;
      var audioBg = this.$refs.audioBg;
      if (this.bgaudioPlay) {
        audioBg.play();
      } else {
        audioBg.pause();
      }
    }
  },

  watch: {}
};
</script>
<style lang='less' scoped >
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
</style>