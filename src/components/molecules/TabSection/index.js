import React from "react";

export default function TabSection() {
  return (
    <div className=" flex flex-row items-center justify-between">
      <div className="mr-10 ml-10 mb-4 border-b border-black-200 dark:border-gray-700 w-full">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          <li className="mr-2" role="presentation">
            <button
              className="inline-block p-4 border-b-2 rounded-t-lg"
              id="pengajuan-tab"
              data-tabs-target="#pengajuan"
              type="button"
              role="tab"
              aria-controls="pengajuan"
              aria-selected="false"
            >
              Pengajuan
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="ewa-tab"
              data-tabs-target="#ewa"
              type="button"
              role="tab"
              aria-controls="ewa"
              aria-selected="false"
            >
              EWA
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="permintaan-pembayaran-tab"
              data-tabs-target="#permintaan-pembayaran"
              type="button"
              role="tab"
              aria-controls="permintaan-pembayaran"
              aria-selected="false"
            >
              Permintaan Pembayaran
            </button>
          </li>
        </ul>
      </div>
      <div className=" flex flex-col w-48">
        <button
          className="inline-block border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
          id="permintaan-pembayaran-tab"
          data-tabs-target="#permintaan-pembayaran"
          type="button"
          role="tab"
          aria-controls="permintaan-pembayaran"
          aria-selected="false"
        >
          PT. SAYURMERDEKA
        </button>
        <p>Irene Agustin</p>
      </div>
    </div>
  );
}
