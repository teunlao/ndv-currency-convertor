const root = document.getElementById('root')

root.innerHTML = (
  `
  <div>
    <nav class="nav">
      <a href="/" class="nav__link" data-link>Home</a>
      <a href="/converter" class="nav__link" data-link>Converter</a>
      <a href="/currencies" class="nav__link" data-link>Currencies</a>
    </nav>
    <div>
      <div id="router-view"></div>
    </div>
  </div>
  `
)
