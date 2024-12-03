export function generateSongId(songTitle: string) {
  return songTitle
    .toLowerCase()
    .replaceAll(' ', '_')
    .replaceAll(/[!?'"(),.]/g, '')
    .replaceAll('ä', 'ae')
    .replaceAll('ö', 'oe')
    .replaceAll('ü', 'ue');
}
