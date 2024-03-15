import { IApplicationContext } from '../store/types';
import { makeGETRequest } from './service';

export const getCMSData = async (): Promise<IApplicationContext> => {
    return makeGETRequest('CMS');
}