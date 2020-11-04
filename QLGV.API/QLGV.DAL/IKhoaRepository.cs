using QLGV.Domain.Request;
using QLGV.Domain.Response;
using System;
using System.Collections.Generic;
using System.Text;

namespace QLGV.DAL
{
    public interface IKhoaRepository
    {
        IList<Khoa> DanhSachKhoa();
        // csdl bitint thi c# dung long
        Khoa LayKhoaID(int Id);
        int TaoKhoa(TaoKhoa request);
        int SuaKhoa(SuaKhoa request);
        bool XoaKhoa(int Id);
    }
}
