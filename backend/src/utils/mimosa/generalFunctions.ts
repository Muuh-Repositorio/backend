import { getManager } from "typeorm"

export class Functions{
    dates(){
        const today = new Date(Date.now())
        const todayMilli = Date.parse(today.toString())
        const todayBRString = new Date(Date.now()).toLocaleDateString()
        const threeDaysAfterTodayMilli = 259200000 
        const threeDaysAfterBRString = new Date(todayMilli + threeDaysAfterTodayMilli).toLocaleDateString()

        return { todayBRString, threeDaysAfterBRString }
    }

    async querys(resultWhere: any, type: string){
        const manager = getManager()

        switch (type) {
            case 'insemination':
                const responseInsemination = await manager.query(`select u.name as farmer, u.phone, f.name as farmname, count(c.idt_cow) as counter from insemination`
                    + ` inner join cow c on insemination.idt_cow = c.idt_cow`
                    + ` inner join farm f on c.idt_farm = f.idt_farm`
                    + ` inner join users u on f.idt_user = u.idt_user`
                    + ` where insemination_date = '${resultWhere}'`
                    + ` group by u.name, u.phone, f.name`)
                
                return responseInsemination
        
            case 'childbirth':
                const responseChildbirth = await manager.query(`select u.name as farmer, u.phone, f.name as farmname, count(c.idt_cow) as counter from childbirth`
                    + ` inner join cow c on childbirth.idt_cow = c.idt_cow`
                    + ` inner join farm f on c.idt_farm = f.idt_farm`
                    + ` inner join users u on f.idt_user = u.idt_user`
                    + ` where childbirth_date = '${resultWhere}'`
                    + ` group by u.name, u.phone, f.name`)

                    return responseChildbirth
        }
    }

    async sendText(client: any, responseArray: any[], middleMessage: string, finalMessage: string){
        for(let i = 0; i < responseArray.length; i++){
            await client.sendText(`55${responseArray[i].phone}@c.us`, 
                `Olá, *${responseArray[i].farmer} 👋*. 
                \n*${responseArray[i].counter}* ${middleMessage} na sua fazenda *"${responseArray[i].farmname}"*.
                \n${finalMessage}`
            )
        }
    }
}