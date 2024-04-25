const template = document.createElement("template");
template.innerHTML = `
<header class="margin" id="header">
	<a class="logo" href="./index.html"></a>
	<nav class="fond_menu">
		<li style="margin: 0;"><a href="./Formation.html" id="btn_Services" class="btn btn_header white">Formations</a></li>
		<li><a href="./Ambition.html" id="btn_Design" class="btn btn_header white">Notre ambition</a></li>
		<li><a href="./Team.html" id="btn_Nous" class="btn btn_header white">L'équipe</a></li>
		<!--<div class="fond_menu" style="position: fixed; top: 0; right: 0; height: 100vh; z-index: -1;"></div>-->
	</nav>
		<div id="icons"></div>
</header>
`
document.body.appendChild(template.content)