<div class="form">
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
        padding:0.75rem 2rem;
        display:block;
        margin-inline:auto;
        margin-top:3ch;
        max-width:300px;
        text-align: center;
        cursor: pointer;
        transition: all 0.2s ease-in;
        background-color:inherit;

        align-self: center;
    }
    
    button:hover{
        color:var(--kahve);
        background-color: var(--yazirenk);
    }
</style>