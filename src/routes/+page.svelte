<script lang="ts">
  import Hakkimda from "../lib/mainPageComponents/Hakkimda.svelte";
  import Greetings from "../lib/mainPageComponents/Greetings.svelte";
  import Neden from "../lib/mainPageComponents/Neden.svelte";
  import Bloglar from "../lib/mainPageComponents/Bloglar.svelte";
  import Iletisim from "../lib/mainPageComponents/Iletisim.svelte";
  import AnimatedComponent from "../lib/mainPageComponents/AnimatedComponent.svelte";
  import Randevu from "$lib/mainPageComponents/Randevu.svelte";
  import type { Post } from "$lib/db/schema";

  export let form;
  export let data: Post[];
  let showAppointment = false;
</script>

<div class="container mt-5">
  <Greetings />
  <AnimatedComponent>
    <Hakkimda />
  </AnimatedComponent>
  <AnimatedComponent>
    <Neden />
  </AnimatedComponent>
  <AnimatedComponent>
    <Iletisim {form} />
  </AnimatedComponent>
  <AnimatedComponent>
    <Bloglar {data} />
  </AnimatedComponent>
  <AnimatedComponent isInView={showAppointment} let:show margin={"1000px"}>
    <Randevu isInView={show} />
  </AnimatedComponent>
</div>
