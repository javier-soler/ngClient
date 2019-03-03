import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PageableResponse } from './pageable-response';
import { Page } from './page';
import { map } from 'rxjs/operators';
import { AppCtxService } from '../../app-context.service';


export class RestClient<T> {

    private fullUri: string;

    constructor(private embeddedKey: string, private resourcePath: string, private ctx: AppCtxService, private http: HttpClient) {
        this.fullUri = ctx.baseUri + resourcePath;
    }

    getList(pageNum = 0, size = 10): Observable<PageableResponse<T>> {
        const httpOptions = this.ctx.buildHttpOptions({
            params: {
                size: +size,
                page: String(pageNum)
            }
        });

        return this.http.get<any>(this.fullUri, httpOptions)
            .pipe(map(d => {
                const p = d.page;
                const page = new Page(p.number, p.size, p.totalElements, p.totalPages);
                return new PageableResponse<T>(d._embedded[this.embeddedKey], d._links, page);
            }));
    }

    getSingleObject(id: number): Observable<T> {
        return this.http.get<T>(this.fullUri + '/' + id, this.ctx.buildHttpOptions());
    }

    create(o: T): Observable<any> {
        return this.http.post(this.fullUri, o, this.ctx.buildHttpOptions());
    }

    update(o: T): Observable<any> {
        return this.http.put(this.fullUri + '/' + o['id'], o, this.ctx.buildHttpOptions());
    }

    delete(id: number): Observable<any> {
        return this.http.delete<any>(this.fullUri + '/' + id, this.ctx.buildHttpOptions()).pipe(map(x => true));
    }
}
