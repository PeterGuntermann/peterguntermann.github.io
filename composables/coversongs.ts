import { QueryBuilderWhere } from '@nuxt/content';
import { Coversong } from '~/models/coversong';

export function useCoversongsSearchterm() {
  const searchterm = useState<string>('coversongs-searchterm', () => ref(''));
  return { searchterm };
}

export async function useCoversongs() {
  const coversongs = useState<Coversong[]>('coversongs', () => ref([]));

  await callOnce(async () => {
    const { data } = await useAsyncData('coversongs-data', () => getCoversongs());
    coversongs.value = data.value ?? [];
  });

  const numSongs = coversongs.value.length;
  const numSheetsReady = coversongs.value.filter(
    (song) => song.status === 'ready'
  ).length;
  const numSheetsDraft = coversongs.value.filter(
    (song) => song.status === 'draft'
  ).length;

  return { coversongs, numSongs, numSheetsReady, numSheetsDraft };
}

const getCoversongs = async (query: QueryBuilderWhere = {}): Promise<Coversong[]> => {
  const parsedContent = await queryContent('/coversongs')
    .where({
      _type: { $eq: 'markdown' },
      _id: { $not: 'content:coversongs:0__TEMPLATE.md' },
      ...query,
    })
    .find();

  return parsedContent.map(({ _path, artist, status, title, year }) => ({
    title: `${title ?? ''}`,
    artist: `${artist ?? ''}`,
    status: status === 'ready' ? 'ready' : 'draft',
    year: `${year ?? ''}`,
    id: _path?.split('/coversongs/')[1] ?? '',
  }));
};
