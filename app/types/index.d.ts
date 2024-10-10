export interface Blog {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  eyecatch: Eyecatch;
}

export interface Eyecatch {
  url: string;
  height: number;
  width: number;
}
