import React, { useState, useEffect } from 'react'
import MUIDataTable from "mui-datatables";
import { columns } from './WarehouseColumnHeader'
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'


function WarehouseList() {
    const warehouseItems = useSelector(state => state.listReducer.data)

    const tableData = () => {
        return warehouseItems.map((item, index) => {
            let { name, code, id, city, space_available, type, cluster, is_registered, is_live } = item //destructuring

            if (is_registered == true) {
                item.is_registered = "registered"
            } else if (is_registered == false) {
                item.is_registered = "not registered"
            }
            else {
                is_registered = "not registered"
            }

            if (is_live == true) {
                item.is_live = "active"
            } else if (is_live == false) {
                item.is_live = "inactive"
            }
            else {
                is_live = "inactive"
            }
            return [
                <Link to={"/edit/" + id}>{name}</Link>,
                code,
                id,
                city,
                space_available,
                type,
                cluster,
                item.is_registered,
                item.is_live,
            ]
        })
    }
    const columnsTitle = columns

    const options = {
        filterType: 'checkbox',
        download: true,
        print: false,
        viewColumns: false,
    };

    const styleTable = () => createTheme({
        overrides: {
            MuiTableCell: {
                head: {
                    fontWeight: "700"
                }
            }
        }
    })

    return (
        <div>
            <ThemeProvider theme={styleTable()}>

                <MUIDataTable
                    title={"Warehouse List"}
                    data={tableData()}
                    columns={columnsTitle}
                    options={options}
                />
            </ThemeProvider>
        </div>
    )
}

export default WarehouseList
