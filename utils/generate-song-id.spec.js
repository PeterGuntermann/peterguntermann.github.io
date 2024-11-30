import { generateSongId } from './generate-song-id';

it('should return stub implementation', () => {
  const result = generateSongId('');
  expect(result).toEqual('sample-id');
});
