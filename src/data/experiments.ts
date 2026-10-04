export interface Experiment {
  id: string;
  name: string;
  description: string;
  status: 'BUILT' | 'EXPERIMENTED' | 'RESEARCHED' | 'ABANDONED' | 'LEARNING';
  detail?: string;
}

export const experiments: Experiment[] = [
  {
    id: 'rabbitmq',
    name: 'RabbitMQ',
    description: 'Why did I use it?',
    status: 'BUILT',
    detail: 'Built an async printer pipeline at Lennox. AMQP made sense — decoupled the sender from the printer service entirely.',
  },
  {
    id: 'yolov8',
    name: 'YOLOv8',
    description: 'Road damage detection experiment',
    status: 'EXPERIMENTED',
    detail: 'Ran YOLOv8 on road damage image datasets. Curious whether off-the-shelf object detection transfers well to infrastructure monitoring.',
  },
  {
    id: 'gemma2b',
    name: 'Gemma 2B',
    description: 'Tried running an LLM locally on Android',
    status: 'EXPERIMENTED',
    detail: 'Wanted to see how far edge inference could go. Ran a quantized Gemma 2B model on device. Slow, but it worked.',
  },

  {
    id: 'distritube-exp',
    name: 'DistriTube',
    description: 'What happens if I build YouTube myself?',
    status: 'BUILT',
    detail: 'Currently building. NestJS backend, MinIO object storage, React frontend. Understanding video platforms from the inside out.',
  },
  {
    id: 'bow-cosine',
    name: 'Bag-of-Words + Cosine Similarity',
    description: 'Does simple NLP actually work?',
    status: 'EXPERIMENTED',
    detail: 'Used for GuideSphere recommendations. Turns out it works surprisingly well for narrow domains.',
  },
];
