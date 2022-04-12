export default class AppService {
    constructor(text) {
        this.text = text // this.text - приватная переменная
    }

    // метод log
    log() {
        console.log('[App service]:', this.text)
    } 
}
