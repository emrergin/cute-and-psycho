<script>
  import LocationIcon from "$lib/icons/LocationIcon.svelte";
  import Mail from "$lib/icons/Mail.svelte";
  import WhatsappIcon from "$lib/icons/WhatsappIcon.svelte";

  let whatsappText =
    "https://wa.me/+905102217924?text=Merhaba%2C%20terapi%20hizmetleriniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";
</script>

<div class="info-container">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.4898966830247!2d31.588888000000004!3d40.72924460000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409d3f0b8ce7d63d%3A0xebd3b7976f45cf51!2zQmHEn2xhbSBEYW7EscWfbWFubMSxaw!5e0!3m2!1str!2str!4v1737712181535!5m2!1str!2str"
    width="500"
    height="450"
    style="border:0;max-width:100%;"
    allowfullscreen={true}
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
    title="Mekanımız"
    id="harita"
  ></iframe>

  <div class="contact-info-box">
    <div class="contact-info">
      <a href={whatsappText} class="float" target="_blank">
        <WhatsappIcon />
      </a>

      <a href={whatsappText} target="_blank" class="tel-link"
        >+90 (510) 221 79 24</a
      >
    </div>
    <div class="contact-info">
      {" "}
      <Mail width="2em" height="2em" />
      <a href="mailto:psk.senaergin@gmail.com">psk.senaergin@gmail.com</a>
    </div>
    <div class="contact-info">
      {" "}
      <LocationIcon width="2em" height="2em" />
      <div>
        Borazanlar, Mehmet Akif Ersoy Blv. Begonya Apt D:42/6, Merkez/Bolu
      </div>
    </div>
  </div>
</div>

<style>
  .info-container {
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
    padding: 1rem 2rem 2rem 2rem;
    row-gap: 2rem;
    justify-content: center;
  }

  .contact-info {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 2rem;
  }

  .contact-info-box {
    width: 356px;
    height: fit-content;
    margin-block: auto;
  }

  #harita {
    scroll-margin-top: 110px;
  }

  @media (max-width: 640px) {
    .info-container {
      padding-inline: 0;
      padding-bottom: 0;
    }
  }
</style>
