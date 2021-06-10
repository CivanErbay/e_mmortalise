<template lang="">
    <div class="top">
        <span class="main-title">E_MMORTALISE is a virtual place
to remember your loved ones who
couldn't reach safety.</span>
<span class="subtitle">When remembering someone who’s passed away or vanished without
a trace, we often think of the places that were important to them, like
where they sought refuge, their old residences, their family home, or
places that were special to them.

To choose a place for your loved one Click Here</span>
    </div>
</template>
<script>
export default {
  name: "Top",
};
</script>
<style  lang="scss" scoped>
@import "../styles/variables.scss";

.top {
  padding-top: 4rem;
  background-image: linear-gradient(
    $secondary-background-color,
    $primary-background-color
  );
  min-height: 200px;
}
</style>