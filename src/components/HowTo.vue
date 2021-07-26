<template lang="">
  <div class="how-to section">
    <p>
      This website provides a gathering place to remember and document the
      tragedies of the people you have lost. It‘s hard to imagine the number of
      unfortunate souls who couldn‘t reach safety.
    </p>
    <p>
      Here is a virtual place to mourn together and exchange contact information
      with other people in similar situations.
    </p>
    <p>
      A website for communication, interaction and remembrance for those you
      have lost.
    </p>
  </div>
</template>
<script>
export default {
  name: "HowTo",
};
</script>
<style lang="scss">
@import "../styles/variables.scss";

.how-to {
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    &:first-child {
      padding-top: 50px;
    }
    font-size: 18px;
    line-height: 1.3;
    font-family: "FontBook";
    max-width: 780px;

    @include breakpoint(medium) {
      font-size: 24px;
      line-height: 1.5;
    }
  }
}
</style>
