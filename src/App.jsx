import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { classNames } from 'primereact/utils';
import React, { useEffect, useState } from 'react';
import { ProductService } from './service/ProductService';

export default function RadioButtonRowSelectionDemo() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [rowClick, setRowClick] = useState(true);

  useEffect(() => {
    ProductService.getProductsMini().then((data) => setProducts(data));
  }, []);

  return (
    <>
      <div className="card">
        <div className="flex justify-content-center align-items-center mb-4 gap-2">
          <label htmlFor="input-rowclick">Deafult unstyled values</label>
        </div>
        <DataTable
          unstyled
          pt={{
            column: {
              radiobuttonwrapper: {
                className: classNames(
                  'relative inline-flex cursor-pointer select-none align-bottom',
                  'w-6 h-6'
                ),
              },
              radiobutton: ({ context }) => ({
                className: classNames(
                  'flex justify-center items-center',
                  'border-2 w-6 h-6 text-gray-700 rounded-full transition duration-200 ease-in-out',
                  context.checked
                    ? 'border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-400'
                    : 'border-gray-300 bg-white dark:border-blue-900/40 dark:bg-gray-900',
                  {
                    'hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]':
                      !context.disabled,
                    'cursor-default opacity-60': context.disabled,
                  }
                ),
              }),
              radiobuttonicon: ({ context }) => ({
                className: classNames(
                  'transform rounded-full',
                  'block w-3 h-3 transition duration-200 bg-white dark:bg-gray-900',
                  {
                    'backface-hidden scale-10 invisible':
                      context.checked === false,
                    'transform scale-100 visible': context.checked === true,
                  }
                ),
              }),
            },
          }}
          value={products}
          selectionMode={rowClick ? undefined : 'radiobutton'}
          selection={selectedProduct}
          onSelectionChange={(e) => setSelectedProduct(e.value)}
          dataKey="id"
          tableStyle={{ minWidth: '50rem' }}
        >
          <Column
            selectionMode="single"
            headerStyle={{ width: '3rem' }}
          ></Column>
          <Column field="code" header="Code"></Column>
          <Column field="name" header="Name"></Column>
          <Column field="category" header="Category"></Column>
          <Column field="quantity" header="Quantity"></Column>
        </DataTable>
      </div>

      <div className="card">
        <div className="flex justify-content-center align-items-center mb-4 gap-2">
          <label htmlFor="input-rowclick">Fixed unstyled values</label>
        </div>
        <DataTable
          unstyled
          pt={{
            column: {
              radiobutton: {
                className: classNames(
                  'relative inline-flex cursor-pointer select-none align-bottom',
                  'w-6 h-6'
                ),
              },
              radiobuttonbox: ({ context }) => ({
                className: classNames(
                  'flex items-center justify-center',
                  'h-6 w-6 min-w-6 rounded-full border-2 text-gray-700 transition duration-200 ease-in-out',
                  context.checked
                    ? 'border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-400 peer-hover:!bg-blue-700 peer-hover:!border-blue-700'
                    : 'border-gray-300 bg-white dark:border-blue-900/40 dark:bg-gray-900 peer-hover:!border-blue-500',
                  {
                    'hover:border-blue-500 focus:shadow-input-focus focus:outline-none focus:outline-offset-0 dark:hover:border-blue-400 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]':
                      !context.disabled,
                    'cursor-default opacity-60': context.disabled,
                  }
                ),
              }),
              radiobuttoninput: classNames(
                'w-full h-full top-0 left-0 absolute appearance-none select-none',
                'p-0 m-0 opacity-0 z-[1] rounded-[50%] outline-none',
                'cursor-pointer peer'
              ),
              radiobuttonicon: ({ context }) => ({
                className: classNames(
                  'transform rounded-full',
                  'block h-3 w-3 min-w-3 bg-white transition duration-200 dark:bg-gray-900',
                  {
                    'backface-hidden scale-10 invisible':
                      context.checked === false,
                    'visible scale-100 transform': context.checked === true,
                  }
                ),
              }),
            },
          }}
          value={products}
          selectionMode={rowClick ? undefined : 'radiobutton'}
          selection={selectedProduct}
          onSelectionChange={(e) => setSelectedProduct(e.value)}
          dataKey="id"
          tableStyle={{ minWidth: '50rem' }}
        >
          <Column
            selectionMode="single"
            headerStyle={{ width: '3rem' }}
          ></Column>
          <Column field="code" header="Code"></Column>
          <Column field="name" header="Name"></Column>
          <Column field="category" header="Category"></Column>
          <Column field="quantity" header="Quantity"></Column>
        </DataTable>
      </div>
    </>
  );
}
