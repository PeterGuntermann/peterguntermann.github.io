import { QueryBuilderWhere } from '@nuxt/content';
import { Coversong } from '~/models/coversong';

export const getCoversongs = async (
  query: QueryBuilderWhere = {}
): Promise<Coversong[]> => {
  const parsedContent = await queryContent('/coversongs')
    .where({
      _type: { $eq: 'markdown' },
      ...query,
    })
    .find();
  console.log('parsed', parsedContent);

  let songs: Coversong[] = parsedContent.map((song) => ({
    title: `${song.title ?? ''}`,
    artist: `${song.artist ?? ''}`,
    status: song?.status === 'ready' ? 'ready' : 'draft',
    id: song._path?.split('/coversongs/')[1] ?? '',
  }));
  console.log('mapped', songs);
  return songs;
};

/**
 * @deprecated
 */
export const getCoversongsByCsv = async (): Promise<Coversong[]> => {
  // const s = await queryContent('/coversongs');

  const songsCsv = await queryContent('/coversongs/coversongs').findOne();
  return songsCsv.body as unknown as Coversong[];
};
