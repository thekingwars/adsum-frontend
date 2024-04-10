import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const catchErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const showDialog = (message: string) => {
    alert(message);
  };

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      const status = error.status;
      const errorMessage = error.error.error;

      switch (status) {
        case 0:
          showDialog('Error al conectar con el servidor');
          break;
        case 206:
          showDialog(`Error N°: ${status}, ${errorMessage}`);
          break;
        case 400:
          showDialog(`Error N°: ${status}, ${errorMessage}`);
          break;
        case 401:
          showDialog(`Error N°: ${status}, ${errorMessage}`);
          break;
        case 403:
          showDialog(`Error N°: ${status}, ${errorMessage}`);
          break;
        case 404:
          showDialog(`Error N°: ${status}, ${errorMessage}`);
          break;
        case 500:
          showDialog(`Error N°: ${status}, ${errorMessage}`);
          break;
      }

      return throwError(() => error);
    })
  );
};
