import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ShareService } from 'src/app/share.service';

@Component({
  selector: 'app-tao-suakhoa',
  templateUrl: './tao-suakhoa.component.html',
  styleUrls: ['./tao-suakhoa.component.css']
})
export class TaoSuakhoaComponent implements OnInit {

  
  constructor(
    private service: ShareService,
    private router: Router,
  ) { }
  @Input() dep:any;
  id:string;
  maKhoa:string;
  tenKhoa:string;

  ngOnInit(): void {
    this.id = this.dep.id;
    this.maKhoa = this.dep.maKhoa;
    this.tenKhoa = this.dep.tenKhoa;
  }
  public addkhoa(){
    var val = {id:this.id,
      maKhoa:this.maKhoa,
                tenKhoa:this.tenKhoa};
    this.service.taoKhoa(val).subscribe(res=>{
      alert(res.toString());
    });
  }
  public updatekhoa(){
    var val = {id:this.id,
      maKhoa:this.maKhoa,
      tenKhoa:this.tenKhoa};
    this.service.suaKhoa(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
