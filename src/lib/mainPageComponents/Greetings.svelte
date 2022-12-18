<script>
    import sena from '$lib/assets/IMG_8812222.jpg';
</script>

<div class="imageandtext">
    <figure>
        <img src={sena} alt="hanimefendinin fotografi">
    </figure>
    <div class="greetings">
        <p>Merhaba.</p>

        <p>Ben Klinik Psikolog Sena Ergin.</p>

        <p>Bu sitede özgeçmişim ve çalıştığım alanlar hakkında bilgi edinebilirsiniz.</p>

        <p>Ayrıca ruh sağlığına dair yazılarıma da buradan ulaşabilirsiniz.</p>
        <a class="button" href="#iletisim">İletişim</a>
    </div>
</div>

<style>
    a.button{
        text-decoration: none;
    }

    figure {
        position: relative;
        width:48%;
        overflow: hidden;
        margin-bottom:0px;        
    }

    figure img {
        min-height:400px;
        width: 100%;
        object-position: center;
        object-fit: cover;
        display: block;
        float:left;
    }

    .imageandtext{
        display:flex;
        gap: min(2vw,2rem);
        align-items: center;
        background-color: var(--bej);
    }

    .greetings{
        padding-block:5rem;
        padding-right:max(3vw,1rem);
        width:48%;
    }

    @media (max-width: 600px) {
        figure{
            margin-left:5px;
            margin-right:8px;  
            padding-top:3rem;          
        }
        .greetings{
            padding-top:3rem;
            font-size:0.9em;
        }
        img{
            float:left;
        }
        .imageandtext{
            gap:3px;
            align-items:flex-start;
        }
    }

</style>