-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Profiles
create table profiles (
  id uuid references auth.users on delete cascade primary key,
  full_name text,
  avatar_url text,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Bills / Requests
create table requests (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references profiles(id) on delete cascade not null,
  title text not null,
  amount numeric(12,2) not null,
  category text not null check (category in ('utility', 'rent', 'school', 'medical', 'food', 'creator_levelup')),
  story text not null,
  photo_url text,
  status text default 'open' check (status in ('open', 'funded', 'completed', 'cancelled')),
  location text,
  is_creator_levelup boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Simple funding records
create table fundings (
  id uuid default uuid_generate_v4() primary key,
  request_id uuid references requests(id) on delete cascade not null,
  donor_id uuid references profiles(id),
  amount numeric(12,2) not null,
  proof_url text,
  note text,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Basic RLS (Row Level Security)
alter table requests enable row level security;
alter table fundings enable row level security;
alter table profiles enable row level security;

create policy "Public requests are viewable by everyone"
  on requests for select using (true);

create policy "Users can insert their own requests"
  on requests for insert with check (auth.uid() = user_id);

create policy "Users can update their own requests"
  on requests for update using (auth.uid() = user_id);
