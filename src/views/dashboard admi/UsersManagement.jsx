import React from "react";

const UsersManagement = () => {
  return (
     <div className="overflow-y-auto">
      <div className="inline-block min-w-full align-middle">
        <div className=" bg-gray-100 md:pt-0">
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-center text-xs font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  ESATDO
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  FECHA INICIAL
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  RED SOCIAL
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  DATO DE CONTACTO
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  USER
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  FECHA RESPUESTA
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  ARCHIVAR
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
               
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersManagement;
