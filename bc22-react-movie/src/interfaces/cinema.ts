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
    giaVe: string
}