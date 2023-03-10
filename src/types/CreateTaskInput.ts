import { User } from "./User";

interface CreateTaskInput {
    name: string;
    owner: User;
}

export default CreateTaskInput