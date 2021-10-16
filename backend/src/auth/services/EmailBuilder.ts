import { Email } from "../entity/Email"

export class EmailBuilder {
    private _from: string
    private _to: string
    private _subject: string
    private _text: string
    private _html: string

    from(value: string): EmailBuilder {
        this._from = value
        return this
    }

    get From(): string {
        return this._from
    }

    to(value: string): EmailBuilder {
        this._to = value
        return this
    }

    get To(): string {
        return this._to
    }

    subject(value: string): EmailBuilder {
        this._subject = value
        return this
    }

    get Subject(): string {
        return this._subject
    }

    text(value: string): EmailBuilder {
        this._text = value
        return this
    }

    get Text(): string {
        return this._text
    }

    html(value: string): EmailBuilder {
        this._html = value
        return this
    }

    get Html(): string {
        return this._html
    }

    build(): Email {
        return new Email(this)
    }
}