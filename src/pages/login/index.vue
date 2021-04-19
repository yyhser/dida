<template>
  <div class="container"></div>
</template>

<script>
import card from "@/components/card";
export default {
  data() {
    return {
      columns: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
      show: false,
    };
  },
  components: {
    card,
  },
  methods: {
    onChange(picker, value, index) {},
    bindViewTap() {
      const url = "../logs/main";
      if (mpvuePlatform === "wx") {
        mpvue.switchTab({ url });
      } else {
        mpvue.navigateTo({ url });
      }
    },
    clickHandle(ev) {
      console.log("clickHandle:", ev);
      // throw {message: 'custom test'}
    },
  },

  created() {
    // let app = getApp()
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>
