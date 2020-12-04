//41fb1ddf9692462095fc19a9f2b93223
/*
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
*/

new Vue({
    el: '#newsColombia',
    data: {
        noticias: [],
        raw_noticias: ''
    },
    /*methods: {
        
    },*/
    created: function(){
        var that = this;
        //axios.get('http://newsapi.org/v2/everything?q=bitcoin&from=2020-11-04&sortBy=publishedAt&apiKey=41fb1ddf9692462095fc19a9f2b93223'
        /*
        axios.get('http://newsapi.org/v2/top-headlines?country=co&category=sports&apiKey=41fb1ddf9692462095fc19a9f2b93223',
        {
            headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            }
        }*/


        //axios.get('http://www.omdbapi.com/?i=tt1285016&type=movie&apikey=23daade9'
        axios.get('https://raw.githubusercontent.com/luismescobarf/vuejs_axios/noticias/top-headlines.json'
        
        //{headers: {"Access-Control-Allow-Origin": "*"}}
        
        )
        .then(function (response) {
            that.raw_noticias = response.data;
            //this.raw_noticias = that.noticias;
        })
        .catch(function (error) {
            console.log(error);
        });
    }
});