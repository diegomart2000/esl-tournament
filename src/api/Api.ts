import { BACKEND_URL } from '../config';

export function api<T>(url: string): Promise<T> {
  const headers: Headers = new Headers();
  headers.set('X-Requested-With', 'fetch');

  return fetch(`${BACKEND_URL}/${url}`, { mode: 'cors', headers })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json() as Promise<T>
    });
}
