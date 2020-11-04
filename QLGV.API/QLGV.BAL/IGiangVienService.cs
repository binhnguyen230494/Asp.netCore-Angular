using QLGV.Domain.Request;
using QLGV.Domain.Response;
using System;
using System.Collections.Generic;
using System.Text;

namespace QLGV.BAL
{
    public interface IGiangVienService
    {
        IList<GiangVien> DanhSachGVTheoKhoa(int PhongBanId);
        // csdl bitint thi c# dung long
        GiangVien LayGiangVienTheoMaGV(int Id);
        int TaoGiangVien(TaoGiangVien request);
        int SuaGiangVien(SuaGiangVien request);
        bool XoaGiangVien(int Id);
    }
}
