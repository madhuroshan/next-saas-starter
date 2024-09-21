type CreateUserParams = {
  clerkId: string;
  name: string;
  email: string;
  username: string;
};

type UpdateUserParams = {
  clerkId: string;
  name?: string;
  email?: string;
  username?: string;
};
