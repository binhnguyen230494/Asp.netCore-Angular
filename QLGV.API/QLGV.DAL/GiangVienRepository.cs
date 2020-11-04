using Dapper;
using QLGV.Domain.Request;
using QLGV.Domain.Response;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;

namespace QLGV.DAL
{
    public class GiangVienRepository : BaseRepository, IGiangVienRepository
    {
        public IList<GiangVien> DanhSachGVTheoKhoa(int KhoaId)
        {
            DynamicParameters parameters = new DynamicParameters();
            parameters.Add("@KhoaId", KhoaId);
            IList<GiangVien> GVlist = SqlMapper.Query<GiangVien>(con, "DanhSachGVTheoKhoa", parameters, commandType: CommandType.StoredProcedure).ToList();
            return GVlist;
        }

        public GiangVien LayGiangVienTheoMaGV(int Id)
        {
            DynamicParameters parameters = new DynamicParameters();
            parameters.Add("@MaGV", Id);
            GiangVien GV = SqlMapper.Query<GiangVien>(con, "LayGVTheoMa", parameters, commandType: CommandType.StoredProcedure).FirstOrDefault();
            return GV;
        }

        public int SuaGiangVien(SuaGiangVien request)
        {
            try
            {
                DynamicParameters parameters = new DynamicParameters();
                parameters.Add("MaGV", request.MaGV);
                parameters.Add("@Email", request.Email);
                parameters.Add("@Ho", request.Ho);
                parameters.Add("@Ten", request.Ten);
                parameters.Add("@KhoaId", request.KhoaId);
                parameters.Add("@DiaChi", request.DiaChi);
                parameters.Add("@DienThoai", request.DienThoai);

                var id = SqlMapper.ExecuteScalar<int>(con, "SuaGiangVien", param: parameters, commandType: CommandType.StoredProcedure);
                return id;

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public int TaoGiangVien(TaoGiangVien request)
        {
            try
            {
                DynamicParameters parameters = new DynamicParameters();

                parameters.Add("@KhoaId", request.KhoaId);
                parameters.Add("@Ho", request.Ho);
                parameters.Add("@Ten", request.Ten);
                parameters.Add("@DiaChi", request.DiaChi);
                parameters.Add("@DienThoai", request.DienThoai);
                parameters.Add("@Email", request.Email);
                var id = SqlMapper.ExecuteScalar<int>(con, "TaoGiangVien", param: parameters, commandType: CommandType.StoredProcedure);
                return id;

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public bool XoaGiangVien(int Id)
        {
            try
            {
                DynamicParameters parameters = new DynamicParameters();
                parameters.Add("@MaGV", Id);

                var result = SqlMapper.ExecuteScalar<bool>(con, "XoaGiangVien", param: parameters, commandType: CommandType.StoredProcedure);
                return result;

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
