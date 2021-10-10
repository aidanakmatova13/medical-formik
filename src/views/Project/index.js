import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout";
import axios from "axios";
import {Form, Row, Col} from "react-bootstrap";
import Modal from 'react-modal'
import Card from "../../components/Card";
import {useFormik} from "formik";
import * as Yup from 'yup'
import {useDispatch, useSelector} from "react-redux";
import {addProject, getProjects} from "../../redux/actions";



const Project = () => {
    const dispatch = useDispatch()
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [img, setImg] = useState({})
    const [cName, setClassName] = useState('jsGridView');
    const projects = useSelector(store => store.projects)
    const formik = useFormik({
            initialValues: {
                title: '',
                supervisor: '',
                admin: '',
                start_date: '',
                end_date: ''
            },
            validationSchema: Yup.object({
                title: Yup.string()
                    .min(2, 'Должно быть не менее 2 символов')
                    .required('Небходимо завполнить это поле'),
                supervisor: Yup.string()
                    .min(2, 'Должно быть не менее 2 символов')
                    .required('Небходимо завполнить это поле'),
                admin: Yup.string()
                    .min(2, 'Должно быть не менее 2 символов')
                    .required('Небходимо завполнить это поле'),
                start_date: Yup.string()
                    .required('Небходимо выбрать дату'),
                end_date: Yup.string()
                    .required('Небходимо выбрать дату'),
            }),
            onSubmit: data => {
                data.img = img.url
                delete data.file
                console.log(data)
                dispatch(addProject(data))
                setModalIsOpen(false);
            }
        }
    )


    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    const handleFile = (e) => {
        const formData = new FormData()
        formData.append("file", e.target.files[0])
        formData.append("upload_preset", "belovodsk")
        axios.post("https://api.cloudinary.com/v1_1/dd6rvtnn9/image/upload/", formData)
            .then(({data}) => setImg(data))
    }


    function closeModal() {
        setModalIsOpen(false);
    }

    function openModal() {
        setModalIsOpen(true);
    }

    useEffect(() => {
        dispatch(getProjects())
    }, [dispatch])


    return (
        <Layout>
            <div className='m`e-2'>
                <div className="d-flex justify-content-between add-btn">
                    <h3>Список проектов</h3>
                    <button className='ms-lg-auto d-block button'
                            onClick={() => setModalIsOpen(openModal)}
                    >Добавить проект</button>
                </div>
                <button className="view-btn list-view" title="List View" onClick={() => setClassName('jsListView')}>
                    <i className="fas fa-bars"/>
                </button>
                <button className="view-btn list-view" title="Grid View" onClick={() => setClassName('jsGridView')}>
                    <i className="fas fa-th"/>
                </button>
                <div className={cName}>
                    {
                        projects.map(item =>
                            <Card item={item} key={item.id}/>
                        )
                    }
                </div>
                <div>
                    <Modal
                        style={customStyles}
                        isOpen={modalIsOpen} onRequestClose={closeModal}>
                        <input type="file" onChange={(e) => {
                            handleFile(e)
                            formik.handleChange(e)
                        }}/>


                        <Form onSubmit={formik.handleSubmit} className='form-window'>
                            <Row className="mb-3">
                                <Form.Group as={Col}>
                                    <Form.Label>Название проекта</Form.Label>
                                    <Form.Control type="text" placeholder="Название проекта..."
                                                  autoComplete="off"
                                                  name="title"
                                                  onChange={formik.handleChange}
                                                  value={formik.values.firstName}
                                    />
                                    {formik.touched.title && formik.errors.title ? (
                                        <div>{formik.errors.title}</div>
                                    ) : null}
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>Руководитель</Form.Label>
                                    <Form.Control type="tel" placeholder="Имя руководителя..."
                                                  autoComplete="off"
                                                  name="supervisor"
                                                  onChange={formik.handleChange}
                                                  value={formik.values.firstName}
                                    />
                                    {formik.touched.supervisor && formik.errors.supervisor ? (
                                        <div>{formik.errors.supervisor}</div>
                                    ) : null}
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col} className="mb-3">
                                    <Form.Label>Автор</Form.Label>
                                    <Form.Control type='text' placeholder="Имя автора..."
                                                  autoComplete="off"
                                                  name="admin"
                                                  onChange={formik.handleChange}
                                                  value={formik.values.firstName}
                                    />
                                    {formik.touched.admin && formik.errors.admin ? (
                                        <div>{formik.errors.admin}</div>
                                    ) : null}
                                </Form.Group>

                                <Form.Group as={Col} className="mb-3">
                                    <Form.Label htmlFor='start_date'>Дата начала проекта</Form.Label>
                                    <Form.Control type="date" placeholder="Дата начала проекта..."
                                                  autoComplete="off"
                                                  name="start_date"
                                                  onChange={formik.handleChange}
                                                  value={formik.values.start_date}
                                    />
                                    {formik.touched.start_date && formik.errors.start_date ? (
                                        <div>{formik.errors.start_date}</div>
                                    ) : null}
                                </Form.Group>
                                <Form.Group as={Col} className="mb-3">
                                    <Form.Label htmlFor='end_date'>Дата конца проекта</Form.Label>
                                    <Form.Control type="date" placeholder="Дата конца проекта..."
                                                  autoComplete="off"
                                                  name="end_date"
                                                  onChange={formik.handleChange}
                                                  value={formik.values.end_date}
                                    />
                                    {formik.touched.end_date && formik.errors.end_date ? (
                                        <div>{formik.errors.end_date}</div>
                                    ) : null}
                                </Form.Group>

                            </Row>
                            <div className='d-flex justify-content-end'>
                                <button className="btn-close close-modal " onClick={() => {
                                    setModalIsOpen(false)
                                }}>
                                </button>
                                <button className='button' type="submit" style={{width: '100%'}}>Добавить</button>
                            </div>
                        </Form>


                    </Modal>
                </div>
            </div>
        </Layout>
    );
};

export default Project;