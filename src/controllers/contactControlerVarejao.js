const connection = require('../database/connectionVarejao');
const cellphoneRegExp = /\d{12,13}/;

/* 
Especificações do Cliente VareJão:
- Formato do Nome é livre
- O formato de telefone segue o padrão 554130306905
*/

function businessRule(contact) {
    let { cellphone } = contact;
    if (cellphoneRegExp.test(cellphone)) {
        return contact;
    }
}

const register = async (req, res) => {
    let contacts = req.body.contacts.filter(businessRule);
    let wrongContacts = req.body.contacts.filter(element => {
        if (contacts.indexOf(element) == -1)
            return element;
    }); 5541923038062
    const trx = await connection.transaction();
    if (contacts.length) {
        try {
            let contactsFoInsert = contacts.map(contact => {
                let { name: nome, cellphone: celular } = contact;
                return { nome, celular };
            });
            const insertedClassesIds = await trx('contacts').insert(contactsFoInsert);
            await trx.commit();
        } catch (error) {
            console.log(error)
            await trx.rollback();
            return res.status(500).json({
                error: "Unexpected erro contact support"
            })
        }
    } else {
        return res.status(400).json({ message: "The contacts don't follow the partner" });
    }
    return res.status(201).json({
        insertedContacts: contacts,
        wrongContacts
    })
}
module.exports = { register: register };