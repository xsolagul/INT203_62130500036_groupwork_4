const app = {
        data() {
            return {
                bigImage:'',
                picClick: false,
                iclick: false,
                inputTask: '',
                notFound:false,
                tasks: [{
                        title: 'spiderman',
                        show: true,
                        img: './images/1.jpg',
                        like: 0
                    },
                    {
                        title: 'spiderman 2099',
                        show: true,
                        img: './images/2.jpg',
                        like: 0
                    },
                    {
                        title: 'scarlet spider',
                        show: true,
                        img: './images/3.jpg',
                        like: 0
                    }
                ]
            }
        },
        methods: {
            toggleDone(index) {
                // if(this.tasks[index].done == false){
                // this.tasks[index].done = !this.tasks[index].done;
                this.tasks[index].like = this.tasks[index].like + 1
                // }
                // else this.tasks[index].like = this.tasks[index].like + 1
            },
            // unlike(index){
            //     if(this.tasks[index].like == 1){
            //         this.tasks[index].done = false
            //         this.tasks[index].like = this.tasks[index].like-1 
            //     }
            //     else 
            //     this.tasks[index].like = this.tasks[index].like - 1
            // },
            iclicking() {
                this.iclick = !this.iclick
            },
            cancle() {
                this.iclick = !this.iclick
                this.inputTask = ''
            },
            pclicking(index) {
                this.bigImage = this.tasks[index].img
                this.picClick = true;
            },
            backClick(){
                this.picClick = false;
            }
            // bclick(index) {
            //         this.tasks[index].show = !this.tasks[index].show
            //         this.picClick = !this.picClick
            //     }
            },
            computed: {
                filteredList() {
                    this.notFound = false; 
                    searchPhoto =  this.tasks.filter(p => {
                        return p.title.toLowerCase().includes(this.inputTask.toLowerCase())
                    })
                    if (searchPhoto.length == 0 ){
                        this.notFound =true 
                    }
                    else return searchPhoto
                },
                //   bclick(){
                //     this.tasks[this.indexkeep].show = true
                // }
                //     countall(){
                //         return this.tasks.length
                //     }
            }
        }
        ff = Vue.createApp(app).mount('#app')