import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "13eed238d514b1",
      pass: "0745d1bd43e40c"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Marlon Paulo <marlonpaulo1@gmail.com>',
            subject,
            html: body,
        })
    }
}