export default {
  data() {
    return {
      isMobile: false,
    };
  },
  methods: {
    onResize(event) {
      window.innerWidth < 768
        ? (this.isMobile = true)
        : (this.isMobile = false);
    },
  },
  mounted() {
    window.addEventListener("resize", this.onResize);
    window.innerWidth < 768 ? (this.isMobile = true) : (this.isMobile = false);
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
};
