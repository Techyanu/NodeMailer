var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    source: false,
    requireTLS: true,
    auth: {
        user: 'Enter Your Mail',
        pass: 'Enter Mail Password'
    }
});

var mailOptions = {
    from: 'yourmail@gmail.com',
    to: 'testMail@gmail.com',
    subject: 'Sending Email using Node.js',
    text: `Hi Smartherd, thank you for your nice Node.js tutorials.
          I will donate 50$ for this course. Please send me payment options.`,
    html: `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <meta name="x-apple-disable-message-reformatting">
        <title>Tahnk You For  Connecting </title>
        <style>
            table,
            td,
            div,
            h1,
            p {
                font-family: Arial, sans-serif;
            }
    
            .button {
                font-size: 30px;
                background-color: #1ffc33;
                border-radius: 10px;
                margin-left: 150PX;
                border-width: 0;
                padding: 10px;
            }
        </style>
    </head>
    
    <body style="margin:0;padding:0;">
        <table role="presentation"
            style="width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;">
            <tr>
                <td align="center" style="padding:0;">
                    <table role="presentation"
                        style="width:602px; height:802px;border-spacing:0;text-align:left;background-color: #f5f5f5;">
                        <td style="padding:0;">
                            <table role="presentation"
                                style="width:100%; height:10px;border-collapse:collapse; background-color: black;">
                                <tr>
                                    <td style="width:150px;padding:0;vertical-align:top;color:#153643;">
                                        
                                        <img src="https://assets.codepen.io/210284/left.gif" alt="" width="100"
                                            style="height:auto;display:block;" />
                                       
                                    </td>
                                    <td style="width:20px;padding:0;font-size:0;line-height:0;">&nbsp;</td>
                                    <td style="width:260px;padding:0;vertical-align:top;color:#f0f8fc;">
                                        <p
                                            style="font-size:25px;line-height:15px;font-family:Arial,sans-serif; color: white; text-align: left;">
                                            WELCOME
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <tr>
                            <td align="center" style="padding:40px 0 30px 0;background:#f5f5f5;">
                                <img src="https://assets.codepen.io/210284/h1.png" alt="" width="300"
                                    style="height:auto;display:block;" />
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:36px 30px 42px 30px;">
                                <table role="presentation"
                                    style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                                    <tr>
                                        <td style="padding:0 0 15px 0;color:#153643;">
                                            <h1 style="text-align: center;"> Hi, there</h1>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding:0;">
                                            <table role="presentation"
                                                style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                                                <tr>
                                                    <td style="width:260px;padding:0;vertical-align:top;color:#153643;">
                                                        <p
                                                            style="margin:0 0 50px 0;font-size:16px;font-weight:bold;line-height:24px; font-family: Arial, Helvetica, sans-serif; text-align: center;">
                                                            Thanks for registering With Us, we hope our digital catalog will
                                                            make your business easy & help to incresase your sales.
                                                        </p>
                                                        <button class="button">Explore</button>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
    
    </html> `
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});