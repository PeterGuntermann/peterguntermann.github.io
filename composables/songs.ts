import { QueryBuilderWhere } from '@nuxt/content';
import { Song, SongParsedContent, SongStatus } from '~/types/songs';

export function useSongsSearchterm() {
  const searchterm = useState<string>('songs-searchterm', () => ref(''));
  return { searchterm };
}

export async function useCoversongs() {
  const coversongs = useState<Song[]>('coversongs', () => ref([]));

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

const getCoversongs = async (query: QueryBuilderWhere = {}): Promise<Song[]> => {
  const parsedContent = await queryContent('/songs/coversongs')
    .where({
      _type: { $eq: 'markdown' },
      ...query,
    })
    .find();

  return parsedContent.map((content: SongParsedContent) => {
    let displayedStatus: SongStatus = content.status ?? 'placeholder';

    if (['...', ''].includes(content.description ?? '')) {
      displayedStatus = 'placeholder';
    }

    return {
      title: `${content.title ?? ''}`,
      artist: `${content.artist ?? ''}`,
      status: displayedStatus,
      year: `${content.year ?? ''}`,
      id: content._path?.split('/songs/coversongs/')[1] ?? '',
    };
  });
};
