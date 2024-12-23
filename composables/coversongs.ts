import { QueryBuilderWhere } from '@nuxt/content';
import { Coversong } from '~/models/coversong';

export async function useCoversongs() {
  const coversongs = useState<Coversong[]>('coversongs', () => ref([]));

  await callOnce(async () => {
    const { data } = await useAsyncData('coversongs-data', () => getCoversongs());
    coversongs.value = data.value ?? [];
  });

  return coversongs;
}

const getCoversongs = async (query: QueryBuilderWhere = {}): Promise<Coversong[]> => {
  const parsedContent = await queryContent('/coversongs')
    .where({
      _type: { $eq: 'markdown' },
      _id: { $not: 'content:coversongs:0__TEMPLATE.md' },
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
