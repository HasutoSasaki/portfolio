import type { MicroCMSImage, MicroCMSListContent } from 'microcms-js-sdk';
import type { Category } from './category';

export type Blog = {
    title?: string;
    content?: string;
    eyecatch?: MicroCMSImage;
    category: (MicroCMSListContent & Category) | null
}
export type MDBlog = {
    title?: string;
    blogData: Record<string, any>;
}