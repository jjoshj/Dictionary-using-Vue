const app = new Vue({
    el: '#form',
    data: {
        title:"Dictionary",
            countries: [],
            country:{},
            show_country:false,
            value:'',
            email: '',
            
      email: '',
      
      submitted: {
        name: ''
      }
    },
    
    methods: {
      formSubmit: function(event) {
        this.submitted.name = this.name;
       
        
      
        console.log(this.submitted.name)
        event.target.reset();
      },
      fetchCountries: function(){
        let url='https://api.dictionaryapi.dev/api/v2/entries/en_US/hello';
        axios.get(url).then(res=>{
            this.countries=res.data
            console.log(this.countries)
        })
    },
    },
    mounted(){
        this.fetchCountries()
    }
  });