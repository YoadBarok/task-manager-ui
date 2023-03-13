import { User } from "@/types/User";
import axios from "axios";

const URL = process.env.VUE_APP_API_URL + "/api/users";

export class UserService {
  async getAllUsers(): Promise<User[]> {
    const users = await axios.get(URL);
    return users.data.result;
  }
}
