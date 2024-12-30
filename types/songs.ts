export type Song = {
  title: string;
  artist: string;
  id: string;
  status: 'todo' | 'draft' | 'ready';
  year: string;
};
