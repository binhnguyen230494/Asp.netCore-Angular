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
    public class KhoaController : ControllerBase
    {
        private readonly IKhoaService _khoaService;
        public KhoaController(IKhoaService khoaService)
        {
            _khoaService = khoaService;
        }
        [Route("api/khoa/danhsachkhoa")]
        [HttpGet]
        public IEnumerable<Khoa> DanhSachKhoa()
        {
            return _khoaService.DanhSachKhoa();
        }

        [Route("api/khoa/laykhoa/{id}")]
        [HttpGet("{id}")]
        public Khoa LayKhoaID(int id)
        {
            return _khoaService.LayKhoaID(id);
        }
        [Route("api/khoa/taokhoa")]

        [HttpPost]
        public int TaoKhoa([FromBody] TaoKhoa request)
        {
            return _khoaService.TaoKhoa(request);
        }
        [Route("api/khoa/suakhoa")]

        [HttpPut("{id}")]
        public int SuaKhoa([FromBody] SuaKhoa request)
        {
            return _khoaService.SuaKhoa(request);
        }

        [Route("api/khoa/xoakhoa/{id}")]
        [HttpDelete]
        public bool XoaKhoa(int id)
        {
            return _khoaService.XoaKhoa(id);
        }
    }
}
