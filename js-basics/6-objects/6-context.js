var person = {
    age: 28,
    name: 'Max',
    job: 'Frontend',
    displayInfo: function(ms) {
        var self = this

        setTimeout(function() {
            // debugger // - для остановки в консоли
            //this = window
            console.log('Name:', this.name) //Name: undefined
            console.log('Job:', this.job) //Job: undefined
            console.log('Age:', this.age) //Age: undefined

            console.log('Name:', self.name) //Name: Max
            console.log('Job:', self.job) //Job: Frontend
            console.log('Age:', self.age) //Age: 28
        }, ms)

        //привяжем контекст
        setTimeout(function() {
            console.log('Name:', this.name) //Name: Max
            console.log('Job:', this.job) //Job: Frontend
            console.log('Age:', this.age) //Age: 28
        }.bind(person), ms)
    }
}

person.displayInfo(500)