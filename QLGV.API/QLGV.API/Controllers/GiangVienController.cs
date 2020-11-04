using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QLGV.BAL;
using QLGV.Domain.Request;
using QLGV.Domain.Response;

namespace QLGV.API.Controllers
{
    //[Route("api/[controller]")]
    [ApiController]
    public class GiangVienController : ControllerBase
    {
        private readonly IGiangVienService _giangVienService;
        public GiangVienController(IGiangVienService giangVienService)
        {
            _giangVienService = giangVienService;
        }
        [Route("api/giangvien/danhsachgiangvien/{id}")]
        [HttpGet("{id}")]
        public IEnumerable<GiangVien> DanhSachGVTheoKhoa(int id)
        {
            return _giangVienService.DanhSachGVTheoKhoa(id);
        }

        [Route("api/giangvien/laygiangvien/{id}")]
        [HttpGet("{id}")]
        public GiangVien LayGiangVien(int id)
        {
            return _giangVienService.LayGiangVienTheoMaGV(id);
        }
        [Route("api/giangvien/taogiangvien")]

        [HttpPost]
        public int TaoGiangVien([FromBody] TaoGiangVien request)
        {
            return _giangVienService.TaoGiangVien(request);
        }
        [Route("api/giangvien/suagiangvien")]

        [HttpPut("{id}")]
        public int SuaGiangVien([FromBody] SuaGiangVien request)
        {
            return _giangVienService.SuaGiangVien(request);
        }

        [Route("api/giangvien/xoagiangvien/{id}")]
        [HttpDelete]
        public bool XoaGiangVien(int id)
        {
            return _giangVienService.XoaGiangVien(id);
        }
    }
}
