// Descrizione:
// Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.



const {createApp} = Vue;

createApp({
    data() {
        return {   
            //creo l'array delle mail      
           lista: [],

        }
    },

    methods: {

    },

    mounted() {
        console.log("l'applicazione e caricata");

        //creo un ciclo che mi generi 10 mail da axios
        for(let i=0; i < 10; i++) {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((risposta) => {
            console.log(risposta.data.response);
            this.lista.push(risposta.data.response);

        });
        };
        console.log(this.lista);
    }
    
}).mount('#app')