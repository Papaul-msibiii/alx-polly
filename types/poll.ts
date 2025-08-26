export type PollOption = {
  id: string;
  text: string;
  votes: number;
};

export type Poll = {
  id: string;
  ownerId: string;
  question: string;
  options: PollOption[];
  createdAt: string;
  updatedAt: string;
}; 