export type Category = 
  | 'utility' 
  | 'rent' 
  | 'school' 
  | 'medical' 
  | 'food' 
  | 'creator_levelup';

export type RequestStatus = 'open' | 'funded' | 'completed' | 'cancelled';

export interface Request {
  id: string;
  user_id: string;
  title: string;
  amount: number;
  category: Category;
  story: string;
  photo_url: string | null;
  status: RequestStatus;
  location: string | null;
  is_creator_levelup: boolean;
  created_at: string;
}

export interface Funding {
  id: string;
  request_id: string;
  donor_id: string | null;
  amount: number;
  proof_url: string | null;
  note: string | null;
  created_at: string;
}
