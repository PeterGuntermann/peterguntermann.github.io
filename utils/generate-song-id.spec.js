import { generateSongId } from './generate-song-id';

const cases = [
  //
  { songTitle: 'sample', songId: 'sample-id' },
];

it.each(cases)('should transform %s into %s', ({ songTitle, songId }) => {
  console.log(songTitle);
  console.log(songId);
  expect(generateSongId(songTitle)).toEqual(songId);
});
