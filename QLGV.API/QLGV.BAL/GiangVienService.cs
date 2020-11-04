using QLGV.DAL;
using QLGV.Domain.Request;
using QLGV.Domain.Response;
using System;
using System.Collections.Generic;
using System.Text;

namespace QLGV.BAL
{
    public class GiangVienService : IGiangVienService
    {
        private readonly IGiangVienRepository _giangVienRepository;
        public GiangVienService(IGiangVienRepository giangVienRepository)
        {
            _giangVienRepository = giangVienRepository;
        }
        public IList<GiangVien> DanhSachGVTheoKhoa(int KhoaId)
        {
            return _giangVienRepository.DanhSachGVTheoKhoa(KhoaId);
        }

        public GiangVien LayGiangVienTheoMaGV(int Id)
        {
            return _giangVienRepository.LayGiangVienTheoMaGV(Id);
        }

        public int SuaGiangVien(SuaGiangVien request)
        {
            return _giangVienRepository.SuaGiangVien(request);
        }

        public int TaoGiangVien(TaoGiangVien request)
        {
            return _giangVienRepository.TaoGiangVien(request);
        }

        public bool XoaGiangVien(int Id)
        {
            return _giangVienRepository.XoaGiangVien(Id);
        }
    }
}
