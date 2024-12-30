export type SongStatus = 'placeholder' | 'draft' | 'ready';

export type SongParsedContent = {
  _path?: string;
  description?: string;
  title?: string;
  artist?: string;
  status?: SongStatus;
  year?: string;

}

export type Song = {
  title: string;
  artist: string;
  id: string;
  status: SongStatus;
  year: string;
};
