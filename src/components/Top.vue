<template lang="">
  <div class="top section">
    <p class="main-title">
      E_MMORTALISE is a virtual place to remember your loved ones who couldn't
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
  box-sizing: border-box;
  padding: 60px calc(25px + (100 - 25) * (100vw - 320px) / (768 - 320));

  @include breakpoint(medium) {
    padding: 60px calc(100px + (300 - 100) * (100vw - 768px) / (1024 - 768));
  }

  @include breakpoint(large) {
    padding: 60px 300px;
  }

  .main-title {
    font-size: 26px;
    line-height: 36px;
    font-weight: 500;
    font-family: 'FontBold';

    @include breakpoint(large) {
      font-size: 45px;
      line-height: 54px;
    }
  }

  .subtitle {
    font-size: 18px;
    line-height: 1.3;

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
