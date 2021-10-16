import { EmailInfo } from "../interfaces/EmailConfiguration"
import { EmailBuilder } from "../services/EmailBuilder"

export class Email {
    private from!: string
    private to!: string
    private subject!: string
    private text!: string
    private html: string

    constructor(emailBuilder: EmailBuilder) {
        this.from = emailBuilder.From
        this.to = emailBuilder.To
        this.subject = emailBuilder.Subject
        this.text = emailBuilder.Text
        this.html = emailBuilder.Html
    }

    values(): EmailInfo {
        return {
            from: this.from,
            to: this.to,
            subject: this.subject,
            text: this.text,
            html: this.html
        }
    }
}