import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShareService } from 'src/app/share.service';

@Component({
  selector: 'app-hienthigv',
  templateUrl: './hienthigv.component.html',
  styleUrls: ['./hienthigv.component.css']
})
export class HienthigvComponent implements OnInit {

  constructor(private service: ShareService,private router: Router, private route:ActivatedRoute) { }

  data: any = [];
  ModalTitle:string;
  ActivateAddEditGV:boolean=false;
  dep:any;
  
  //khoaId:string ;
  


  ngOnInit(): void {
    this.getdata();
  }
  public getdata(){
    let khoaId = this.route.snapshot.paramMap.get('khoaId')
    this.service.getgvList(khoaId).subscribe(data => {
      this.data = data;
    });
  }
  public closeClick(){
    this.ActivateAddEditGV=false;
    this.getdata();
  }
  public addClick(){
    this.dep={
      maGV:0,
      khoaId:"",
      ho:"",
      ten:"",
      diaChi:"",
      dienThoai:"",
      email:""
    }
    this.ModalTitle="Add Giáo Viên";
    this.ActivateAddEditGV=true;

  }
  public editClick(item){
    this.dep=item;
    this.ModalTitle="Sua Giáo Viên";
    this.ActivateAddEditGV=true;
  }
  public deletegv(item){
    if(confirm('Are you sure??')){
      this.service.xoaGv(item.id).subscribe(data=>{
        alert(data.toString());
        this.getdata();
      })
    }
  }

}
