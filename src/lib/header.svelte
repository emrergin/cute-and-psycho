<nav class="navbar">
    <div class="d-flex justify-content-between mw-100" id="navbarsubbox">
            <a class="susluyazi navbar-brand hugetext" href="/">
                Sena Ergin
            </a>

        <div id="navbarsubsubbox">
                <a class="navbar-brand" href="/#hakkimda">
                    Hakkımda
                </a>
                <a class="navbar-brand" href="/#neden">
                    Neden Terapi
                </a>
                <a class="navbar-brand" href="/posts/">
                    Blog
                </a>
                <a class="navbar-brand" href="/#iletisim">
                    İletişim
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

    .hugetext{
        font-size:5rem;
        line-height:3.5ex;
    }



@media (max-width: 600px) {
    #navbarsubbox{
        gap:0.5rem;
    }
    #navbarsubbox{
        justify-content:center;
    }
    #navbarsubsubbox{
        gap:10px;
        margin-inline: auto;
    }
}

</style>
