<script lang="ts">
  export let isInView: boolean = false;
</script>

{#if isInView}
  <iframe
    id="randevu"
    title="Randevu"
    src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1GcObmeJWrrDuFor1n-xpb96fJG2Z7zPDIEbSXgdniwX0yVBXmL8kjPv6Sny_gc_JxdAaplazk?gv=true"
    width="100%"
    frameborder="0"
    class="randevu"
    scrolling="no"
  />
{:else}
  <div id="randevu" style="height:300px;"></div>
{/if}

<style>
  .randevu {
    border: 0;
    scroll-margin-top: 200px;
    height: 800px;
  }

  @media (orientation: portrait) {
    .randevu {
      height: 1200px;
    }
  }
</style>
