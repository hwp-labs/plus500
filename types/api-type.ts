type BaseApiResponse = {
  status: number;
  success: boolean;
};

type ApiResponse<T> = ({ data: T } | { message: string }) & BaseApiResponse;

export type ApiResponseAsync<T> = Promise<ApiResponse<T>>;

export type ApiPaginatedResponseAsync<T> = Promise<ApiResponse<{
    items: T;
    pagination: {
      current_page: number; // 1;
      per_page: number; // 15;
      total: number; // 100;
      last_page: number; // 7;
      from: number; // 1;
      to: number; // 15;
    };
  }>>;

export interface BaseEntity {
  id: string; // uuid
  created_at: string;
  updated_at: string;
  deleted_at?: string | null;
}