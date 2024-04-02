export interface IStackOverFlow {
  comment_id?: number;
  post_id?: number;
  user_id: number;
  timeline_type: string;
  post_type?: PostType;
  creation_date: number;
  detail?: string;
  title?: string;
  badge_id?: number;
}

export enum PostType {
  Answer = 'answer',
  Question = 'question',
}
