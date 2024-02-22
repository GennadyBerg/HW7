import Joi from 'joi';

const signupSchema = Joi.object({
      username: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });
    
    // 
    const signinSchema = Joi.object({
      username: Joi.string().required(),
      password: Joi.string().required(),
    });
    
///////
// Схема для об'єкта
const validateCreationSchema = Joi.object({
      requests: Joi.array().items(
        Joi.object({
          line: Joi.number().required(),
          valve: Joi.number(),
          valves: Joi.array().when('valve', { is: Joi.exist(), then: Joi.required() }),
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
    
export{  signupSchema, signinSchema, validateCreationSchema }    