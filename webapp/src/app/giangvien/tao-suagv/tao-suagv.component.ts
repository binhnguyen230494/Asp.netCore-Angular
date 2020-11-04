import { Component, Input, OnInit } from '@angular/core';
import { ShareService } from 'src/app/share.service';

@Component({
  selector: 'app-tao-suagv',
  templateUrl: './tao-suagv.component.html',
  styleUrls: ['./tao-suagv.component.css']
})
export class TaoSuagvComponent implements OnInit {

  constructor(private service: ShareService) { }
  @Input() dep:any;
  maGV:string;
  khoaId:number;
  ho:string;
  ten:string;
  diaChi:string;
  dienThoai:string;
  email:string;

  ngOnInit(): void {
    this.maGV = this.dep.maGV;
    this.khoaId = this.dep.khoaId;
    this.ho = this.dep.ho;
    this.ten = this.dep.ten;
    this.diaChi = this.dep.diaChi;
    this.dienThoai = this.dep.dienThoai;
    this.email = this.dep.email;
  }
  
  public addgv(){
    var val = {
      khoaId:this.khoaId,
                ho:this.ho,
                ten:this.ten,
                diaChi:this.diaChi,
                dienThoai:this.dienThoai,
                email:this.email};
    this.service.taoGv(val).subscribe(res=>{
      alert(res.toString());
    });
  }
  public updategv(){
    var val = {maGV:this.maGV,
      khoaId:this.khoaId,
      ho:this.ho,
      ten:this.ten,
      diaChi:this.diaChi,
      dienThoai:this.dienThoai,
      email:this.email};
    this.service.suaGv(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
