export default {
  data() {
    return {
      activeBlur: false,
    };
  },
  methods: {
    activateBlur(event) {
      document.getElementById("landing").classList.add("blur-overlay");
      this.activeBlur = true;
    },
    deactivateBlur(event) {
      document.getElementById("landing").classList.remove("blur-overlay");
      this.activeBlur = false;
    },
  },
};
