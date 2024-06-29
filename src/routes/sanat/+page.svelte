<script lang="ts">
  import { onMount } from "svelte";
  import img1 from "$lib/assets/sanat/1.png";
  import img2 from "$lib/assets/sanat/2.png";
  import img3 from "$lib/assets/sanat/3.png";
  import img4 from "$lib/assets/sanat/4.png";
  import img5 from "$lib/assets/sanat/5.png";
  import img6 from "$lib/assets/sanat/6.png";
  import img7 from "$lib/assets/sanat/7.png";

  let dialog: null | HTMLDialogElement = null; // Reference to the dialog tag
  let container: null | HTMLElement = null;
  onMount(() => {
    dialog = document.getElementById("apply-dialog") as HTMLDialogElement;

    container = document.getElementById("main-container");
  });

  const showDialog = (asModal = true) => {
    if (dialog) {
      dialog[asModal ? "showModal" : "show"]();
    }
  };

  let count_val = 15;
  let count = 0;

  function timer(node: Element) {
    let interval: NodeJS.Timeout;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          interval = setInterval(() => {
            count += 1;
            if (count === count_val) {
              clearInterval(interval);
              showDialog();
            }
          }, 100);
        } else {
          clearInterval(interval);
          count = 0;
          dialog && dialog.close();
        }
      });
    });
    observer.observe(node);

    return {
      destroy: () => observer.disconnect(),
    };
  }
</script>

<div class="main-container">
  <img src={img1} alt="atolye detaylari 1" />
  <img src={img2} alt="atolye detaylari 2" />
  <img src={img3} alt="atolye detaylari 3" />
  <img src={img4} alt="atolye detaylari 4" />
  <img src={img5} alt="atolye detaylari 5" />
  <img src={img6} alt="atolye detaylari 6" />
  <img src={img7} alt="atolye detaylari 7" use:timer />

  <a
    href="https://docs.google.com/forms/d/e/1FAIpQLSf6fE2pQWgegM0szfjghnJmUBbXI924bR-rP-v4vMVTENnOBw/viewform?usp=sf_link"
    class="apply-button floating-button small-in-mobile"
    target="_blank">Kaydol</a
  >
  <dialog id="apply-dialog">
    <p>Kontenjan dolmadan yerinizi ayırtın!</p>
    <div
      on:keydown={() => {
        dialog && dialog.close();
      }}
      class="close-button"
      on:click={() => {
        dialog && dialog.close();
      }}
      role="button"
      tabindex="0"
    >
      x
    </div>
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSf6fE2pQWgegM0szfjghnJmUBbXI924bR-rP-v4vMVTENnOBw/viewform?usp=sf_link"
      target="_blank"
      class="apply-button dialog-button">Kaydol!</a
    >
  </dialog>
</div>

<style>
  img {
    margin-inline: auto;
    display: block;
    width: 100%;
    max-width: 1080px;
  }

  .main-container {
    width: 100%;
    margin-bottom: 125px;
  }

  .floating-button {
    top: 45%;
    left: 0%;

    position: fixed;
  }

  .close-button {
    position: absolute;
    right: 8%;
    top: 8%;
    cursor: pointer;
    border: 0;
  }

  .close-button:hover {
    font-weight: bold;
  }

  .apply-button {
    background-color: #f26441;

    fill: currentColor;
    cursor: pointer;
    user-select: none;

    border-radius: 24px;

    padding: 1rem 3rem;
    color: #fff;

    font-size: 1.5em;
  }

  .dialog-button {
    display: block;
    margin: auto;
    width: max-content;
    margin-top: 2rem;
    font-size: 1em;
  }

  dialog {
    opacity: 0;
    display: block;
  }

  dialog[open] {
    border: green 0 solid;
    border-radius: 2rem;
    padding: 3rem;
    opacity: 1;
    transition: opacity 2s;
  }

  dialog > p {
    text-align: center;
  }

  .apply-button:hover {
    background-color: #ff7552;
  }

  .apply-button:link {
    text-decoration: none;
  }
  .apply-button:visited {
    text-decoration: none;
  }
  .apply-button:hover {
    text-decoration: none;
  }
  .apply-button:active {
    text-decoration: none;
  }

  dialog::backdrop {
    background: rgba(0, 0, 0, 0.5) !important;
  }

  @media (orientation: portrait) {
    .apply-button {
      font-size: 1em;
      top: 15%;
      border: var(--koyubej) 2px solid;
      box-shadow:
        rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
        rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    }

    .floating-button {
      border: #8c76b6 2px solid !important;
    }

    .small-in-mobile {
      font-size: 0.95em;
      padding: 0.5rem 1.2rem;
    }
  }
</style>
