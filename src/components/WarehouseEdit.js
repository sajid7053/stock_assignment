import React, { Component } from 'react'
import { withFormik, Form, Field } from 'formik';

const form_id = 'form_id';
class WarehouseEdit extends Component {
    editOnClick = (event) => {
        event.preventDefault()
        const data = !(this?.props?.status?.edit)
        this.props.setStatus({
            edit: data,
        })
    }

    cancelOnClick = (event) => {
        event.preventDefault();
        this.props.resetForm();
        this.props.setStatus({
            edit: false,
        });
    }

    _renderAction() {
        return (
            <div>
                <div className="form-statusbar">
                    {
                        this?.props?.status?.edit
                            ?
                            <div>
                                <button className="btn btn-primary btn-sm" type="submit" form={form_id}>Save</button>
                                <button className="btn btn-danger btn-sm" onClick={this.cancelOnClick} style={{ marginLeft: "8px" }}>Cancel</button>
                            </div>
                            :
                            <button className="btn btn-danger btn-block" onClick={this.editOnClick} >Edit</button>
                    }
                </div>
            </div>
        );
    }

    _renderFormView = () => {
        return (
            <div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Id</label>
                    <div className="col-sm-10">
                        <label type="text" name="id" className='form-control'>
                            {this?.props?.fields?.id}
                        </label>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <label type="text" name="name" className='form-control'>
                            {this?.props?.fields?.name}
                        </label>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Code</label>
                    <div className="col-sm-10">
                        <label type="text" name="code" className='form-control'>
                            {this?.props?.fields?.code}
                        </label>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">City</label>
                    <div className="col-sm-10">
                        <label type="text" name="city" className='form-control'>
                            {this?.props?.fields?.city}
                        </label>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Space Available</label>
                    <div className="col-sm-10">
                        <label type="text" name="space_available" className='form-control'>
                            {this?.props?.fields?.space_available}
                        </label>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Type</label>
                    <div className="col-sm-10">
                        <label type="text" name="type" className='form-control'>
                            {this?.props?.fields?.type}
                        </label>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Cluster</label>
                    <div className="col-sm-10">
                        <label type="text" name="cluster" className='form-control'>
                            {this?.props?.fields?.cluster}
                        </label>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Register Status</label>
                    <div className="col-sm-10">
                        <label type="text" name="is_registered" className='form-control'>
                            {this?.props?.fields?.is_registered}
                        </label>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Live Status</label>
                    <div className="col-sm-10">
                        <label type="text" name="is_live" className='form-control'>
                            {this?.props?.fields?.is_live}
                        </label>
                    </div>
                </div>
            </div>
        );
    }

    _renderFormInput = () => {
        return (
            <div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Id</label>
                    <div className="col-sm-10">
                        <label type="text" name="id" className='form-control'>
                            {this?.props?.fields?.id}
                        </label>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <Field type="text" name="name" className='form-control' placeholder="Name" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Code</label>
                    <div className="col-sm-10">
                        <Field type="text" name="code" className='form-control' placeholder="Code" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">City</label>
                    <div className="col-sm-10">
                        <Field type="text" name="city" className='form-control' placeholder="City" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Space Available</label>
                    <div className="col-sm-10">
                        <Field type="text" name="space_available" className='form-control' placeholder="City" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Type</label>
                    <div className="col-sm-10">
                        <Field type="text" name="type" className='form-control' placeholder="Type" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Cluster</label>
                    <div className="col-sm-10">
                        <Field type="text" name="cluster" className='form-control' placeholder="Cluster" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Register Status</label>
                    <div className="col-sm-10">
                        <Field type="text" name="is_registered" className='form-control' placeholder="Register Status" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Live Status</label>
                    <div className="col-sm-10">
                        <Field type="text" name="is_live" className='form-control' placeholder="Live Status" />
                    </div>
                </div>
            </div>
        );
    }
    render() {
        // console.log(this.props.fields[0].name)
        return (
            <div>
                {this._renderAction()}
                <Form id={form_id}>
                    {
                        this?.props?.status?.edit
                            ?
                            this._renderFormInput()
                            :
                            this._renderFormView()
                    }
                </Form>
            </div>
        )
    }
}

const FormikForm = withFormik({
    mapPropsToStatus: (props) => {
        return {
            edit: props?.edit || false,
        }
    },
    mapPropsToValues: (props) => {
        return {
            id: props.fields.id,
            name: props.fields.name,
            code: props.fields.code,
            city: props.fields.city,
            space_available: props.fields.space_available,
            type: props.fields.type,
            cluster: props.fields.cluster,
            is_registered: props.fields.is_registered,
            is_live: props.fields.is_live
        }
    },
    enableReinitialize: true,
    handleSubmit: (values, { props, ...actions }) => {
        props.updateFields(values);
        actions.setStatus({
            edit: false,
        });
    }
})(WarehouseEdit);

export default FormikForm;
