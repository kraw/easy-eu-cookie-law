jQuery(document).ready(function(){

    jQuery("a#cerrar_msj").click(function(event){
        
        event.preventDefault();
        
        jQuery.post(
                
            ocultar_msj_url,
            { 
                action: 'ocultar_msj'
            },
            function(data){

                if(data == "OK")
                    jQuery("div.wrap_cookies").fadeOut(500);

            }
        );

    });     
    
});