using QLGV.DAL;
using QLGV.Domain.Request;
using QLGV.Domain.Response;
using System;
using System.Collections.Generic;
using System.Text;

namespace QLGV.BAL
{
    public class KhoaService : IKhoaService
    {
        private readonly IKhoaRepository _khoaRepository;
        public KhoaService(IKhoaRepository khoaRepository)
        {
            _khoaRepository = khoaRepository;
        }

        public IList<Khoa> DanhSachKhoa()
        {
            return _khoaRepository.DanhSachKhoa();
        }

        public Khoa LayKhoaID(int Id)
        {
            return _khoaRepository.LayKhoaID(Id);
        }

        public int SuaKhoa(SuaKhoa request)
        {
            return _khoaRepository.SuaKhoa(request);
        }

        public int TaoKhoa(TaoKhoa request)
        {
            return _khoaRepository.TaoKhoa(request);
        }

        public bool XoaKhoa(int Id)
        {
            return _khoaRepository.XoaKhoa(Id);
        }
    }
}
