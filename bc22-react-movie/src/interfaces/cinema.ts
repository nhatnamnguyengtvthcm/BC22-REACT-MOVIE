export interface cinema {
  maHeThongRap: string;
  tenHeThongRap: string;
  biDanh: string;
  logo: string;
  lstCumRap: cumRap[]
}
export interface unitCenema {
  maCumRap: string;
  tenCumRap: string;
  diaChi: string;
  danhSachRap: { maRap: string; tenRap: string }[];
}

export interface cumRap {
    danhSachPhim: film[],
    maCumRap: string;
    tenCumRap: string;
    diaChi: string;
    hinhAnh: string;
}

export interface film {
    lstLichChieuTheoPhim: listChieu[],
    maPhim: 1314,
    tenPhim: string,
    hinhAnh: string,
    hot: boolean,
    dangChieu: boolean,
    sapChieu: boolean

}

export interface listChieu {
    maLichChieu: number;
    maRap: string;
    tenRap: string;
    ngayChieuGioChieu: string,
    giaVe: string,
    thoiLuong: number
}

export interface chiTietPhim{
  biDanh: string;
  logo: string;
  // lstCumRap: cumRap[];
  trailer: string;
  hinhAnh: string;
  moTa: string;
  maNhom:string;
  hot: Boolean;
  dangChieu: boolean;
  sapChieu: boolean;
  ngayKhoiChieu: string;
  danhGia: number;
  heThongRapChieu:  heThongRapChieu[]
}

export interface heThongRapChieu{
    cumRapChieu:cumRapChieu[];
}

export interface cumRapChieu{
  lichChieuPhim: listChieu[],
  cumRap: cumRap
}