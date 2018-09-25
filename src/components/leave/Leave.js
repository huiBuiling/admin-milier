import React,{Component} from 'react'
import { Input  } from 'antd'

import LeaveView from './leaveView/LeaveWord'

/**
 * 记事目录
 * */
class Leave extends Component{
  constructor(props) {
    super(props);
    this.state = {
        LeaveList:[
            {
                title:'Leave one',
                date:'2017-07-07'
            },
            {
                title:'Leave one',
                date:'2017-07-07'
            },
            {
                title:'Leave one',
                date:'2017-07-07'
            },
            {
                title:'Leave one',
                date:'2017-07-07'
            },
            {
                title:'Leave one',
                date:'2017-07-07'
            }
        ],
    }
  }
  
  render() {
      const { LeaveList } = this.state;
      return (
          <div className="lee-rbb-all">
              <div className="leave">
                  <div className="leave-l">
                      <Input placeholder="Search"  />
                      <ul>
                          {
                            LeaveList.map((elem,index) => {
                              return(
                                  <li key={index}>
                                    <h3>{elem.title}</h3>
                                    <p>{elem.date}</p>
                                  </li>
                              )

                            })
                          }
                      </ul>
                  </div>
                  <div className="leave-r">
                      <LeaveView />
                  </div>
              </div>
          </div>
      )
  }
}
export default Leave