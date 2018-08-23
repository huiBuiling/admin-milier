import React,{Component} from 'react'
import { Breadcrumb,Input  } from 'antd'

const noteList = [
  {
    title:'one',
    date:'2017-07-07'
  },
  {
    title:'one',
    date:'2017-07-07'
  },
  {
    title:'one',
    date:'2017-07-07'
  },
  {
    title:'one',
    date:'2017-07-07'
  },
  {
    title:'one',
    date:'2017-07-07'
  }
];
class Note extends Component{
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render() {
    return (
        <div className="content">
          <Breadcrumb className="crumb">
          <Breadcrumb.Item>Note</Breadcrumb.Item>
          <Breadcrumb.Item><a href="">notes</a></Breadcrumb.Item>
          </Breadcrumb>
          <div className="note">
            <div className="note-l">
              <Input placeholder="Search"  />
              <ul>
                  {
                    noteList.map((elem,index) => {
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
            <div className="noter">

            </div>
          </div>
        </div>
    )
  }
}
export default Note