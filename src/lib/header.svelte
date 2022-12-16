<nav class="navbar">
    <div id="navbarsubbox">
            <a class="susluyazi navbar-brand hugetext" id="banner-name" href="/">
                Sena Ergin
            </a>

        <div id="navbarsubsubbox">
                <a class="navbar-brand invis-when-small" href="/#hakkimda">
                    Hakkımda
                </a>
                <a class="navbar-brand invis-when-small" href="/#neden">
                    Neden Terapi
                </a>
                <a class="navbar-brand" href="/posts/">
                    Blog
                </a>
                <a class="navbar-brand invis-when-small" href="/#iletisim">
                    İletişim
                </a>
                <a id="instagram-link" aria-label="İnstagram gönderilerim" href="https://www.instagram.com/psk.senaergin/" target="_blank" rel="noreferrer">
                    <svg width="2.5em" height="2.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"></path></svg>
                </a>

                <a aria-label="Youtube kanalım" href="https://www.youtube.com/@psk.senaergin" target="_blank" rel="noreferrer">
                    <svg width="2.5em" height="2.5em" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73Z"/></svg>
                </a>
        </div>
    </div>
</nav>

<style>
    .navbar-brand{
        font-size:1.25rem;
        text-decoration: none;
        font-family: 'Montserrat', sans-serif;
        transition: all ease-in 0.25s;
    }

    .navbar .susluyazi{
    padding-inline:1rem;
    padding-block:2rem;
    }

    #navbarsubbox{
        width: 100%;
        display:flex;
        padding-inline: 1.75vw;
        justify-content: space-between;
        gap: var(--space, 1rem);
        align-items: baseline;
    }

    #navbarsubsubbox{
        display:flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: var(--space, 3rem);
        margin-right:var(--space, 2rem);
        align-items: baseline; 
    }

    #navbarsubsubbox:last-child{
        margin-bottom:2ch;
    }

    #banner-name{
        max-height:150px;
    }

    .navbar{          
        display:flex;
        justify-content: space-around;
        flex-wrap:wrap;
        position:sticky;
        top:0;
        background-color: var(--acikbej);
        z-index:300;
        border-bottom:2px solid var(--koyubej);
    }

    .navbar > * {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space, 2rem);
    }

    .susluyazi{
        font-family: 'Sacramento', cursive;
    }

    svg{
        /* display:block; */
        margin-bottom: 0px;
        vertical-align:middle;
    }



@media (max-width: 600px) {
    #navbarsubbox{
        gap:0.5rem;
    }
    #navbarsubbox{
        justify-content:center;
    }
    #navbarsubsubbox{
        gap:30px;
        margin-inline: auto;
    }
    .invis-when-small{
        display:none;
    }
    #instagram-link{
        order:-1;
    }
    #banner-name{
        padding-bottom:1rem;
        max-height:134px;
    }
}

@media (max-width: 450px) {
    .hugetext{
        font-size:16vw;
    }

    .maintitle{
        margin-bottom: 2rem;
    }
}
</style>