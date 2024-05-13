import React, { PureComponent } from 'react'
import Bt1 from './component1/Bt1'
import Bt2 from './component2/Bt2'
import Bt3 from './component3/Bt3'
import Bt4 from './component4+5/Bt4+5'
import Bt6 from './component6/Bt6'
import Bt7 from './component7/Bt7'
import Bt8 from './component8/Bt8'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Bt1></Bt1>
        <Bt2></Bt2>
        <Bt3></Bt3>
        <Bt4></Bt4>
        <Bt6></Bt6>
        <Bt7></Bt7>
        <Bt8></Bt8>
      </div>
    )
  }
}
