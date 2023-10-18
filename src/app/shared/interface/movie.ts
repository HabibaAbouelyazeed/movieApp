export interface Movie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection? : string;
  budget?: number;
  genres ?: Array<any>;
  genre_ids?: Array<number>;
  homepage?: string;
  id: number;
  imdb_id?: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies?: Array<any>;
  production_countries?: Array<any>;
  release_date: string;
  revenue?: number;
  runtime?: number;
  spoken_languages?: Array<object>;
  status?: string;
  tagline?: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  watchlist?: boolean;
}
