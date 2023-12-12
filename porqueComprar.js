window.addEventListener("load", (event) => {

    console.log(window.location.hash);

    if(window.location.hash != "")
    {
        if(window.location.hash === "#nav-como-comprar-tab")
        {
            document.getElementById("nav-como-comprar-tab").classList.add("active");
            document.getElementById("nav-como-comprar").classList.add("active","show");
        }

        if(window.location.hash === "#nav-formas-pago-tab")
        {
            console.log("Estamos en formas de pago");
            document.getElementById("nav-formas-pago-tab").classList.add("active");
            document.getElementById("nav-formas-pago").classList.add("active","show");
        }

        if(window.location.hash === "#nav-envio-tab")
        {
            console.log("Estamos en gastos de envío");
            document.getElementById("nav-envio-tab").classList.add("active");
            document.getElementById("nav-envio").classList.add("active","show");
        }

        if(window.location.hash === "#nav-preguntas-tab")
        {
            console.log("Estamos en preguntas frecuentes");
            document.getElementById("nav-como-comprar-tab").classList.add("active");
            document.getElementById("nav-como-comprar").classList.add("active","show");
        }

        if(window.location.hash === "#nav-opiniones-tab")
        {
            console.log("Estamos en opiniones");
            document.getElementById("nav-opiniones-tab").classList.add("active");
            document.getElementById("nav-opiniones").classList.add("active","show");
        }
    }
  });