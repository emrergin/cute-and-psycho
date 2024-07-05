<script lang="ts">
  import { inview } from "svelte-inview";

  export let isInView: boolean = false;
</script>

<div
  use:inview={{ unobserveOnEnter: true, rootMargin: "-20%" }}
  on:inview_change={({ detail }) => {
    isInView = detail.inView;
  }}
>
  <div class:animate={isInView} class="animated">
    <slot show={isInView} />
  </div>
</div>

<style>
  .animated {
    opacity: 0;
    transition: opacity ease-out 2s;
  }

  .animate {
    opacity: 1;
  }
</style>
