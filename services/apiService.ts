import { ILoginFormData } from "@/components/organisms/LoginForm/LoginForm.types";
import { IUser } from "@/types/User";

export const loginQuery = async (data: ILoginFormData): Promise<IUser> => {
  const request = await fetch("https://randomuser.me/api/?results=1&nat=us");
  console.log("Login requested for:", data);
  const parsedResponse = (await request.json()) as {
    results: {
      name: { title: string; first: string; last: string };
      picture: { medium: string };
      email: string;
      phone: string;
      gender: string;
    }[];
  };

  const user = parsedResponse.results[0];
  return {
    name: `${user.name.first} ${user.name.last}`,
    avatar: user.picture.medium,
    email: user.email,
    phone: user.phone,
    gender: user.gender,
  };
};
