import * as venom from 'venom-bot'
import { Notification } from './Notification.service'

export class Chatbot{

    constructor(
        private notification: Notification
    ){}

    async execute(){
        return await venom
            .create('muuuhChatbot')
            .then((client) => this.notification.main(client))
            .catch((erro) => {
                console.log(erro)
            })
    }

}


