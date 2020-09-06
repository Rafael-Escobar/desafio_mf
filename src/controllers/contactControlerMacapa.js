const connection = require('../database/connectionMacapa');
const cellphoneRegExp = /\+\d{2}\s\(\d{2}\)\s\d{4,5}-?\d{4}/g;
const nameRegExp =/^[A-ZÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;

/*
Especificações do Cliente Macapá:
- Formato do Nome é somente maiúsculas
- O formato de telefone segue o padrão +55 (41) 93030-6905
*/

function businessRule(contact){
    let {name,cellphone}= contact;
    if (cellphoneRegExp.test(cellphone) && nameRegExp.test(name)){
        return contact;
    }
}

const register=async (req,res)=>{
    let contacts = req.body.contacts.filter(businessRule);
    let wrongContacts = req.body.contacts.filter(element =>{
        if (contacts.indexOf(element) == -1)
            return element;
    });
    const trx = await connection.transaction();
    if(contacts.length){
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
    }else{
        return res.status(400).json({message:"The contacts don't follow the partner"});
    }
    return res.status(201).json({
        insertedContacts:contacts,
        wrongContacts
    })
}
module.exports = { register: register };