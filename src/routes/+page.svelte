<script>
    // import Header from '../lib/header.svelte';
    import Form from '../lib/form.svelte';
    import ArticleList from '../lib/articlelist.svelte';
    export let data;

    // let rootElement;

    // $: rootElement && rootElement.style.setProperty('--headersize', `200`);
</script>

<div class="container mt-5">
    <div class="imageandtext">
        <figure><img src="/IMG_8812222.jpg" alt="hanimefendinin fotografi"></figure>
        <div class="greetings">
            <p>Merhaba.</p>

            <p>Ben Klinik Psikolog Sena Ergin.</p>

            <p>Bu sitede özgeçmişim ve çalıştığım alanlar hakkında bilgi edinebilirsiniz.</p>

            <p>Ayrıca ruh sağlığına dair yazılarıma da buradan ulaşabilirsiniz.</p>
            <a class="button" href="#iletisim">İletişim</a>
        </div>
    </div>
    <div class="hakkimda">
        <div class="susluyazi hugetext maintitle"  id="hakkimda">
            Hakkımda
        </div>
        <p>İstanbul Üniversitesi Psikoloji bölümünden 2016 yılında mezun oldum. Lisans eğitimim boyunca çeşitli hastane ve anaokullarında staj yaptım.</p>   
        <p>Mezuniyetimin sonrasında iki sene Hollanda Maastricht Üniversitesi Beyin ve Duygu Laboratuarında stajyer araştırmacı olarak araştırmalarda yer aldım.</p>   
        <p> 2020 yılında başladığım Ankara Sosyal Bilimler Üniversitesi Klinik Psikoloji Yüksek isansımı 2022 yılında tamamladım. Yüksek lisans eğitimim dahilinde Bilişsel Davranışçı Terapi eğitimi ve süpervizyon aldım.</p>  
        <p>Klinik alandaki gelişimim için süpervizyon almaya devam ediyorum. Bilişsel Davranışçı Terapinin yanı sıra Kabul Kararlılık Terapisi ve Danışan Odaklı Terapi yaklaşımına ilgi duyuyorum.</p>    
    </div>
    <div class="neden">
        <div class="susluyazi hugetext maintitle" id="neden">
            Neden terapi?
        </div>
        <p>Terapi depresyon, kaygı, yoğun stres, ilişkilerden kaynaklı sorunlar, sınır koymada zorluklar vb gibi durumlarda size yardımcı olur.</p>

        <p>Ayrıca belirgin bir sorun olmadan da kendinizi tanımak, potansiyelinize ulaşmak, genel olarak iyi oluşunuzu artırmak için de terapiye başlanabilir.</p>
    </div>

    <div class="bloglar">
        <div class="susluyazi hugetext maintitle" id="bloglar">
            Blog Yazıları
        </div>
        <ArticleList data={data} count={3}/>
    </div>

    <div class="iletisim">
        <div class="susluyazi hugetext maintitle" id="iletisim">
            İletişim
        </div>
        <Form message={{name:'',email:'',text:''}}/>
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
    }

    .hakkimda{
        background-color:var(--acikpembe);
    }

    .neden{
        background-color: var(--acikyesil);
    }

    .iletisim{
        background-color: var(--kahve);
    }

    #iletisim{
        margin-bottom:0px;
    }

    #hakkimda,#neden,#iletisim{
        /* scroll-margin-top: var(--headersize); */
        scroll-margin-top: 200px;
    }

    .neden,.hakkimda, .iletisim, .bloglar{
        padding: 5vw;
    }

    .greetings{
        padding-block:5rem;
        padding-right:max(3vw,1rem);
        width:48%;
        /* margin-right:1vw; */
    }

</style>