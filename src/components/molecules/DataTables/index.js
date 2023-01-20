import React, { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import dataJson from "../../../records.json";
import SearchInput from "../../atoms/SearchInput";

export default function DataTables() {
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const filteredItems = dataJson.filter(
    (data) =>
      JSON.stringify(data).toLowerCase().indexOf(filterText.toLowerCase()) !==
      -1
  );

  console.log(filterText, "filter");

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <div className="flex flex-row justify-start items-center">
        <SearchInput
          placeholder="Pencarian"
          onChange={(e) => setFilterText(e.target.value)}
          //   onClear={handleClear}
          //   filterText={filterText}
        />
      </div>
    );
  }, [filterText, resetPaginationToggle]);

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
    <DataTable
      columns={columns}
      data={filteredItems}
      pagination
      persistTableHead
      paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
      subHeader
      subHeaderComponent={subHeaderComponentMemo}
    />
  );
}
