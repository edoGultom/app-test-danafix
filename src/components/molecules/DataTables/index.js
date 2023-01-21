import React, { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import dataJson from "../../../records.json";
import SearchInput from "../../atoms/SearchInput";
import TextInput from "../../atoms/TextInput";
import * as Moment from "moment";

export default function DataTables() {
  const [filterText, setFilterText] = useState("");
  const [filterDate, setDateFilter] = useState({
    awal: "",
    akhir: "",
  });
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const filteredItems = dataJson
    .filter((item) => {
      return (
        JSON.stringify(item).toLowerCase().indexOf(filterText.toLowerCase()) !==
        -1
      );
    })
    .filter((item) => {
      if (filterDate.awal.length > 0 && filterDate.akhir.length > 0) {
        return (
          Date.parse(
            Moment(
              item.tanggal_pengajuan.toString().replace("-", "."),
              "DD. M. YYYY"
            ).format("YYYY-MM-DD")
          ) >= Date.parse(Moment(filterDate.awal).format("YYYY-MM-DD")) &&
          Date.parse(
            Moment(
              item.tanggal_pengajuan.toString().replace("-", "."),
              "DD. M. YYYY"
            ).format("YYYY-MM-DD")
          ) <= Date.parse(Moment(filterDate.akhir).format("YYYY-MM-DD"))
        );
      }
      return item;
    });

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

  return (
    <>
      <div className="flex flex-row justify-between items-center py-5">
        <div className="flex flex-col items-start">
          <p>Tanggal Pengajuan</p>
          <div className="flex flex-row justify-between items-center">
            <TextInput
              type="date"
              className="rounded-xl"
              onChange={(e) =>
                setDateFilter({
                  ...filterDate,
                  awal: e.target.value,
                })
              }
            />
            <span className="text-sm">{"<>"}</span>
            <TextInput
              type="date"
              className="rounded-xl"
              onChange={(e) =>
                setDateFilter({
                  ...filterDate,
                  akhir: e.target.value,
                })
              }
            />
          </div>
        </div>
        <SearchInput
          placeholder="Pencarian"
          onChange={(e) => setFilterText(e.target.value)}
        />
      </div>
      <DataTable
        columns={columns}
        data={filteredItems}
        pagination
        persistTableHead
        paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
      />
    </>
  );
}
