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

  return parsedContent.map(({ _path, artist, status, title }) => ({
    title: `${title ?? ''}`,
    artist: `${artist ?? ''}`,
    status: status === 'ready' ? 'ready' : 'draft',
    id: _path?.split('/coversongs/')[1] ?? '',
  }));
};

/**
 * @deprecated
 */
export const getCoversongsByCsv = async (): Promise<Coversong[]> => {
  // const s = await queryContent('/coversongs');

  const songsCsv = await queryContent('/coversongs/coversongs').findOne();
  return songsCsv.body as unknown as Coversong[];
};
