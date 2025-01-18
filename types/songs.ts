export type SongStatus = 'placeholder' | 'draft' | 'ready';

export type SongParsedContent = {
  _path?: string;
  description?: string;
  title?: string;
  artist?: string;
  status?: SongStatus;
  year?: string;
  from?: string;
};

export type Coversong = {
  title: string;
  artist: string;
  id: string;
  status: SongStatus;
  year: string;
};

export type ACappellaSong = {
  title: string;
  from: string;
  status: SongStatus;
  id: string;
};
