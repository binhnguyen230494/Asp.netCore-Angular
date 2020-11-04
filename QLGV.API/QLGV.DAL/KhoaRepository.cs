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
    public class KhoaRepository : BaseRepository, IKhoaRepository
    {
        public IList<Khoa> DanhSachKhoa()
        {

            IList<Khoa> Khoalist = SqlMapper.Query<Khoa>(con, "DanhSachKhoa", commandType: CommandType.StoredProcedure).ToList();
            return Khoalist;


        }

        public Khoa LayKhoaID(int Id)
        {

            DynamicParameters parameters = new DynamicParameters();
            parameters.Add("@Id", Id);
            Khoa khoa = SqlMapper.Query<Khoa>(con, "LayKhoaID", parameters, commandType: CommandType.StoredProcedure).FirstOrDefault();
            return khoa;

        }

        public int SuaKhoa(SuaKhoa request)
        {
            try
            {
                DynamicParameters parameters = new DynamicParameters();
                parameters.Add("@Id", request.Id);
                parameters.Add("@MaKhoa", request.MaKhoa);
                parameters.Add("@TenKhoa", request.TenKhoa);
                var id = SqlMapper.ExecuteScalar<int>(con, "SuaKhoa", param: parameters, commandType: CommandType.StoredProcedure);
                return id;

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public int TaoKhoa(TaoKhoa request)
        {
            try
            {
                DynamicParameters parameters = new DynamicParameters();

                parameters.Add("@MaKhoa", request.MaKhoa);
                parameters.Add("@TenKhoa", request.TenKhoa);
                var id = SqlMapper.ExecuteScalar<int>(con, "TaoKhoa", param: parameters, commandType: CommandType.StoredProcedure);
                return id;

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public bool XoaKhoa(int Id)
        {
            try
            {
                DynamicParameters parameters = new DynamicParameters();
                parameters.Add("@Id", Id);

                var result = SqlMapper.ExecuteScalar<bool>(con, "XoaKhoa", param: parameters, commandType: CommandType.StoredProcedure);
                return result;

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
