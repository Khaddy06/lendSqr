export type User = {
    id?: string;
    username: string;
    email: string;
    organization: string;
    phoneNumber: string;
    status: string;
    createdAt: string;
};
  
export interface UserOverview {
    totalCount: number;
    activeCount: number;
    inactiveCount: number;
    usersWithLoansCount: number;
}

export type FormData = {
    username: string;
    email: string;
    organization: string;
    phoneNumber: string;
    status: string;
    password: string;
};