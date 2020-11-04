using System;
using System.Collections.Generic;
using System.Text;

namespace QLGV.Domain.Request
{
    public class TaoGiangVien
    {
        public int KhoaId { get; set; }
        public string Ho { get; set; }
        public string Ten { get; set; }
        public string DiaChi { get; set; }
        public string DienThoai { get; set; }
        public string Email { get; set; }
    }
}
