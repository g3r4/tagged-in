import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadFile } from '../actions';
import ReactFileReader from 'react-file-reader';
import {
    Button,
    Col,
    Glyphicon,
    Grid,
    Row,
  } from 'react-bootstrap';
import csvtojson from 'csvtojson';

class UploadFile extends Component{
    
    handleFiles = files => {
        this.props.loadFile( files, () => {
            //Do something here after load
        });
    }
    
    render(){ 
        return(
            <div>
                <ReactFileReader fileTypes={[".csv"]} multipleFiles={false} base64={false} handleFiles={this.handleFiles}>
                    <Button bsStyle="primary" bsSize="large">Upload CSV file</Button>
                </ReactFileReader>
            </div>
        );
    }
}

export default connect(null, { loadFile })(UploadFile);


