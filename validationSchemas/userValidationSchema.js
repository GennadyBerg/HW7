import Joi from 'joi';

const signupSchema = Joi.object({
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
  email: Joi
    .required(),
  password: Joi
    .string()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    .required(),

});

// 
const signinSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});


const validateCreationSchema = Joi.object({
  requests: Joi.array().items(
    Joi.object({
      line: Joi.number().required(),
      valve: Joi.number(),
      valves: Joi.array(),
      valvesOrValve: Joi.alternatives().try(
        Joi.object({
          valves: Joi.array().required(),
          valve: Joi.forbidden()
        }),
        Joi.object({
          valve: Joi.number().required(),
          valves: Joi.forbidden()
        })
      ),
      start: Joi.number().min(0).max(1440).required(),
      end: Joi.number().min(0).max(1440).required(),
      type: Joi.string().valid('MM', 'Volume', 'Time').required(),
      amount: Joi.number().positive().required(),
      fertigation: Joi.boolean().required(),
      start_date: Joi.date().iso().required(),
      machine: Joi.number(),
      cycles: Joi.number(),
      interval: Joi.number(),
      field: Joi.any(),
      fert_recipe: Joi.number(),
    })
  ),
});

export { signupSchema, signinSchema, validateCreationSchema }    