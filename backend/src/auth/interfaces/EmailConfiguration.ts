export interface EmailConfiguration {
    service: string
    auth: {
        user: string,
        pass: string
    }
}

export interface EmailInfo {
    from: string,
    to: string,
    subject: string
    text: string
    html: string
}