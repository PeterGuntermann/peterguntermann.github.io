import { QueryBuilderWhere } from '@nuxt/content';
import { ACappellaSong, SongParsedContent, SongStatus } from '~/types/songs';
import { Ref } from 'vue';

export function useACappellaSearchterm() {
  const searchterm = useState<string>('a-cappella-searchterm', () => ref(''));
  return { searchterm };
}

export async function useACappella(): Promise<{
  songs: Ref<ACappellaSong[]>;
  numSongs: number;
}> {
  const songs = useState<ACappellaSong[]>('a-cappella', () => ref([]));

  await callOnce(async () => {
    const { data } = await useAsyncData('a-cappella-data', () => getSongs());
    songs.value = data.value ?? [];
  });

  const numSongs = songs.value.length;

  return { songs, numSongs };
}

const getSongs = async (query: QueryBuilderWhere = {}): Promise<ACappellaSong[]> => {
  const parsedContent = await queryContent('/songs/a-cappella')
    .where({
      _type: { $eq: 'markdown' },
      ...query,
    })
    .find();

  return parsedContent.map((content: SongParsedContent) => {
    let displayedStatus: SongStatus = 'ready';

    if (['...', ''].includes(content.description ?? '')) {
      displayedStatus = 'placeholder';
    }

    return {
      title: `${content.title ?? ''}`,
      from: `${content.from ?? ''}`,
      status: displayedStatus,
      id: content._path?.split('/songs/a-cappella/')[1] ?? '',
    };
  });
};
