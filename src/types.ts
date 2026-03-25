export interface Story {
  id: string;
  title: string;
  hook: string;
  paragraphs: string[];
  closing: string;
  source?: string;
  category: 'Transportes' | 'Materiais';
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}
