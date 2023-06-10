const transporter = require('./nodeMailer');
const ejs = require('ejs');
const path = require('path');

const sendMail = async (email, doc, attachments) => {
    transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Welcome to ShoppingCart',
        text: 'Welcome to ShoppingCart',
        html: doc,
        attachments: attachments
    })
    .then(info => console.log(info))
    .catch(error =>console.log(error));
}  


const sendWelcomeMail = async ( email, data ) => {
    const pathFile = path.join(__dirname, '../views/welcome/welcome.ejs');
    const doc = await ejs.renderFile(pathFile, data); 
    const attachments = [
        {
            filename: 'bee.png',
            path: path.join(__dirname, '../views/welcome/images/bee.png'),
            cid: 'bee@shoppingcart.com'
        },
        {
            filename: 'illo_welcome_1.png',
            path: path.join(__dirname, '../views/welcome/images/illo_welcome_1.png'),
            cid: 'illo@shoppingcart.com'
        },
        {
            filename: 'twitter2x.png',
            path: path.join(__dirname, '../views/welcome/images/twitter2x.png'),
            cid: 'twitter@shoppingcart.com'
        },
        {
            filename: 'instagram2x.png',
            path: path.join(__dirname, '../views/welcome/images/instagram2x.png'),
            cid: 'instagram@shoppingcart.com'
        },
        {
            filename: 'facebook2x.png',
            path: path.join(__dirname, '../views/welcome/images/facebook2x.png'),
            cid: 'facebook@shoppingcart.com'
        },
        {
            filename: 'pinterest2x.png',
            path: path.join(__dirname, '../views/welcome/images/pinterest2x.png'),
            cid: 'pinterest@shoppingcart.com'
        },
    ]
    sendMail(email, doc, attachments);
}

module.exports = {
    sendWelcomeMail
};

