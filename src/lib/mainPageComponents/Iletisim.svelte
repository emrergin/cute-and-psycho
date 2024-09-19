<script lang="ts">
  export let form: any;
  import Form from "./Form.svelte";
  import Contact from "./Contact.svelte";
</script>

<div class="iletisim">
  <div class="susluyazi hugetext maintitle" id="iletisim">İletişim</div>
  <Contact />
  <Form message={{ name: "", email: "", text: "", phone: "" }} {form} />
</div>

<style>
  .iletisim {
    background-color: var(--kahve);
    padding: 5vw;
  }

  #iletisim {
    margin-bottom: 0px;
    scroll-margin-top: 200px;
  }
</style>
