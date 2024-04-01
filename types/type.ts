export interface GithubFeed {
  id: string;
  type: Type;
  actor: Actor;
  repo: Repo;
  payload: Payload;
  public: boolean;
  created_at: Date;
  org?: Actor;
}

export interface Actor {
  id: number;
  login: DisplayLogin;
  display_login?: DisplayLogin;
  gravatar_id: string;
  url: string;
  avatar_url: string;
}

export enum DisplayLogin {
  Aforamitdev = 'aforamitdev',
  Devmentors = 'devmentors',
  Expressjs = 'expressjs',
  Inversify = 'inversify',
  PracticalTutorials = 'practical-tutorials',
}

export interface Payload {
  repository_id?: number;
  push_id?: number;
  size?: number;
  distinct_size?: number;
  ref?: null | string;
  head?: string;
  before?: string;
  commits?: Commit[];
  ref_type?: RefType;
  master_branch?: MasterBranch;
  description?: null | string;
  pusher_type?: PusherType;
  action?: string;
  issue?: Issue;
  comment?: Comment;
}

export interface Comment {
  url: string;
  html_url: string;
  issue_url: string;
  id: number;
  node_id: string;
  user: User;
  created_at: Date;
  updated_at: Date;
  author_association: string;
  body: string;
  reactions: Reactions;
  performed_via_github_app: null;
}

export interface Reactions {
  url: string;
  total_count: number;
  '+1': number;
  '-1': number;
  laugh: number;
  hooray: number;
  confused: number;
  heart: number;
  rocket: number;
  eyes: number;
}

export interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export interface Commit {
  sha: string;
  author: Author;
  message: string;
  distinct: boolean;
  url: string;
}

export interface Author {
  email: Email;
  name: DisplayLogin;
}

export enum Email {
  AforamitraiGmailCOM = 'aforamitrai@gmail.com',
}

export interface Issue {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: User;
  labels: any[];
  state: string;
  locked: boolean;
  assignee: null;
  assignees: any[];
  milestone: null;
  comments: number;
  created_at: Date;
  updated_at: Date;
  closed_at: Date;
  author_association: string;
  active_lock_reason: null;
  draft: boolean;
  pull_request: PullRequest;
  body: null;
  reactions: Reactions;
  timeline_url: string;
  performed_via_github_app: null;
  state_reason: null;
}

export interface PullRequest {
  url: string;
  html_url: string;
  diff_url: string;
  patch_url: string;
  merged_at: null;
}

export enum MasterBranch {
  Main = 'main',
  Master = 'master',
}

export enum PusherType {
  User = 'user',
}

export enum RefType {
  Branch = 'branch',
  Repository = 'repository',
}

export interface Repo {
  id: number;
  name: string;
  url: string;
}

export enum Type {
  CreateEvent = 'CreateEvent',
  IssueCommentEvent = 'IssueCommentEvent',
  PushEvent = 'PushEvent',
  WatchEvent = 'WatchEvent',
}
