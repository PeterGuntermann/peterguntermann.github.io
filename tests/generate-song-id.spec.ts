import { generateSongId } from '../utils/generate-song-id';

const cases = [
  { songTitle: 'Angels', songId: 'angels' },
  { songTitle: "It's my life", songId: 'its_my_life' },
  { songTitle: "Livin' la vida loca", songId: 'livin_la_vida_loca' },
  { songTitle: 'Man! I feel like a woman', songId: 'man_i_feel_like_a_woman' },
  {
    songTitle: "It's in his kiss (the Shoop Shoop song)",
    songId: 'its_in_his_kiss_the_shoop_shoop_song',
  },
  { songTitle: 'Major Tom (völlig losgelöst)', songId: 'major_tom_voellig_losgeloest' },
  { songTitle: 'Zu spät', songId: 'zu_spaet' },
];

it.each(cases)('should transform $songTitle into $songId', ({ songTitle, songId }) => {
  expect(generateSongId(songTitle)).toEqual(songId);
});
