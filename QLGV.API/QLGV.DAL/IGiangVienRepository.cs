using QLGV.Domain.Request;
using QLGV.Domain.Response;
using System;
using System.Collections.Generic;
using System.Text;

namespace QLGV.DAL
{
    public interface IGiangVienRepository
    {
        IList<GiangVien> DanhSachGVTheoKhoa(int KhoaId);
        // csdl bitint thi c# dung long
        GiangVien LayGiangVienTheoMaGV(int Id);
        int TaoGiangVien(TaoGiangVien request);
        int SuaGiangVien(SuaGiangVien request);
        bool XoaGiangVien(int Id);
    }
}
