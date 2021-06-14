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
        <a class="mx-2" target="_blank" href="https://www.youtube.com/channel/UCcDWszakBaLDEjaqmg8X-vg"><i class="fab fa-youtube"></i></a>
        <a class="mx-2" target="_blank" href="https://discord.gg/WhFJJyY"><i class="fab fa-discord"></i></a>
        <a class="mx-2" target="_blank" href="https://github.com/stellarspacesystems/"><i class="fab fa-github"></i></a>
    </div>
</div>
`;
var footer = `
<div class="container">Copyright © Stellar Space Systems `+new Date().getFullYear()+`</div>
`;
/*var header = `
<div class="container">
    <a class="navbar-brand js-scroll-trigger" href="#page-top">Stellar Space Systems</a>
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">About</a></li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Projects</a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">


                    <a class="dropdown-item js-scroll-trigger" href="#abouthummingbird">Hummingbird</a>
                    <a class="dropdown-item js-scroll-trigger" href="#aboutsparrow">Sparrow</a>
                    <a class="dropdown-item js-scroll-trigger" href="#aboutnighthawk">Nighthawk</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item js-scroll-trigger" href="#aboutphoenix">Phoenix</a>
            </div>
        </ul>
    </div>
</div>
`; //more of navigation*/


document.getElementById("contact").innerHTML = contact;
document.getElementById("footer").innerHTML = footer;
// document.getElementById("header").innerHTML = header;
