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
      <a>Click Here</a>
      </p>
  </div>
</template>
<script>
export default {
  name: "Top",
};
</script>
<style lang="scss" scoped>
@import "../styles/variables.scss";

.top {
  .main-title {
    font-size: 26px;
    line-height: 36px;
    font-weight: 500;
    font-family: 'FontBold';

    span {
      font-family: 'FontBigCaslon';
    }

    @include breakpoint(large) {
      font-size: 45px;
      line-height: 54px;
    }
  }

  .subtitle {
    font-size: 18px;
    line-height: 1.3;
    font-family: 'FontBook';

    @include breakpoint(medium) {
      font-size: 24px;
      line-height: 1.5;
    }

    a {
      text-decoration: underline;
    }
  }
}
</style>
