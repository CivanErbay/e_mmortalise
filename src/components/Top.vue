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
  padding: 60px 200px;

 /*  @include breakpoints(large){
    padding: 60px 300px;
  } */

  .main-title {
    font-size: 45px;
    line-height: 54px;
    font-weight: 500;
  }

  .subtitle {
    font-size: 24px;

    a {
      text-decoration: underline;
    }
  }
}
</style>
