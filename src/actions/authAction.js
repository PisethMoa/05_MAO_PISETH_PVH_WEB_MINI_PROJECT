import { registerService } from "@/service/auth.service";

export const registerAction = async (data) => {
  await registerService(data);
};
