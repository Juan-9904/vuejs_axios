Vue.component('component-helado', {
    props: ['helado'],
    template: `
        <div>					
            <button class="btn btn-success" v-on:click="agregar(helado)" v-if="!helado.seleccionado"> + </button>
            <button class="btn btn-danger" v-on:click="eliminar(helado)" v-if="helado.seleccionado"> - </button>
            <span> {{ helado.sabor }} </span>
            <hr />
        </div>
    `,
    methods: {
        agregar: function(p_helado){
            p_helado.seleccionado = true;
        },
        eliminar: function(p_helado){
            p_helado.seleccionado = false;
        }
    }
})

new Vue({
    el: '#app',
    data: {
        helados: []
    },
    created: function(){
        var that = this;
        axios.get('https://raw.githubusercontent.com/fernandoggaitan/vuejs_axios/master/response.json')
        .then(function (response) {
            that.helados = response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
    }
});