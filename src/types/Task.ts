import { JobState } from "./JobState";
import { User } from "./User";

export interface Task {
    name: string,
    owner: User,
    job_id?: string,
    job_state: JobState,
    created_at: string
}