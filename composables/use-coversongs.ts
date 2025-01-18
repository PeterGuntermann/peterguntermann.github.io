import { QueryBuilderWhere } from '@nuxt/content';
import { Coversong, SongParsedContent, SongStatus } from '~/types/songs';

export function useCoversongsSearchterm() {
  const searchterm = useState<string>('coversongs-searchterm', () => ref(''));
  return { searchterm };
}

export async function useCoversongs() {
  const songs = useState<Coversong[]>('coversongs', () => ref([]));

  await callOnce(async () => {
    const { data } = await useAsyncData('coversongs-data', () => getSongs());
    songs.value = data.value ?? [];
  });

  const numSongs = songs.value.length;
  const numSheetsReady = songs.value.filter((song) => song.status === 'ready').length;
  const numSheetsDraft = songs.value.filter((song) => song.status === 'draft').length;

  return { songs, numSongs, numSheetsReady, numSheetsDraft };
}

const getSongs = async (query: QueryBuilderWhere = {}): Promise<Coversong[]> => {
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
