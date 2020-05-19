import React from 'react';
import { Modal, Button } from 'antd';
import "antd/dist/antd.css";
import '../assests/style.css';

class Notify extends React.Component {
    state = { visible: true
    };

    showModal = () => {
      this.setState({
        visible: true,
      });
    };

      handleOk = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };

      handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };

      render () {
        return (
          <div>
            <Modal className= 'popup'
              title='DISCLAIMER'
              visible={this.state.visible}
              onOk={this.handleOk}
              footer={[
                <Button key='ok' type='primary' onClick={this.handleOk}>
                  Ok
                </Button>,
              ]}
            >
              <p style={{color: 'black'}}>Jeg er bekendt med reglerne for droneflyvning og bekendt med, at Droneluftrum.dk-kortet ikke viser alle områder og placeringer, hvor der IKKE må flyves med drone. 
              Droneføreren accepterer ved download og/eller brug af Droneluftrum.dk-kortet at friholde Naviair for ethvert erstatningskrav, som måtte blive rettet mod Naviair 
              som følge af tab eller skade opstået ved droneflyvning under anvendelse af Droneluftrum.dk kortet </p>


              <p style={{color: 'black'}}>I am aware of the rules regarding flying with RPAS (Remotely Piloted Aircraft System) and aware of the limitations in the Droneluftrum.dk map. By downloading and/or 
              using the Droneluftrum.dk map, the person in charge of a drone agrees to indemnify Naviair against any claim for compensation directed at Naviair as a consequence of 
              loss or damage resulting from drone operation using the Droneluftrum.dk map</p>
            </Modal>
          </div>
        );
      }
}

export default Notify;

