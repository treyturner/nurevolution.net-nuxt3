import { Podcast as PodcastRss } from 'podcast';
import { formatReadableTimeAsSeconds } from '../../../utils/format';
import { serverQueryContent } from '#content/server';
import type { Podcast } from '~/types';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const domain = config.public.domainName;

  const docs = await serverQueryContent<Podcast>(event)
    .sort({ releaseDate: -1 })
    .where({ _partial: false })
    .find();
  const podcasts: Podcast[] = docs.filter(
    (doc) => doc?._path?.startsWith('/podcasts/')
  );

  const feed = new PodcastRss({
    title: 'nurevolution studios',
    description: 'podcast feed',
    generator: 'nuxt.js',
    feedUrl: `https://${domain}/podcast.xml`,
    siteUrl: `https://${domain}`,
    imageUrl: `https://${domain}/img/logos/podcast_cover-512x512.jpg`,
    author: 'nurevolution studios',
    managingEditor: 'Trey Turner',
    webMaster: 'Trey Turner',
    copyright: `${new Date().getFullYear()} nurevolution studios`,
    categories: ['Music'],
    pubDate: `2023-09-17T12:00:00+00:00`,
    ttl: 1440,
  });

  for (const podcast of podcasts) {
    feed.addItem({
      title: `${podcast.mixedBy} - ${podcast.title}`,
      description: podcast.description,
      url: `https://${domain}/podcast/${podcast.slug}`,
      guid: podcast.slug,
      author: podcast.mixedBy,
      date: new Date(podcast.releaseDate),
      enclosure: {
        url: `https://podcast.${domain}/${podcast.filename}`,
        size: podcast.filesize,
      },
      itunesDuration: formatReadableTimeAsSeconds(podcast.duration),
      itunesImage: podcast.coverArt.full,
    });
  }

  event.node.res.setHeader('content-type', 'text/xml');
  event.node.res.end(feed.buildXml());
});
