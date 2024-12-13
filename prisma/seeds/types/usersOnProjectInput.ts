export interface IUsersOnProjectInput {
  user_id: string;
  project_id: string;
  permission_id: string;
  original_owner?: string;
}
