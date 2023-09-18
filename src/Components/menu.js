
import mas from "../assets/imgs/mas.png"
import React from 'react';
import logoJucar from "../assets/imgs/logoJucar.jpg"
import atras from "../assets/imgs/atras.png"
import "../assets/css/menu.css";
import cliente from "../assets/imgs/cli.png"
import producto from "../assets/imgs/pro.png"
import proveedores from "../assets/imgs/proveedores.png"
import pedidos from "../assets/imgs/PEDI.png"
import factura from "../assets/imgs/VENTAS.png"
import empleados from "../assets/imgs/empleados.png"


const menu = ()=>{
    return(
        <><nav className='navEnca' class="navbar navbar-expand-md py-3 navbar-light">
            <div class="container">
                <a class="d-flex align-items-center" href='.'>
                    <img alt='logoJucar' className='logo' src={logoJucar} /></a>
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
                <span className="spanEnca"

                >AUTOPARTES JUCAR SAS</span>
            </div>
        </nav><section className='section1M' class="py-4 py-xl-5">
                <div class="container">
                    <div className='div1sec' class="row mb-5">
                        <div class="col-md-8 col-xl-6 text-center mx-auto">
                            <h1 className='h1'>MENU</h1>
                            <p class="text-start"></p>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <ul className="etUL" class="nav nav-tabs">
                        <li class="nav-item"><a class="nav-link active" href="/login.js"><img alt="mas" src={mas} /><span className="span1">Administrador</span></a></li>
                        <li class="nav-item"><a class="nav-link" href='/login.js'><img alt="atras" className="botAtra" src={atras} /></a></li>
                        <li class="nav-item"></li>
                    </ul>
                </div>
            </section><div className="di11">
                <section class="py-4 py-xl-5" className="sectionM">
                    <div className="div1Me" class="container py-4 py-xl-5">
                        <div className="div2Me" class="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3 d-flex" >
                            <div className="div3Me" class="col-xxl-5 offset-xxl-7" >
                                <div className="div4Me" class="card" ><a href="Cliente.html"><img className="cliente" class="fit-cover" alt="cliente" src={cliente} width="189" height="200" /></a>
                                    <div class="card-body p-4"><a class="text-bg-secondary" href="/Autopartes">
                                        <p className="pMe1" class="text-primary mb-0" >CLIENTES</p>
                                    </a></div>
                                </div>
                            </div>
                            <div className="div5Me" class="col-xxl-5 offset-xxl-7" >
                                <div className="div6Me" class="card" ><a href="/Autopartes"><img alt="producto" className="imgProducto" class="fit-cover"  src={producto} width="189" height="200" /></a>
                                    <div class="card-body p-4"><a class="text-bg-secondary" href="/Autopartes">
                                        <p className="pMe2" class="text-primary mb-0" >PRODUCTOS</p>
                                    </a></div>
                                </div>
                            </div>
                            <div className="div7Me" class="col-xxl-5 offset-xxl-7" >
                                <div className="div8Me" class="card" ><a href="PROVEEDORES.html"><img className="imgProvve" class="fit-cover" alt="proveedores" src={proveedores} width="189" height="200" /></a>
                                    <div class="card-body p-4"><a class="text-bg-secondary" href="PROVEEDORES.html">
                                        <p className="pMe3" class="text-primary mb-0" >PROVEEDORES</p>
                                    </a></div>
                                </div>
                            </div>
                            <div className="div9Me" class="col-xxl-5 offset-xxl-7" >
                                <div className="div10Me" class="card" ><a href="PEDIDDOS.html"><img alt="pedidos" className="imgPedidos" class="fit-cover"  src={pedidos} width="189" height="200" /></a>
                                    <div class="card-body p-4"><a class="text-bg-secondary" href="PEDIDDOS.html">
                                        <p className="pMe4" class="text-primary mb-0" >PEDIDOS</p>
                                    </a></div>
                                </div>
                            </div>
                            <div className="div11Me" class="col-xxl-5 offset-xxl-7" >
                                <div className="div12Me" class="card"><a href="FACTURA.html"><img className="imgFactura" alt="imgFactura" class="fit-cover"  src={factura}width="189" height="200" /></a>
                                    <div class="card-body p-4"><a class="text-bg-secondary" href="FACTURA.html">
                                        <p className="pMe5" class="text-primary mb-0" >FACTURAS</p>
                                    </a></div>
                                </div>
                            </div>
                            <div className="div13Me" class="col-xxl-5 offset-xxl-7" >
                                <div className="div14Me" class="card" ><a href="PEDIDDOS.html"><img className="imgPedidos" alt="imgPedidos"  class="fit-cover" src={empleados} width="189" height="200" /></a>
                                    <div class="card-body p-4"><a class="text-bg-secondary" href="EMPLEADOS.html">
                                        <p className="pMe6" class="text-primary mb-0">EMPLEADOS</p>
                                    </a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
         </div></>
    );
};

export default menu;