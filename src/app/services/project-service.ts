import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Project } from "../modal/project";

const baseUrl = 'http://localhost:8084/api/projects';
const emailUrl = 'http://localhost:8084/api/sendMail';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {

constructor(private http: HttpClient) {}

  getAll(): Observable<Project[]> {
    return this.http.get<Project[]>(baseUrl);
  }

  get(id: any): Observable<Project> {
    return this.http.get<Project>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  sendEmail(data: any, email: any) {
    let table = 
     '<table>' +
        '<thead>' +
            '<tr>' +
                '<th>Title</th>' +
                '<th>Kunde</th>' +
                '<th>Einsatzort</th>' +
                '<th>Auslastung</th>' +
                '<th>Level</th>'+
             '</tr>' +
         '</thead>' +
         '<tbody>' +
             '<tr>';


    table += '<td>' + data.title + '</td>';
    table += '<td>' + data.kunde + '</td>';
    table += '<td>' + data.einsatzort + '</td>';
    table += '<td>' + data.auslastung + '</td>';
    table += '<td>' + data.level + '</td>';
    

table += '</tr></tbody></table>'; 

const parser = new DOMParser();
const html = parser.parseFromString(table, 'text/html');
const body = html.body;
console.log(html.body);

     return this.http.post(emailUrl, {
      
      "recipient": email,
      "msgBody": data.kunde + data.title,
      "subject": data.title
    }); 
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}