const template = document.createElement("template");
template.innerHTML = `
<footer class="margin">
<a class="logo" href="./index.html"></a>
<section>
    <h5>Contact</h5>
    <ul>
        <li><img src=""><p>Email</p></li>
        <li><img src=""><p>Tél : + 33 (0) 6 11 82 38 57</p></li>
        <li><img src=""><p>Linkedin</p></li>
    </ul>
</section>
</footer>
`
document.body.appendChild(template.content)