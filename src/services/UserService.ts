import { User } from "@/types/User";

export class UserService {

    getAllUsers(): User[] {
        return [
            {
                id: "1",
                name: "Yoad"
            },
            {
                id: "2",
                name: "Ruth"
            },
            {
                id: "3",
                name: "Eden"
            }
        ]
    }
}