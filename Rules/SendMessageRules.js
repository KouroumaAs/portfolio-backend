const Joi = require("joi");
const { geterrors } = require("../helpers/helpers");

const emailPattern = /\S+@\S+\.\S+/;

const string = Joi.string().trim();

const SendEmailValidation = async ( req, res ) => {
    const data = req.body;
    const schema = Joi.object().keys({
        nom: string.min(2).required().messages({
         'string.min': "Le caractère minimum pour le prenom et nom est sont (2).",
         'string.empty': "Le prenom et nom sont obligatoire.",
         "any.required" : "Le prenom et nom sont obligatoire."
        }),
        email: string.required().pattern(new RegExp(emailPattern)).messages({
            "string.min": "Le caractère minimum pour le mail est trois (3).",
            "string.pattern.base": "Mauvais format d'email.ex:example@example.com",
            "any.required":"L'email est obligatoire",   
        }),
        message: string.required().min(10).messages({
          "any.required" : "Veuillez laisser un message.",
          "string.empty" : "Champ vide.Veuillez laisser un message.",
          "string.min" : "Veuillez saisir aumoins dix (10) caractères."
        })
   });
   const { error } = schema.validate(data,{abortEarly: false});
   return  geterrors(error?.details);
}
module.exports = { SendEmailValidation }