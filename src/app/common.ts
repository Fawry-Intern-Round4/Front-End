import { HttpHeaders } from "@angular/common/http";

export const HttpAuthAndContentTypeHeaders = (): HttpHeaders => {
  return new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  });
};