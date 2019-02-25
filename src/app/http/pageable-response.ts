import { Page } from './page';

export class PageableResponse<T> {
    constructor(
        public data: T[],
        public links: Map<string, string>,
        public page: Page
    ) { }
}
