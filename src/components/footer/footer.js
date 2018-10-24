import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { withRouter } from 'react-router-dom';
import "./footer.css";
class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <Row>
                    <Col span={24}>
                        CNode - Created By duziten | Copyright © 2018-2-1<br />
                        联系人QQ：925187509
                    </Col>
                </Row>
            </div>
        )
    }
}
export default withRouter(Footer);