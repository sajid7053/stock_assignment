import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom'
import FormikForm from './WarehouseEdit'
import { useSelector, useDispatch } from 'react-redux'
import { editData } from '../redux/action/edit.action'
import { listData } from '../redux/action/list.action'

function WarehouseDetail() {
    let { id } = useParams()
    const dispatch = useDispatch()

    const fields = useSelector(state => state.listReducer.data)
    const fields1 = fields.filter(item => item.id == id)
    const [fields2, setFields2] = useState(fields1[0])
    dispatch(editData(fields2))
    const newState = useSelector(state => state.editDataReducer.data)

    fields[id - 1] = newState
    if (fields[id - 1]) {
        dispatch(listData(fields))
    }
    // console.log(fields)

    //console.log(fields[id - 1])
    return (
        <div>
            <FormikForm fields={fields2} updateFields={setFields2} />
            <Link to={"/"}><button className="btn btn-success btn-block" style={{ marginLeft: "700px", marginTop: "30px" }}>Go Home</button></Link>
        </div>
    )
}

export default WarehouseDetail
