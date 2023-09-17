import type { ParsedContent } from '@nuxt/content/dist/runtime/types';

export interface Podcast extends ParsedContent {
  slug: string;
  title: string;
  mixedBy: string;
  djs: string[];
  releaseDate: string;
  description: string;
  duration: string;
  filename: string;
  filesize: number;
  mixcloudSlug: string;
  spotifyPlaylist?: string;
  coverArt: {
    full: string;
  };
  tracklist?: {
    artist: string;
    title: string;
    startTime?: string;
  }[];
}
