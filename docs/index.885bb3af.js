const e=document.createElement("template");e.innerHTML=`
<header class="margin" id="header">
	<a class="logo" href="./index.html"></a>
	<nav class="fond_menu">
		<li style="margin: 0;"><a class="btn btn_header white" href="">Le design ?</a></li>
		<li><a class="btn btn_header white" href="">Services</a></li>
		<li><a class="btn btn_header white" href="">Nous</a></li>
		<!--<div class="fond_menu" style="position: fixed; top: 0; right: 0; height: 100vh; z-index: -1;"></div>-->
	</nav>
		<div id="icons"></div>
</header>
`,document.body.appendChild(e.content);