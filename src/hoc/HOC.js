import React from 'react';

const withHoc = (InputComponent, data) => {
    class OutputComponent extends React.Component {
        constructor() {
            super();
            this.state = {
                tempinput: '',
                datalist: data,
                orgdatalist: data
            }
        }

        filterFn = (e) => {
            console.log(e.target.value);
            let tempfilterdata
            
            tempfilterdata = this.state.orgdatalist.filter((item) => {
                return item.indexOf(e.target.value) >=0;
            })

            console.log(this.state.orgdatalist);
            console.log(tempfilterdata);

            this.setState({
                tempinput: e.target.value,
                datalist: tempfilterdata,
                orgdatalist: this.state.orgdatalist
            })
        }

        render() {
            return(
                <>
                <br>
                </br>
                <input type="text" value={this.state.tempinput} onChange={(e) => this.filterFn(e)}/>
                <InputComponent dataRet = {this.state.datalist}/>

                </>
            )
        }
    }
    return OutputComponent;
}

export default withHoc;