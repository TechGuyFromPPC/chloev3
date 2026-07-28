export type LocationStatus = 'current' | 'past' | 'upcoming';

export interface Location {
  id: string;
  title: string;
  country: string;
  latitude: number;
  longitude: number;
  status: LocationStatus;
  start_date?: string;
  end_date?: string;
  description?: string;
  featured_image?: string;
  created_at: string;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  location_id?: string;
  category?: string;
  thumbnail_url?: string;
  external_url?: string;
  published_at: string;
}