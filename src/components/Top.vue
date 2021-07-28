<template lang="">
  <div class="top section">
    <p class="main-title">
      <span>E_MMORTALISE</span> is a virtual place to remember your loved ones who couldn't
      reach safety.
    </p>
    <p class="subtitle">
      When remembering someone who’s passed away or vanished without a trace, we
      often think of the places that were important to them, like where they
      sought refuge, their old residences, their family home, or places that
      were special to them. 
    </p>

    <p class="subtitle">
      To choose a place for your loved one
      <a @click="handleCreateMemory">Click Here</a>
      </p>
  </div>
</template>
<script>
import { modalNamespace } from "./../constants";

export default {
  name: "Top",
  methods: {
    handleCreateMemory() {
      if (!this.isAuthenticated) {
        this.$store.commit("setModal", modalNamespace.REGISTER);
      } else {
        this.$store.commit("setModal", modalNamespace.PERSON_FORM);
      }
    },
  },
  computed: {
    isAuthenticated() {
      return this.$store.state.isAuthenticated;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../styles/variables.scss";

.top {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 90px;

  .main-title {
    font-size: 26px;
    line-height: 36px;
    font-weight: 500;
    font-family: "FontBold";
    max-width: 780px;

    span {
      font-family: "FontBigCaslon";
    }

    @include breakpoint(large) {
      font-size: 45px;
      line-height: 54px;
    }
  }

  .subtitle {
    font-size: 18px;
    line-height: 1.3;
    font-family: "FontBook";
    max-width: 780px;

    @include breakpoint(medium) {
      font-size: 24px;
      line-height: 1.5;
    }

    a {
      text-decoration: underline;
      cursor: pointer;
    }
  }
}
</style>
