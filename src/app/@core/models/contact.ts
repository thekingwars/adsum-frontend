import { Category } from '../shared/enums/category';

export interface Contact {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  category: Category;
  message: string;
}
