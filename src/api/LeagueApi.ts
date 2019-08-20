import { api } from './Api';
import { League } from '../types';

export const fetchById = (id: number): Promise<League> => api<League>(`leagues/${id}`);

export const fetchResultsById = (id: number): Promise<League> => api<League>(`leagues/${id}/results`);

export const fetchContestantsById = (id: number): Promise<League> => api<League>(`leagues/${id}/contestants`);
