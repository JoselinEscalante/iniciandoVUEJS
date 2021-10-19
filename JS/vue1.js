new Vue({
    el:'#seccion',
    data:{
        resp:'',
        time:'',
        motivate:'',
        experience:'',
        language:'',
        form2: true
    },
    methods:{
        iniciar(){
            if(this.resp=="Si")
                    this.form2=true;
            
            else
                this.form2=false;
        }  
    }
});