export class Tasklist {
  constructor(
    public title: string,
    public due_date: Date,
    public priority: string,
    public status: string,
    public actions: string
  ) {}
}
