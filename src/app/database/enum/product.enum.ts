import { AbstractControl } from "@angular/forms";

export interface Product {
  id_product: number;
  title: string;
  category: number;
  price: number;
  detail: string;
  active: boolean;
  created_datetime: string;
  updated_datetime: string;
  thumbnail:string;
}

export interface ProductDTO {
  title: AbstractControl<any, any>;
  category: AbstractControl<any, any>;
  price: AbstractControl<any, any>;
  detail: AbstractControl<any, any>;
  thumbnail: AbstractControl<any, any>;
  active: AbstractControl<any, any>;
}
export interface Category {
  id_category: number;
  category: string;
  active: boolean;
  created_datetime: string;
  updated_datetime: string;
}
