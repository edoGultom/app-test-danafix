import React from "react";
import DataTable from "react-data-table-component";
import dataJson from "../../../records.json";

export default function DataTables() {
  const columns = [
    {
      name: "Tanggal Pengajuan",
      selector: (row) => row.tanggal_pengajuan,
      sortable: true,
      sortField: "tanggal_pengajuan",
    },
    {
      name: "ID Karyawan",
      selector: (row) => row.id_karyawan,
      sortable: true,
      sortField: "id_karyawan",
    },
    {
      name: "Nama Karyawan",
      selector: (row) => row.nama_karyawan,
      sortable: true,
      sortField: "nama_karyawan",
    },
    {
      name: "Jabatan",
      selector: (row) => row.jabatan,
      sortable: true,
      sortField: "jabatan",
    },
    {
      name: "Tgl. mulai bekerja",
      selector: (row) => row.tgl_mulai_bekerja,
      sortable: true,
      sortField: "tgl_mulai_bekerja",
    },
    {
      name: "Gaji (Rp)",
      selector: (row) => row.gaji,
      sortable: true,
      sortField: "gaji",
    },
    {
      name: "Permintaan (Rp)",
      selector: (row) => row.permintaan,
      sortable: true,
      sortField: "permintaan",
    },
    {
      name: "Biaya Layanan (Rp)",
      selector: (row) => row.biaya_layanan,
      sortable: true,
      sortField: "biaya_layanan",
    },
    {
      name: "Pembayaran (Rp)",
      selector: (row) => row.pembayaran,
      sortable: true,
      sortField: "pembayaran",
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
      sortField: "status",
    },
    {
      name: "Status Date",
      selector: (row) => row.status_date,
      sortable: true,
      sortField: "status_date",
    },
    {
      name: "Manajer HR",
      selector: (row) => row.manager_hr,
      sortable: true,
      sortField: "manager_hr",
    },
  ];

  const data = dataJson;

  return (
    <DataTable
      columns={columns}
      data={data}
      pagination
      subHeader
      persistTableHead
      defaultSortFieldId={1}
    />
  );
}
