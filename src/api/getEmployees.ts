import api from "./Api";
import { z } from "zod";

const getEmployeesContentSchema = z.object({
  name: z.string(),
  email: z.string(),
  phoneNumber: z.nullable(z.string()),
  office: z.nullable(z.string()),
  manager: z.nullable(z.string()),
  orgUnit: z.nullable(z.string()),
  mainText: z.nullable(z.string()),
  gitHub: z.nullable(z.string()),
  twitter: z.nullable(z.string()),
  stackOverflow: z.nullable(z.string()),
  linkedIn: z.nullable(z.string()),
  imagePortraitUrl: z.nullable(z.string()),
  imageWallOfLeetUrl: z.nullable(z.string()),
  highlighted: z.boolean(),
  published: z.boolean(),
  primaryRole: z.nullable(z.string()),
  secondaryRole: z.nullable(z.string()),
  area: z.nullable(z.string()),
});

const getEmployeesSchema = z.array(getEmployeesContentSchema);

export type Employee = z.infer<typeof getEmployeesContentSchema>;

const getEmployees = async () => {
  const response = await api.get("employees");

  const result = getEmployeesSchema.safeParse(response.data);
  if (result.success) {
    return result.data;
  } else {
    console.log(result.error.issues);
    throw result.error;
  }
};

export default getEmployees;
