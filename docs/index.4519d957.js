const e=document.createElement("template");e.innerHTML=`
<footer style="display: flex; flex-direction: column; align-items: center;">
<div class="margin footer_info" style="display: flex; justify-content: space-between;">
    <a class="logo" href="./index.html"></a>
    <section>
        <h5>Services</h5>
        <ul>
            <li>Design en entreprise</li>
            <li>Jeux mobiles</li>
            <li>Veille & Id\xe9ation</li>
        </ul>
    </section>

    <section>
        <h5>\xc0 propos</h5>
        <ul>
            <li>De nous</li>
            <li>De l'entreprise</li>
            <li>Nos droits</li>
        </ul>
    </section>
</div>

<article style="display: flex; justify-content: space-around;">
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/kaisostudio/" class="icon" style="background-image: url("./Assets/Icons/Instagram_black.svg");">
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/kaiso-studio/" class="icon" style="background-image: url("./Assets/Icons/Linkedin_black.svg");">
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/StudioKaiso" class="icon" style="background-image: url("./Assets/Icons/Twitter_black.svg");">
            <a target="_blank" rel="noopener noreferrer" href="mailto:contact@kaisostudio.org" class="icon" style="background-image: url("./Assets/Icons/Mail_black.svg");">
        </article>

<p>Kaiso Studio \xa9 2024</p>
</footer>

<style>
    footer{
        background-color: #F2F2F2; 
        width: 100%; 
        display: flex; 
        justify-content: center; 
        padding-top: 7rem;
        padding-bottom: 1rem;
    }

    footer section{
        text-align: center;
    }

    footer li{
        margin: 0;
        padding: 0;
        padding-top: 0.5rem;
    }

    footer a{
        padding: 2rem 0.75rem;
    }

    footer .logo{
        padding-top: 0;
    }

</style>
`,document.body.appendChild(e.content);