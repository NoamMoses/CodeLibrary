function printNav() {
	document.write(`
		<nav>
			<div id="navContainer">
				<span class="navItem" id="navHome">
				<a href="` + WEBSITE_URL + "home.html" + `">עמוד ראשי</a>
				</span>
				
				<span class="navSep"> | </span>
				
				<span class="navItem" id="navSearch"><a href="` + WEBSITE_URL + "indexPage.html" + `">
חיפוש מחלקה
\\
פונקצייה
				</a></span>
				<span class="navSep"> | </span>
				
				<span class="navItem" id="navNew">
				<a href="` + WEBSITE_URL + "whatsNew.html" + `">מידע+מה חדש</a>
				</span>
			</div>
		</nav>
	`);
}