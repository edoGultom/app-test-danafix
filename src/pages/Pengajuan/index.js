import React from "react";
import { TabSection } from "../../components/molecules";
import DataTables from "../../components/molecules/DataTables";

export default function Pengajuan() {
  return (
    <>
      <div className=" h-28 bg-white items-center px-2">
        <TabSection />
      </div>
      <div className=" px-20 py-20">
        <p className="text-2xl ">Riwayat Pengajuan</p>
        <DataTables />
      </div>
    </>
  );
}
