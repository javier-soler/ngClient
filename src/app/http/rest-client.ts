import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PageableResponse } from './pageable-response';
import { Page } from './page';
import { map } from 'rxjs/operators';

const BASE_PATH = 'http://localhost:9020';

export class RestClient<T> {

    private fullUri: string;

    constructor(private resourcePath: string, private http: HttpClient) {
        this.fullUri = BASE_PATH + resourcePath;
    }

    getList(path: string, pageNum = 0, size = 10): Observable<PageableResponse<T>> {
        const httpOptions = this.buildHttpOptions({
            params: {
                size: +size,
                page: String(pageNum)
            }
        });

        return this.http.get<any>(this.fullUri, httpOptions)
            .pipe(map(d => {
                const p = d.page;
                const page = new Page(p.number, p.size, p.totalElements, p.totalPages);
                return new PageableResponse<T>(d._embedded.accounts, d._links, page);
            }));
    }

    getSingleObject(id: number): Observable<T> {
        const httpOptions = this.buildHttpOptions();
        return this.http.get<T>(this.fullUri + '/' + id, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Authorization: 'my-auth-token'
            })
        });
    }

    create(o: T): Observable<any> {
        return this.http.post(this.fullUri, o, this.buildHttpOptions());
    }


    buildHttpOptions(additional?): {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
    } {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Authorization: 'my-auth-token'
            }),
            ...additional
        }
    }
}