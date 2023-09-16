import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { show_alerta } from '../functions';
//import logoJucar from "../assets/img/logoJucar.jpg"
//import DataTable from 'datatables.net-dt';
//import '../styles.css';

const ShowCategory = () => {
  const url = 'https://localhost:7028/api/categories/';
  const [categoryId,setCategoryId] = useState('')

  const URL = `${url}/${categoryId}`;
  
  const [categories,setCategories] = useState([])
  const [name,setName] = useState('')
  
  const [state,setState] = useState()
  const [creationDate,setCreationDate] = useState()
  const [modificationDate,setModificationDate] = useState()
  const [operation,setOpertaion]=useState([1])
  const [title, setTitle] = useState('');

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = async () => {
    const respuesta = await axios.get(url);
    setCategories(respuesta.data);
  };

  const openModal = (op, name,state,creationDate,modificationDate, categoryId) => {
    setCategoryId('')
    setName('') 
    setState('')
    setCreationDate(Date)
    setModificationDate(Date)
    setOpertaion(op);


    if (op === 1) { 
      setTitle('Registrar Categoria');
    } else if (op === 2) {
      setTitle('Editar Categoria');
      setCategoryId(categoryId)
      setName(name);
      setState(state)
      setCreationDate(creationDate)
      setModificationDate(modificationDate)
    }
    window.setTimeout(function () {
      document.getElementById('name').focus();
    }, 500);
  };

  const validar = (categoryId) => {
    console.log("Validar función ejecutada"); // Mensaje de depuración
    var parametros;
    var metodo;
    if (name.trim() === ''){
        show_alerta('Escribe el nombre de la categoria.', 'warning');
    }
    
    else if(state.trim() === ''){
      show_alerta('Escribe el estado de la categoria', 'warning');   
     }
    
    else 
    {
      if (operation === 1) {
        parametros = {
          name: name.trim(),
          state: state.trim(),
          creationDate:creationDate,
           modificationDate: modificationDate,
        };
        metodo = 'POST';
      } else {
        parametros = {
          name: name.trim(),
          state: state.trim(),
          modificationDate: modificationDate.trim(Date)

        };
        metodo = 'PUT';
      }
      enviarSolicitud(metodo, parametros,categoryId);
      confirmarSolicitud(metodo, parametros, categoryId);
      
    }
  };

  const enviarSolicitud = async (metodo,parametros) => {
    await axios({ method: metodo, url: url , data: parametros})
      .then(function (respuesta) {
        var tipo = respuesta.data[0];
        var msj = respuesta.data[1];
        show_alerta(msj, tipo);
        if (tipo === 'success') {
          document.getElementById('btnCerrar').click();
          getCategory();
        }
      })
      .catch(function (error) {
        show_alerta('Error en la solicitud', 'error');
        console.log(error);
      });
  };
  const confirmarSolicitud = async ( metodo,parametros) => {
    await axios({ method:metodo, url: URL, data: parametros })
      .then(function (respuesta) {
        var tipo = respuesta.data[0];
        var msj = respuesta.data[1];
        show_alerta(msj, tipo);
        if (tipo === 'success') {
          document.getElementById('btnCerrar').click();
          getCategory();
        }
      })
      .catch(function (error) {
        show_alerta('Error en la solicitud', 'error');
        console.log(error);
      });
  };
  const deleteAutopart = (categoryId, name) => {
    const MySwal = withReactContent(Swal);

    MySwal.fire({
      title: `¿Seguro desea eliminar este usuario ${name}?`,
      icon: 'question',
      text: 'No se podrá dar marcha atrás',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          // Realizar la solicitud DELETE al servidor
          await axios.delete(`${url}/${categoryId}`);

          show_alerta('Autoparte eliminado exitosamente', 'success');
          getCategory();
        } catch (error) {
          show_alerta('Error al eliminar la categoria', 'error');
          console.error(error);
        }
      } else {
        show_alerta('La categoria no fue eliminado', 'info');
      }
    });
  

}
  return (
    <div className='App'>

      
        {/* <nav className='navEnca' class="navbar navbar-expand-md py-3 navbar-light" >
          <div class="container">
            <a class="d-flex align-items-center"   href='.'>
              <img alt='logoJucar' className='logo' src={logoJucar}/></a>
            <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navcol-1">
              <span class="visually-hidden">Toggle navigation</span>
              <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navcol-1" class="collapse navbar-collapse">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item"></li>
                <li class="nav-item"></li>
                <li class="nav-item"></li>
              </ul>
            </div>
            <span  className="spanEnca" 
              
            >AUTOPARTES JUCAR SAS</span>
          </div>
        </nav> */}




      <div className='container-fluid'>
        <div className='row mt-3'>
          <div className='col-md-4 offset-4'>
            <div className='d-grid mx-auto'>
              <button onClick={() => openModal(1)} className='btn btn-dark' data-bs-toggle='modal' data-bs-target='#modalCategory'>
                <i className='fa-solid fa-circle-plus'></i> Añadir
              </button>
            </div>
          </div>
        </div>
        <div className='row mt-3'>
          <div className='col-12 col-lg-8 offset-0 offset-lg-12'>
            <div className='table-responsive'>
              <table className='table table-bordered'>
                <thead>
                  <tr>
                  <th>#</th>
                    <th>Nombre</th>
                    <th>Estado</th>
                    <th>Fecha de Creacion</th>
                    <th>Fecha de Modificacion</th>
                    
                  </tr>
                </thead>
                <tbody className='table-group-divider'>
                  {categories.map((categories, i) => (
                    <tr key={categories.categoryId}>
                      <td>{i + 1}</td>

                      <td>{categories.state}</td>
                      <td>{categories.creationDate}</td>
                      <td>{categories.modificationDate}</td>
                      <td>
                        <button
                          onClick={() =>
                            openModal(2, categories.name,
                               categories.state,
                               categories.creationDate, 
                               categories.modModificationDate)
                          }
                          className='btn btn-warning'
                          data-bs-toggle='modal'
                          data-bs-target='#modalAutoparts'
                        >
                          <i className='fa-solid fa-edit'></i>
                        </button>
                        &nbsp;
                       
                        <button onClick={()=>deleteAutopart(categories.categoryId,categories.name)} className="btn btn-danger">
                            <i className="fa-solid fa-trash"></i>
                        </button>
                        
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>



              {/* <footer className='footPieD' class="text-center bg-dark" >
    <div className='divPieD' class="container text-white py-4 py-lg-5" >
        <ul class="list-inline">
            <li class="list-inline-item"></li>
        </ul>
        <p  className='P1Foo'>Derechos reservados Jucar S.A.S</p>
        <p className='P2Foo' >Calle 7 #90-76 </p>
        <ul class="list-inline" style="width: 1250px;height: 57px;margin: 2px;padding: 0px;">
            <li className='L1Foo' class="list-inline-item me-4"><svg class="bi bi-facebook text-light" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                </svg></li>
            <li class="list-inline-item me-4" style="font-size: 37px;"><svg class="bi bi-twitter text-light" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                </svg></li>
            <li class="list-inline-item"><svg class="bi bi-instagram text-light" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" style="font-size: 36px;">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                </svg></li>
        </ul>
    </div>
</footer> */}


            </div>
          </div>
        </div>
      </div>
      <div id='modalCategory' className='modal fade' aria-hidden='true'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <label className='h5'>{title}</label>
              <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
            </div>
            <div className='modal-body'>
              <input type='hidden' id='id'></input>
              
              <div className='input-group mb-3'>
                <span className='input-group-text'>
                  <i className='fa fa-user'></i>
                </span>
                <input
                  type='text'
                  id='name'
                  className='form-control'
                  placeholder='Nombre Autoparte'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>
            
                
              </div>
              <div className='input-group mb-3'>
                <span className='input-group-text'>
                  <i className='fa-solid fa-gift'></i>
                </span>
               

              <div className='d-grid col-6 mx-auto'>
                <button onClick={() => validar()} className='btn btn-success'>
                  <i className='fa-solid fa-floppy-disk'></i> Guardar
                </button>
                
              </div>
              
            
            </div>
            <div className='modal-footer'>
              <button type='button' id='btnCerrar' className='btn btn-secondary' data-bs-dismiss='modal'>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default ShowCategory;