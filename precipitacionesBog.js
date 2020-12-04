//41fb1ddf9692462095fc19a9f2b93223

Vue.component('component-precipitacion', {
    props: ['precipitacion'],
    template: `
        <div>
            <span> {{ precipitacion.valorobservado }} </span>
            <span> {{ precipitacion.zonahidrografica }} </span>
            <span> {{ precipitacion.fechaobservacion }} </span>           
        </div>
    `,
    methods: {

        /*

        agregar: function(p_helado){
            p_helado.seleccionado = true;
        },
        eliminar: function(p_helado){
            p_helado.seleccionado = false;
        }

        */
    }
})

new Vue({
    el: '#appPrecipitaciones',
    data: {
        precipitaciones: [],
        raw_precipitaciones: ''
    },
    /*methods: {
        
    },*/
    created: function(){
        var contexto = this;       
        axios.get('https://www.datos.gov.co/resource/5uav-9n4h.json'
               
        )
        .then(function (response) {
            //contexto.raw_precipitaciones = response.data;
            contexto.precipitaciones = response.data;
            contexto.precipitaciones = contexto.precipitaciones.slice(0,4);
            console.log(contexto.precipitaciones);
            //console.log('hola!');
            
        })
        .catch(function (error) {
            console.log(error);
        });
    }
});