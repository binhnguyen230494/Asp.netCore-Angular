import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: 'my-auth-token',
      // Authorization: 'Basic ' + btoa('username:password'),
    }),
  };
readonly APIUrl = "https://localhost:44373/api";
  constructor(private http: HttpClient) { }
  
  getkhoalist(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/khoa/danhsachkhoa');
  }
  taoKhoa(val: any){
    return this.http.post(this.APIUrl + '/khoa/taokhoa', val);
  }
  xemKhoa(val: any){
    return this.http.get(this.APIUrl + '/khoa/laykhoa/'+val)
  }
  suaKhoa(val:any){
    return this.http.put(this.APIUrl+'/khoa/suakhoa', val);
  }

  xoaKhoa(val:any){
    return this.http.delete(this.APIUrl+'/khoa/xoakhoa/'+val);
  }
  getgvList(khoaId: any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/giangvien/danhsachgiangvien/'+khoaId);
  }
  xemGv(val: any){
    return this.http.get(this.APIUrl+'/giangvien/laygiangvien/'+val);
  }

  taoGv(val:any){
    return this.http.post(this.APIUrl+ '/giangvien/taogiangvien',val);
  }

  suaGv(val:any){
    return this.http.put(this.APIUrl+'/giangvien/suagiangvien',val);
  }

  xoaGv(val:any){
    return this.http.delete(this.APIUrl+'/giangvien/xoagiangvien/'+val);
  }

  
}
