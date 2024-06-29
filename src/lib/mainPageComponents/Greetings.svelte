<script>
  import sena from "$lib/assets/IMG_8812222.jpg";
</script>

<div class="imageandtext">
  <img src={sena} alt="hanimefendinin fotografi" />
  <div class="greetings">
    <p>Merhaba.</p>

    <p>Ben Uzman Klinik Psikolog Sena Ergin.</p>

    <p>
      Yetişkin ve ergenlere yaşamdaki zorluklarla başa çıkma, stres ve kaygı
      yönetimi, mükemmelliyetçilik, kişisel gelişim gibi konularda destek
      sunuyorum.
    </p>

    <p>
      Web sitemde, eğitimim, deneyimlerim ve uzmanlık alanlarım hakkında
      ayrıntılı bilgilere ulaşabilirsiniz. Ayrıca, ruh sağlığı ve kişisel
      gelişim konularında yazdığım blog yazılarını da buradan okuyabilirsiniz.
    </p>

    <p>
      Daha anlamlı ve dengeli bir yaşam için gerekli adımları birlikte
      atabiliriz.
    </p>
    <a class="button" href="#iletisim">İletişim</a>
  </div>
</div>

<style>
  a.button {
    text-decoration: none;
  }

  .imageandtext {
    display: flex;
    flex-wrap: wrap;
    background-color: var(--bej);
    justify-content: center;
  }

  .greetings {
    padding: 1.2rem 2rem;
    align-self: center;
  }

  img {
    max-width: 80vw;
  }

  @media (min-width: 600px) {
    .greetings {
      font-size: 0.9em;
    }
    .imageandtext {
      flex-wrap: nowrap;
      padding-left: 1.2rem;
      padding-block: 0.8rem;
    }

    img {
      max-width: 48%;
    }
  }
</style>
