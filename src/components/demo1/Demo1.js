import React,{ Component } from 'react';

import TablesResize from '../TablesResize'
/**
 * @author hui
 * @date 2018/12/18
 * @Description: Demo1
*/
export default class Demo1 extends Component {
    constructor(props){
        super(props);
        this.state={
        }
    }

    render() {
        return (
              <div className="lee-rbb-all">
                    <div className="lee-demo1">
                        11111111111111
                        <TablesResize />
                    </div>
              </div>
        );
  }
}
