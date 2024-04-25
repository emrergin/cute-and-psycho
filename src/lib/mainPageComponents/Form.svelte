<script lang="ts">
  import { enhance } from "$app/forms";
  import type { ActionData } from "../../routes/$types";
  export let message: {
    name: string;
    email: string;
    phone: string;
    text: string;
  };
  export let form: ActionData;
</script>

<p>
  Yüz yüze veya online görüşme için iletişime geçebilirsiniz. Yüz yüze
  görüşmeleri Bolu Merkez'de yapıyoruz.
</p>
<p>
  Bana ulaşmak için aşağıdaki formu kullanabilir veya e-posta yollayabilirsiniz.
</p>
<p>
  E-posta adresim: <a href="mailto:psk.senaergin@gmail.com"
    >psk.senaergin@gmail.com</a
  >
</p>

<form use:enhance method="POST">
  <label for="name">Adınız</label>
  <input required name="name" id="name" value={message.name} />
  <label for="email">E-posta Adresiniz</label>
  <input required name="email" id="email" value={message.email} type="email" />
  <label for="phone">Telefon Numaranız</label>
  <input required name="phone" id="phone" value={message.phone} type="tel" />
  <label for="message">Mesajınız</label>
  <textarea required name="message" id="message" value={message.text} />
  <button type="submit">Gönder</button>
</form>
{#if form?.success}
  <div>Başarıyla gönderildi. Çok yakında size döneceğim.</div>
{/if}
{#if form?.error}
  <div>Gönderilemedi. Lütfen tekrar deneyin.</div>
{/if}

<style>
  form > * {
    margin-inline: 3vw;
    border-radius: 3px;
  }

  div,
  p {
    margin-inline: 3vw;
  }

  form {
    max-width: 100%;
    display: flex;
    flex-direction: column;
  }

  #message {
    height: 30ch;
  }

  button {
    border: 2px var(--yazirenk) solid;
    padding: 0.75rem 4rem;
    display: block;
    margin-inline: auto;
    margin-top: 3ch;
    max-width: 300px;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s ease-in;
    background-color: inherit;
    font-size: 20px;

    align-self: center;
  }

  button:hover {
    color: var(--kahve);
    background-color: var(--yazirenk);
  }

  input {
    padding-block: 0.75ch;
  }

  input:focus {
    outline: 2px #628e73 solid;
  }

  textarea:focus {
    outline: 2px #628e73 solid;
  }
</style>
