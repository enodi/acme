export interface userDataFormat {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  isFavorite: boolean;
  isSelected?: boolean;
  messages: string[]
}
