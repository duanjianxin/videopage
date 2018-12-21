<template>
  <div
    class="page-container"
    style="text-align: center;"
  >
    <div class="progress-bar">
      <h1><strong class="loading">Loading...</strong></h1>
      <h2><strong class="loading">{{percent}}</strong></h2>
    </div>
  </div>
</template>

<script>
import { data } from "../assets/js/data.js";
export default {
  data() {
    return {
      count: 0,
      percent: "",
      imageUrl: data
    };
  },
  mounted: function() {
    this.preload();
  },
  methods: {
    preload: function() {
      let imgs = [];
      let auidos = [];
      for (let index = 0; index < 2; index++) {
        imgs.push(data[index].gifUrl);
      }

      for (let img of imgs) {
        let image = new Image();
        image.src = img;
        image.onload = () => {
          this.count++;
          // 计算图片加载的百分数，绑定到percent变量
          let percentNum = Math.floor((this.count / 2) * 100);
          this.percent = `${percentNum}%`;
        };
      }
    }
  },

  watch: {
    count: function(val) {
      if (val >= 2) {
        // 图片加载完成后跳转页面
        this.$router.push({ path: "mobile" });
      }
    }
  }
};
</script>



<style lang="less" >
#app {
  height: 100vh;
}
.progress-bar {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 100px;
  color: #999;
  text-align: center;
}
</style>
