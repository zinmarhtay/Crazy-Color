import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

import { map } from 'rxjs/operators'
import { forkJoin } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UploadService {
    constructor(private http: HttpClient) { }

    upload(file: File) {
        let formData = new FormData();
        formData.append('file', file);
        return this.http.post<{ path }>('http://localhost:8080/image-upload', formData).pipe(map(data => data.path))
    }
}