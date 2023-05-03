const App = {
    data(){
        return {
            placeholderString: 'Input name of your note',
            title: 'List of notes',
            inputValue: '',
            notes: ['Note1', 'Note2', 'Note3']
        }
    },
    methods: {
        addHandler(){
            if(this.inputValue !== ''){
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        removeNote(index){
            this.notes.splice(index, 1)
        },
        toUpperCase(item){
            return item.toUpperCase()
        },
        doubleCount(){
            console.log('Double count')
            return this.notes.length * 2
        }
    },
    computed: {
        doubleCountComputed(){
            console.log('DoubleCountComputed')
            return this.notes.length * 2
        }
    },
    watch: {
        inputValue(value){
            if(value.length > 10){
                this.inputValue = ''
            }
            console.log('Input value change', value)
        }
    }
}

Vue.createApp(App).mount('#app')