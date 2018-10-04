// import React, { Component } from 'react';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter, CustomInput, Label } from 'reactstrap';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

// class ModalSubmitFile extends Component {

//     constructor(props) {
//         super(props)

//         this.handleFile = this.handleFile.bind(this);
//         this.submitFile = this.submitFile.bind(this);

//         this.state = {

//             fileName: '',
//             fileTypeIsNotJson: true,
//             fileIsValid: true,
//             file: null

//         }
//     }

//     handleFile(e) {

//         var fileName

//         if (e) {
//             if (e.target.files[0].type != 'application/json') {
//                 this.setState({ fileName: '', fileTypeIsNotJson: true, fileIsValid: false });
//             } else {
//                 var file = e.target.files[0];
//                 fileName = file.name;
//                 this.setState({ file, fileName, fileTypeIsNotJson: false, fileIsValid: true })
//             }
//         } else {
//             this.setState({ fileName: '', fileTypeIsNotJson: true, fileIsValid: true });
//         }

//     }

//     submitFile(){
//         var file = this.state.file;
//         if(file) {
//             var reader = new FileReader();
//             reader.onload = e => 
//             {
//                 var fileContent = e.target.result;
//                 this.props.importFile(fileContent);
//             }
//             reader.readAsText(file);
//         }
//         this.props.closeModalSubmitFile();
//     }

//     render() {
//         return (
//             <div>
//                 <Modal size='md' toggle={() => { this.props.closeModalSubmitFile(), this.handleFile() }} isOpen={this.props.ismodalopen}>
//                     <ModalHeader className='modalBody justify-content-center'><span className='fa fa-download spanSendFile'></span> Envio de Arquivo de Dados</ModalHeader>
//                     <ModalBody className='modalBody'>
//                         <Label for="inputFile">Clique no Campo abaixo para enviar um Arquivo de Dados</Label>
//                         <CustomInput accept='.json' onChange={this.handleFile} type="file" id="inputFile" name="customFile" label={this.state.fileName ? this.state.fileName : "Nenhum arquivo selecionado..."} />
//                         <br />
//                         <br />
//                         <Label hidden={this.state.fileIsValid} style={{ color: 'red' }}>Apenas arquivos em Formato .JSON são permitidos.</Label>
//                     </ModalBody>
//                     <ModalFooter className='modalBody'>
//                         <Button className='btnCancel' onClick={() => { this.props.closeModalSubmitFile(), this.handleFile() }} color="secondary" ><i className="fa fa-times-circle" aria-hidden="true"></i> Cancelar</Button>
//                         <Button disabled={this.state.fileTypeIsNotJson} onClick={this.submitFile} className='btnSave' color="secondary"><i className="fa fa-share-square" aria-hidden="true"></i> Enviar Arquivo</Button>
//                     </ModalFooter>
//                 </Modal>
//             </div>
//         )
//     }
// }

// function mapStateToProps(state) {
//     return {
//         ismodalopen: state.submitfile.isModalOpen
//     }
// }

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ closeModalSubmitFile, importFile }, dispatch)
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ModalSubmitFile)
