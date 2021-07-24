import { Organization } from "./Organisation";
import { User } from "./User";

export interface Article {
  type_of: string;
  id: number;
  title: string;
  description: string;
  cover_image: string;
  readable_publish_date: string;
  social_image: string;
  tag_list: string[];
  tags: string;
  slug: string;
  path: string;
  url: string;
  canonical_url: string;
  comments_count: number;
  positive_reactions_count: number;
  public_reactions_count: number;
  collection_id: null;
  created_at: Date;
  edited_at: Date;
  crossposted_at: null;
  published_at: Date;
  last_comment_at: Date;
  published_timestamp: Date;
  reading_time_minutes: number;
  user: User;
  organization: Organization;
}
