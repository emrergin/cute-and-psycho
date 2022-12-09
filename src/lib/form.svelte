<div class="form">
    <p>Bana ulaşmak için aşağıdaki formu kullanabilir veya e-posta yollayabilirsiniz.</p>
    <p>E-posta adresim: <a href="mailto:psk.senaergin@gmail.com">psk.senaergin@gmail.com</a> </p>
    <label for="name">Adınız</label>
    <input id="name"/>
    <label for="email">E-posta adresiniz</label>
    <input id="name"/>
    <label for="message">Mesajınız</label>
    <textarea id="message"/>
    <button type="button">Gönder</button>
</div>

<style>

    .form>*{
        /* text-align: center; */
        margin-inline:3vw;
    }
    
    .form{    
        max-width: 100%;
        display:flex;
        flex-direction: column;
    }

    #message{
        height:30ch;
    }
    
    
    button{
        border:2px var(--yazirenk) solid;
        padding:0.75rem 4rem;
        display:block;
        margin-inline:auto;
        margin-top:3ch;
        max-width:300px;
        text-align: center;
        cursor: pointer;
        transition: all 0.2s ease-in;
        background-color:inherit;
        font-size: 20px;

        align-self: center;
    }
    
    button:hover{
        color:var(--kahve);
        background-color: var(--yazirenk);
    }
</style>