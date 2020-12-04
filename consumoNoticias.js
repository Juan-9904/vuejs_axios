//41fb1ddf9692462095fc19a9f2b93223

Vue.component('component-noticia', {
    props: ['noticia'],
    template: `
        <div>
            <span> {{ noticia.title }} </span>
            <span> {{ noticia.urlToImage }} </span>           
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
    el: '#newsColombia',
    data: {
        noticias: [],
        raw_noticias: ''
    },
    /*methods: {
        
    },*/
    created: function(){
        var contexto = this;
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
            contexto.raw_noticias = response.data;
            contexto.noticias = contexto.raw_noticias.articles;

            /*
            var numbers = [1, 5, 10, 15];
            contexto.noticias = contexto.noticias.map(function(x.urlToImage) {
               return x.urlToImage;
            });
            */
            
            /*
           contexto.noticias = contexto.noticias.forEach(function(x) {
            //x.urlToImage = encodeURI(x.urlToImage);
            x.urlToImage = 'hola';
            
            });*/

            //console.log(contexto.noticias);


           //contexto.noticias = contexto.noticias.map(x => ({'urlToImage': encodeURI(x.urlToImage)+'hola' }));
           
           //contexto.noticias = contexto.noticias.map(x => ({'urlToImage': 'hola' }));

            //const ret = contexto.noticias.map( (u.urlToImage) , encodeURI(u.urlToImage));


            // doubles is now [2, 10, 20, 30]
            // numbers is still [1, 5, 10, 15]


            //this.raw_noticias = that.noticias;
        })
        .catch(function (error) {
            console.log(error);
        });
    }
});