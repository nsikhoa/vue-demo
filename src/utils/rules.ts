import { toTypedSchema } from "@vee-validate/yup";
import * as yup from 'yup';

export const blogSchema = toTypedSchema(
    yup.object({
      title: yup.string().required().defined(),
      description: yup.string().required().defined(),
      content: yup.string().required().defined(),
      image: yup.string().required(),
    }),
);