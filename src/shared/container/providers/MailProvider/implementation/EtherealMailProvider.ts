import nodemailer, { Transporter } from "nodemailer"
import { injectable } from "tsyringe";
import handlebars from "handlebars";
import fs from "fs"

import { IMailProvider } from "../IMailProvider";

@injectable()
class EtherealMailProvider implements IMailProvider {
    private client: Transporter

    constructor() {
        nodemailer
            .createTestAccount()
            .then((account) => {
                const transporter = nodemailer.createTransport({
                    host: account.smtp.host,
                    port: account.smtp.port,
                    secure: account.smtp.secure,
                    auth: {
                        user: account.user,
                        pass: account.pass,
                    },
                })

                this.client = transporter
            })
            .catch((err) => console.error(err))
    }

    async sendMail(
        to: string,
        subject: string,
        variable: any,
        path: string
    ): Promise<void> {
        const tenplateFileContent = fs.readFileSync(path).toString("utf-8")

        const templateParse = handlebars.compile(tenplateFileContent)

        const templateHTML = templateParse(variable)

        const message = await this.client.sendMail({
            to,
            from: "Rentx <noreplay@rentex.com.br>",
            subject,
            html: templateHTML
        })
        console.log('Message sent: %s:', message.messageId)
        console.log('Preview URL: %s:', nodemailer.getTestMessageUrl(message))
    }
}

export { EtherealMailProvider }