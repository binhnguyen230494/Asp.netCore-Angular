import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ShareService } from 'src/app/share.service';


@Component({
  selector: 'app-hienthikhoa',
  templateUrl: './hienthikhoa.component.html',
  styleUrls: ['./hienthikhoa.component.css']
})
export class HienthikhoaComponent implements OnInit {

  constructor(private service: ShareService,private router: Router, private route:ActivatedRoute) { }
  data: any = [];
  ModalTitle:string;
  ActivateAddEditKhoa:boolean=false;
  dep:any;



  

  ngOnInit(): void {
    this.getdata();
    
    }

  private getdata() {
    this.service.getkhoalist().subscribe(data => {
      this.data = data;
    });
  }
  public deletekhoa(item){
    if(confirm('Are you sure??')){
      this.service.xoaKhoa(item.id).subscribe(data=>{
        alert(data.toString());
        this.getdata();
      })
    }
  }
  //cach router
  public xemkhoa(khoaId){
    this.dep=khoaId;
    this.router.navigate(['giangvien',khoaId]);
    this.service.getgvList(khoaId).subscribe(data=>{
      this.data=data;
    })
    
  }
  /*
  public editkhoa(item){
    this.router.navigate(['tao-suakhoa', 0])
  }*/
  public addClick(){
    this.dep={
      id:0,
      maKhoa:"",
      tenKhoa:""
    }
    this.ModalTitle="Add Khoa";
    this.ActivateAddEditKhoa=true;

  }
  public editClick(item){
    this.dep=item;
    this.ModalTitle="Edit Khoa";
    this.ActivateAddEditKhoa=true;
  }
  public closeClick(){
    this.ActivateAddEditKhoa=false;
    this.getdata();
  }

}
