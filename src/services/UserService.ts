import { User } from "@/types/User";
import axios from "axios";

const URL = process.env.VUE_APP_API_URL;

export class UserService {
  async getAllUsers(): Promise<User[]> {
    const users = await axios.get(URL + "/api/users");
    return users.data.result;
  }
}
