var contact = `
<div class="container">
    <div class="row align-items-center">
        <div class="col-md-4 mb-3 mb-md-0">
            <!--                        <div class="card py-4 h-100">-->
            <!--                            <div class="card-body text-center">-->
            <!--                                <i class="fas fa-map-marked-alt text-primary mb-2"></i>-->
            <!--                                <h4 class="text-uppercase m-0">Address</h4>-->
            <!--                                <hr class="my-4" />-->
            <!--                                <div class="small text-black-50">4923 Market Street, Orlando FL</div>-->
            <!--                            </div>-->
            <!--                        </div>-->
        </div>
        <div class="col-md-4 mb-3 mb-md-0 ">
            <!--<div class="card py-4 h-100">-->
            <!--    <div class="card-body text-center">-->
            <!--        <i class="fas fa-envelope text-primary mb-2"></i>-->
            <!--        <h4 class="text-uppercase m-0">Email</h4>-->
            <!--        <hr class="my-4" />-->
            <!--        <div class="small text-black-50"><a href="#!">about@stellarspacesystems.com</a></div>-->
            <!--    </div>-->
            <!--</div>-->
        </div>
        <div class="col-md-4 mb-3 mb-md-0">
            <!--                        <div class="card py-4 h-100">-->
            <!--                            <div class="card-body text-center">-->
            <!--                                <i class="fas fa-mobile-alt text-primary mb-2"></i>-->
            <!--                                <h4 class="text-uppercase m-0">Phone</h4>-->
            <!--                                <hr class="my-4" />-->
            <!--                                <div class="small text-black-50">+1 (555) 902-8832</div>-->
            <!--                            </div>-->
            <!--                        </div>-->
        </div>
    </div>
    <div class="social d-flex justify-content-center">
        <a class="mx-2" target="_blank" rel="noopener" href="https://www.youtube.com/channel/UCcDWszakBaLDEjaqmg8X-vg"><i class="fab fa-youtube"></i></a>
        <a class="mx-2" target="_blank" rel="noopener" href="https://discord.gg/WhFJJyY"><i class="fab fa-discord"></i></a>
        <a class="mx-2" target="_blank" rel="noopener" href="https://github.com/stellarspacesystems/"><i class="fab fa-github"></i></a>
    </div>
</div>
`;
var footer = `
<div class="container">Copyright © Stellar Space Systems `+new Date().getFullYear()+`</div>
`;

var links = [
  {
    name: "About",
    type: "link",
    href: "/about.html"
  },
  {
    name: "Products",
    type: "dropdown",
    links: [
      {
        name: "Hummingbird",
        type: "link",
        href: "/products/hummingbird.html"
      },
      {
        name: "Sparrow",
        type: "link",
        href: "/products/sparrow.html"
      },
      {
        type: "divider"
      },
      {
        name: "Swift",
        type: "link",
        href: "/products/swift.html"
      }
    ]
  }
]

var head = `
<div class="container">
    <a class="navbar-brand js-scroll-trigger" href="/">Stellar Space Systems</a>
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
            data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
            aria-label="Toggle navigation">
        Menu
        <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
`;

for (i of links) {
  if (i.type === "link") {
    console.log(window.location.pathname);
    head += `<li class="nav-item"><a class="nav-link js-scroll-trigger`+(window.location.pathname == i.href || window.location.pathname == i.href.slice(0,-5) ? " active" : "")+`" href="`+i.href+`">`+i.name+`</a></li>`;
  }else if (i.type === "dropdown") {
    l = i.links.map(k => k.href)
    head += `
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle `+(l.includes(window.location.pathname) || l.includes(window.location.pathname+".html") ? " active" : "")+`" href="#" id="navbarDropdown" role="button"
           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">`+i.name+`</a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">`
    for (j of i.links) {
      if (j.type === "link") {
        head += `<a class="dropdown-item js-scroll-trigger`+(window.location.pathname == j.href || window.location.pathname == j.href.slice(0,-5) ? " active" : "")+`" href="`+j.href+`">`+j.name+`</a>`
      }else if (j.type === "divider") {
        head += `<div class="dropdown-divider"></div>`
      }
    }
    head += `</div></li>`;
  }
}

head += `</ul>
</div>
</div>`;

document.getElementById("contact").innerHTML = contact;
document.getElementById("footer").innerHTML = footer;
document.getElementById("mainNav").innerHTML = head;
