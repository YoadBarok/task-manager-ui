import { JobState } from "./JobState";
import { User } from "./User";

export interface Task {
    id: number,
    name: string,
    owner_id: number,
    owner: User,
    job_id?: string,
    job_state: JobState,
    created_at: string
}