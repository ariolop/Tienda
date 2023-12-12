window.addEventListener("load", (event) => {

        switch (window.location.hash) {
            case "":
            case "#nav-como-comprar-tab":
                document.getElementById("nav-como-comprar-tab").classList.add("active");
                document.getElementById("nav-como-comprar").classList.add("active","show");
                break;

            case "#nav-formas-pago-tab":
                document.getElementById("nav-formas-pago-tab").classList.add("active");
                document.getElementById("nav-formas-pago").classList.add("active","show");
                break;
            
            case "#nav-envio-tab":
                document.getElementById("nav-envio-tab").classList.add("active");
                document.getElementById("nav-envio").classList.add("active","show");
                break;

            case "#nav-preguntas-tab":
                document.getElementById("nav-preguntas-tab").classList.add("active");
                document.getElementById("nav-preguntas").classList.add("active","show");
                break;   
            
            case "#nav-opiniones-tab":
                document.getElementById("nav-opiniones-tab").classList.add("active");
                document.getElementById("nav-opiniones").classList.add("active","show");
                break; 
        
            default:
                break;
        }
    
  });