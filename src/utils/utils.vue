

<script>
    export default {
        name: 'utils',
        methods: {
            onResize(event) {
                window.innerWidth < 768 ? this.$store.commit('changeIsMobile',true) : this.$store.commit('changeIsMobile',false);
            }
            },
            mounted() {
                window.addEventListener("resize", this.onResize);
                window.innerWidth < 768 ? this.$store.commit('changeIsMobile',true) : this.$store.commit('changeIsMobile',false);
            },

            beforeDestroy() {
                window.removeEventListener("resize", this.onResize);
            }
    }
</script>

