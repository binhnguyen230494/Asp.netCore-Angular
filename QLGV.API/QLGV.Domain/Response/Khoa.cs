using System;
using System.Collections.Generic;
using System.Text;

namespace QLGV.Domain.Response
{
    public class Khoa
    {
        public int ID { get; set; }
        public string MaKhoa { get; set; }
        public string TenKhoa { get; set; }
        public int TongSoGiangVien { get; set; }
    }
}
